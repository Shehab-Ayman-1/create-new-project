"use client";
import { Card, CardBody, CardHeader, Collapse, List, ListItem } from "@material-tailwind/react";
import { Fragment, useEffect, useState } from "react";
import { useRouter } from "next/navigation";

import { useDispatch, useSelector } from "@/hooks/useRedux";
import { getSearchList } from "@/redux/products";
import { useAxios } from "@/hooks/useAxios";
import { Loading } from "@/layout/Loading";
import { FieldEvent } from "@/types";

type SearchbarProps = {
   openSearchbar: boolean;
   setOpenSearchbar: (val: boolean) => void;
};

type SearchData = {
   name: string;
   companyId: string;
   productId: string;
};

export const Searchbar = ({ openSearchbar, setOpenSearchbar }: SearchbarProps) => {
   const { data, loading, isSubmitted, refetch } = useAxios<SearchData[] | null>();
   const { searchList } = useSelector(({ products }) => products);

   const [filterList, setFilterList] = useState<SearchData[] | null>(null);
   const [searchText, setSearchText] = useState("");
   const [startSearch, setStartSearch] = useState(false);
   const [open, setOpen] = useState(false);

   const router = useRouter();
   const dispatch = useDispatch();

   useEffect(() => {
      if (!startSearch || searchList.length) return;
      (async () => {
         const { data, error, isSubmitted } = await refetch("get", "/products/get-search-list");
         if (isSubmitted && error) return;
         dispatch(getSearchList(data));
      })();
   }, [startSearch, searchList]);

   useEffect(() => {
      if (!data?.length) return;
      const result = data.map((product) => {
         const matched = product.name.includes(searchText.trim());
         return matched ? product : null;
      });

      let searchList = result?.filter((item) => item) as SearchData[];

      setFilterList(searchList);
   }, [searchText]);

   const handleChange = (event: FieldEvent) => {
      setSearchText(() => event.target.value);
      setStartSearch(true);
      event.target.value ? setOpen(true) : setOpen(false);
   };

   const handleItem = (companyId: string, productId: string) => {
      router.push(`/profile/${companyId}/${productId}`);
      setOpen(false);
      setOpenSearchbar(false);
      setSearchText("");
   };

   return (
      <Fragment>
         <div
            className={`fixed left-0 top-0 -z-10 h-screen w-full ${openSearchbar ? "" : "hidden"}`}
            onClick={() => setOpenSearchbar(false)}
         />
         <Card
            placeholder="card"
            className={`fixed left-1/2 top-36 w-full max-w-2xl -translate-x-1/2 bg-transparent shadow-none ${
               openSearchbar ? "" : "hidden"
            }`}
         >
            <CardHeader
               placeholder="card-header"
               className={`flex-between bg-gradient rounded-3xl text-dimWhite shadow-sp ${
                  open ? `rounded-b-none` : ``
               }`}
            >
               <i className="fa fa-search block px-3 text-xl md:text-2xl" />
               <input
                  type="search"
                  placeholder="Search..."
                  className="w-full bg-transparent py-3 text-base placeholder:text-dimWhite sm:text-xl md:py-5 md:text-2xl dark:placeholder:text-white"
                  onChange={handleChange}
               />
            </CardHeader>

            <CardBody
               placeholder="card-body"
               className={`mx-auto max-h-[50vh] w-[90%] overflow-y-auto rounded-lg p-0 shadow-sp sm:w-[95%] ${
                  open ? "bg-gradient dark:text-white" : ""
               }`}
            >
               <Collapse open={open}>
                  <List placeholder="list">
                     {(filterList || searchList).length ? (
                        (filterList || searchList)?.map(
                           ({ name, companyId, productId }: SearchData, i: number) => (
                              <ListItem
                                 placeholder="list-item"
                                 key={i}
                                 className="text-xl font-bold hover:bg-dimTeal hover:dark:text-white"
                                 onClick={() => handleItem(companyId, productId)}
                              >
                                 {name.split(searchText).map((part, i) => (
                                    <Fragment key={i}>
                                       {i ? (
                                          <span className={searchText === " " ? "pr-1" : "text-teal"}>
                                             {searchText.trim()}
                                          </span>
                                       ) : null}
                                       {part}
                                    </Fragment>
                                 ))}
                              </ListItem>
                           ),
                        )
                     ) : !isSubmitted && loading ? (
                        <ListItem placeholder="list-item">
                           <Loading subLoading />
                        </ListItem>
                     ) : (
                        <ListItem placeholder="list-item">لا يوجد نتائج بحث</ListItem>
                     )}
                  </List>
               </Collapse>
            </CardBody>
         </Card>
      </Fragment>
   );
};
