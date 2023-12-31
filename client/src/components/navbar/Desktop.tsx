import { Button, Menu, MenuHandler, MenuList, MenuItem } from "@material-tailwind/react";
import { Link } from "react-router-dom";
import { links } from "@/constants/navbar";

export const Desktop = () => {
   return (
      <div className="flex-center !hidden flex-wrap print:!hidden lg:!flex">
         {links.map(({ title, path, paths }, i) =>
            title ? (
               <Menu allowHover key={i}>
                  <MenuHandler>
                     <Button
                        placeholder="button"
                        className="flex-start group px-3 text-base hover:brightness-125"
                        variant="text"
                        size="sm"
                        color="teal"
                     >
                        <span>{title}</span>
                        <i className="fa fa-chevron-down text-sm group-hover:text-teal-500 rtl:mt-3" />
                     </Button>
                  </MenuHandler>

                  <MenuList placeholder="menu-list" className="bg-gradient">
                     {paths?.map(({ name, icon, link, disabled }, i) =>
                        name ? (
                           <Link
                              to={`/${path}/${link}`}
                              className={`whitespace-nowrap font-bold ${disabled ? "pointer-events-none" : ""}`}
                              key={i}
                           >
                              <MenuItem placeholder="menu-item" className="flex-between group">
                                 <div className="flex-start">
                                    <i className={`${icon} text-base group-hover:text-teal-500`} />
                                    <span className={`pb-3`}>{name}</span>
                                 </div>
                                 <i className={`fa fa-lock ${disabled ? "" : "!hidden"}`} />
                              </MenuItem>
                           </Link>
                        ) : null,
                     )}
                  </MenuList>
               </Menu>
            ) : null,
         )}
      </div>
   );
};
