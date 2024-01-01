type Link = {
   name: string;
   link: string;
   icon: string;
   disabled?: boolean;
};
export type LinksProps = {
   title: string;
   links: Link[];
};

export const links: LinksProps[] = [
   {
      title: "Home",
      links: [
         { name: "Page 1", link: "/page-1", icon: "fa fa-market-alt" },
         { name: "Page 2", link: "/page-2", icon: "fa fa-market-alt" },
         { name: "Page 3", link: "/page-3", icon: "fa fa-market-alt" },
         { name: "Page 4", link: "/page-4", icon: "fa fa-market-alt" },
         { name: "Page 5", link: "/page-5", icon: "fa fa-market-alt", disabled: true },
      ],
   },
   {
      title: "About",
      links: [
         { name: "Page 1", link: "/page-1", icon: "fa fa-market-alt" },
         { name: "Page 2", link: "/page-2", icon: "fa fa-market-alt" },
         { name: "Page 3", link: "/page-3", icon: "fa fa-market-alt" },
         { name: "Page 4", link: "/page-4", icon: "fa fa-market-alt", disabled: true },
         { name: "Page 5", link: "/page-5", icon: "fa fa-market-alt", disabled: true },
      ],
   },
   {
      title: "Services",
      links: [
         { name: "Page 1", link: "/page-1", icon: "fa fa-market-alt" },
         { name: "Page 2", link: "/page-2", icon: "fa fa-market-alt" },
         { name: "Page 3", link: "/page-3", icon: "fa fa-market-alt", disabled: true },
         { name: "Page 4", link: "/page-4", icon: "fa fa-market-alt" },
         { name: "Page 5", link: "/page-5", icon: "fa fa-market-alt", disabled: true },
      ],
   },
   {
      title: "Blogs",
      links: [
         { name: "Page 1", link: "/page-1", icon: "fa fa-market-alt" },
         { name: "Page 2", link: "/page-2", icon: "fa fa-market-alt", disabled: true },
         { name: "Page 3", link: "/page-3", icon: "fa fa-market-alt" },
         { name: "Page 4", link: "/page-4", icon: "fa fa-market-alt", disabled: true },
         { name: "Page 5", link: "/page-5", icon: "fa fa-market-alt", disabled: true },
      ],
   },
   {
      title: "Posts",
      links: [
         { name: "Page 1", link: "/page-1", icon: "fa fa-market-alt", disabled: true },
         { name: "Page 2", link: "/page-2", icon: "fa fa-market-alt", disabled: true },
         { name: "Page 3", link: "/page-3", icon: "fa fa-market-alt", disabled: true },
         { name: "Page 4", link: "/page-4", icon: "fa fa-market-alt", disabled: true },
         { name: "Page 5", link: "/page-5", icon: "fa fa-market-alt", disabled: true },
      ],
   },
   {
      title: "Contact",
      links: [
         { name: "Page 1", link: "/page-1", icon: "fa fa-market-alt", disabled: true },
         { name: "Page 2", link: "/page-2", icon: "fa fa-market-alt", disabled: true },
         { name: "Page 3", link: "/page-3", icon: "fa fa-market-alt", disabled: true },
         { name: "Page 4", link: "/page-4", icon: "fa fa-market-alt", disabled: true },
         { name: "Page 5", link: "/page-5", icon: "fa fa-market-alt", disabled: true },
      ],
   },
];
