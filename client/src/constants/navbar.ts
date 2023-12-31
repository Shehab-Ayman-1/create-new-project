// Directs
import { Home } from "@/views";

// Auths
import { Login, Register } from "@/views/auths";

/* Guide:
   - If [title] Is Defined      -> Create In Navbar Tabs
   - If [paths.name] Is Defined -> Create In Navbar Tab Menu
   - If [role] Is Defined       -> Just Allow Admin Users
*/

type Path = {
   name?: string;
   link: string;
   role: "admin" | "editor" | "user";
   icon?: string;
   disabled?: boolean;
   Component: () => JSX.Element;
};

export type LinksProps = {
   title?: string;
   path: string;
   paths: Path[];
};

export const links: LinksProps[] = [
   // Public Not In Navbar
   {
      path: "",
      paths: [
         {
            link: "",
            role: "user",
            Component: Home,
         },
      ],
   },

   // Auths Not In Navbar
   {
      path: "auths",
      paths: [
         {
            link: "login",
            role: "user",
            Component: Login,
         },
         {
            link: "register",
            role: "admin",
            Component: Register,
         },
      ],
   },

   // Home
   {
      title: "Home",
      path: "show",
      paths: [
         {
            name: "Page 1",
            link: "shop",
            role: "user",
            icon: "fas fa-store-alt",
            Component: Home,
         },
         {
            name: "Page 2",
            link: "store",
            role: "user",
            icon: "fas fa-warehouse",
            Component: Home,
         },
         {
            name: "Page 3",
            link: "locker-processes",
            role: "admin",
            icon: "fas fa-door-closed",
            disabled: true,
            Component: Home,
         },
         {
            name: "Page 4",
            link: "clients",
            role: "admin",
            icon: "fas fa-users-viewfinder",
            // disabled: true,
            Component: Home,
         },
         {
            name: "Page 5",
            link: "balances",
            role: "admin",
            icon: "fas fa-scale-unbalanced",
            disabled: true,
            Component: Home,
         },
      ],
   },

   // About
   {
      title: "About",
      path: "about",
      paths: [
         {
            name: "Page 1",
            link: "shop",
            role: "user",
            icon: "fas fa-store-alt",
            Component: Home,
         },
         {
            name: "Page 2",
            link: "store",
            role: "user",
            icon: "fas fa-warehouse",
            Component: Home,
         },
         {
            name: "Page 3",
            link: "locker-processes",
            role: "admin",
            icon: "fas fa-door-closed",
            disabled: true,
            Component: Home,
         },
         {
            name: "Page 4",
            link: "clients",
            role: "admin",
            icon: "fas fa-users-viewfinder",
            // disabled: true,
            Component: Home,
         },
         {
            name: "Page 5",
            link: "balances",
            role: "admin",
            icon: "fas fa-scale-unbalanced",
            // disabled: true,
            Component: Home,
         },
      ],
   },

   // Services
   {
      title: "Services",
      path: "services",
      paths: [
         {
            name: "Page 1",
            link: "shop",
            role: "user",
            icon: "fas fa-store-alt",
            Component: Home,
         },
         {
            name: "Page 2",
            link: "store",
            role: "user",
            icon: "fas fa-warehouse",
            Component: Home,
         },
         {
            name: "Page 3",
            link: "locker-processes",
            role: "admin",
            icon: "fas fa-door-closed",
            // disabled: true,
            Component: Home,
         },
         {
            name: "Page 4",
            link: "clients",
            role: "admin",
            icon: "fas fa-users-viewfinder",
            // disabled: true,
            Component: Home,
         },
         {
            name: "Page 5",
            link: "balances",
            role: "admin",
            icon: "fas fa-scale-unbalanced",
            // disabled: true,
            Component: Home,
         },
      ],
   },

   // Blogs
   {
      title: "Blogs",
      path: "blogs",
      paths: [
         {
            name: "Page 1",
            link: "shop",
            role: "user",
            icon: "fas fa-store-alt",
            Component: Home,
         },
         {
            name: "Page 2",
            link: "store",
            role: "user",
            icon: "fas fa-warehouse",
            Component: Home,
         },
         {
            name: "Page 3",
            link: "locker-processes",
            role: "admin",
            icon: "fas fa-door-closed",
            // disabled: true,
            Component: Home,
         },
         {
            name: "Page 4",
            link: "clients",
            role: "admin",
            icon: "fas fa-users-viewfinder",
            // disabled: true,
            Component: Home,
         },
         {
            name: "Page 5",
            link: "balances",
            role: "admin",
            icon: "fas fa-scale-unbalanced",
            // disabled: true,
            Component: Home,
         },
      ],
   },

   // Contact
   {
      title: "Contact",
      path: "contact",
      paths: [
         {
            name: "Page 1",
            link: "shop",
            role: "user",
            icon: "fas fa-store-alt",
            Component: Home,
         },
         {
            name: "Page 2",
            link: "store",
            role: "user",
            icon: "fas fa-warehouse",
            Component: Home,
         },
         {
            name: "Page 3",
            link: "locker-processes",
            role: "admin",
            icon: "fas fa-door-closed",
            // disabled: true,
            Component: Home,
         },
         {
            name: "Page 4",
            link: "clients",
            role: "admin",
            icon: "fas fa-users-viewfinder",
            // disabled: true,
            Component: Home,
         },
         {
            name: "Page 5",
            link: "balances",
            role: "admin",
            icon: "fas fa-scale-unbalanced",
            // disabled: true,
            Component: Home,
         },
      ],
   },
];

// Check If The User Role Is Allowed
export const dynamicRoute = (path: string) => {
   const routes = ["/profile", "/bills/update-bill", "/bills/show-bill"];
   const word = routes.find((word) => path.startsWith(word));
   return word || path;
};

export const getPathsOf = (role: string | number) => {
   const allowed = links.map(({ path, paths }) => ({ path, paths: paths.filter((item) => item.role === role) }));
   return allowed.reduce((prev: string[], cur) => {
      const paths = cur.paths.map((path) => `${cur.path ? `/${cur.path}` : ""}/${dynamicRoute(path.link)}`);
      return prev.concat(paths);
   }, []);
};
