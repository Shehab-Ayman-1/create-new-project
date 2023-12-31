import { Accordion, AccordionBody, AccordionHeader, Drawer, List, ListItem } from "@material-tailwind/react";
import { useState } from "react";
import { Link } from "react-router-dom";

import { links } from "@/constants/navbar";

type MobileProps = {
   openDrawer: boolean;
   handleDrawer: () => void;
};

export const Mobile = ({ openDrawer, handleDrawer }: MobileProps) => {
   const [openAccordion, setOpenAccordion] = useState(0);

   const handleAccordion = (value: number) => {
      setOpenAccordion((open) => (open === value ? 0 : value));
   };

   const ChevronIcon = ({ id }: { id: number }) => {
      return <i className={`fa fa-chevron-right text-teal-500 ${id === openAccordion ? "-rotate-90" : ""}`} />;
   };

   return (
      <Drawer
         className="bg-gradient overflow-y-auto p-4 lg:hidden"
         placement="left"
         placeholder="Mobile-Drawer"
         open={openDrawer}
         onClose={handleDrawer}
         overlayProps={{ className: "h-screen !opacity-0" }}
      >
         <List placeholder="list">
            {links.map(({ title, path, paths }, i) =>
               title ? (
                  <Accordion
                     placeholder="accordion"
                     icon={<ChevronIcon id={i + 1} />}
                     open={openAccordion === i + 1}
                     key={i}
                  >
                     <ListItem placeholder="list-item" className="hover:bg-dimTeal">
                        <AccordionHeader
                           placeholder="accordion-header"
                           className="w-full text-xl font-bold !text-teal-500"
                           onClick={() => handleAccordion(i + 1)}
                        >
                           {title}
                        </AccordionHeader>
                     </ListItem>

                     <AccordionBody className="py-0">
                        <List placeholder="list" className="py-0">
                           {paths.map(({ name, icon, link, disabled }, i) =>
                              name ? (
                                 <Link
                                    className={disabled ? "pointer-events-none" : ""}
                                    to={`/${path}/${link}`}
                                    key={i}
                                 >
                                    <ListItem
                                       placeholder="list-item"
                                       className="flex-between group text-lg font-bold text-dimWhite hover:bg-dimTeal hover:text-teal-500"
                                       onClick={handleDrawer}
                                    >
                                       <div className="flex-start">
                                          <i className={`${icon} text-lg group-hover:text-teal-500`} />
                                          <p className="pb-2">{name}</p>
                                       </div>
                                       <i className={`fa fa-lock ${disabled ? "" : "!hidden"}`} />
                                    </ListItem>
                                 </Link>
                              ) : null,
                           )}
                        </List>
                     </AccordionBody>
                  </Accordion>
               ) : null,
            )}
         </List>
      </Drawer>
   );
};
