import { Button, IconButton } from "@material-tailwind/react";

type PaginationProps = {
   activePage: number;
   pagination: number;
   setActivePage: (arg: number) => any;
};

export const Pagination = ({ activePage, setActivePage, pagination }: PaginationProps) => {
   const next = () => {
      if (activePage === pagination) return;
      setActivePage(activePage + 1);
   };

   const prev = () => {
      if (activePage === 0) return;
      setActivePage(activePage - 1);
   };

   return (
      <div className="flex-center my-5 flex-wrap">
         <Button
            variant="text"
            className="flex-center p-0 text-xl text-teal-500 hover:bg-blue-gray-400/20 hover:brightness-125 ltr:text-base"
            onClick={prev}
            placeholder="previous"
            disabled={activePage === 0}
         >
            <i className="fa fa-arrow-left text-teal" />
            <span className="hidden pb-3 md:inline ltr:pb-1">prev</span>
         </Button>

         <div className="flex-center flex-wrap">
            {Array(pagination > 10 ? 10 : pagination)
               .fill(1)
               .map((_, index) => (
                  <IconButton
                     color="teal"
                     className="h-8 w-8 text-xl font-bold hover:bg-blue-gray-400/20 hover:brightness-125"
                     variant={activePage === index ? "gradient" : "text"}
                     placeholder="number"
                     key={index}
                     onClick={() => setActivePage(index)}
                  >
                     <span className="block md:-mt-2">{index + 1}</span>
                  </IconButton>
               ))}

            <IconButton
               variant="text"
               color="teal"
               placeholder="more"
               className={`h-8 w-8 text-xl font-bold ${pagination > 10 ? "" : "hidden"}`}
            >
               <span className="-mt-2 block whitespace-nowrap">- - - -</span>
            </IconButton>
         </div>

         <Button
            variant="text"
            className="flex-center p-0 text-xl text-teal-500 hover:bg-blue-gray-400/20 hover:brightness-125 ltr:text-base"
            onClick={next}
            placeholder="next"
            disabled={activePage === pagination - 1}
         >
            <span className="hidden pb-3 md:inline ltr:pb-1">next</span>
            <i className="fa fa-arrow-right text-teal" />
         </Button>
      </div>
   );
};
