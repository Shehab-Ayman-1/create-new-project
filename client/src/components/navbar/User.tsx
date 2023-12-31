import { Avatar, Menu, MenuHandler, MenuItem, MenuList, Typography } from "@material-tailwind/react";
import { useNavigate } from "react-router-dom";
import { useSelector } from "react-redux";

import { userLogo } from "@/assets";

export const User = () => {
   const { user } = useSelector(({ users }) => users);
   const navigate = useNavigate();

   const handleSignout = () => {
      sessionStorage.removeItem("user");
      window.location.reload();
   };

   if (!user) return;

   return (
      <Menu>
         <MenuHandler>
            <Avatar
               placeholder="avatar"
               variant="circular"
               alt="profile"
               className="h-6 w-6 cursor-pointer sm:h-8 sm:w-8"
               src={userLogo}
            />
         </MenuHandler>

         <MenuList placeholder="menu" className="bg-gradient rounded-xl">
            <MenuItem placeholder="menu-item" className="flex-start group gap-2 hover:!bg-dimTeal">
               <i className="fas fa-user-circle text-xl group-hover:text-teal-500" />
               <Typography
                  placeholder="name"
                  variant="paragraph"
                  className="text-xl font-bold group-hover:text-teal-500"
               >
                  {user.name}
               </Typography>
            </MenuItem>

            <MenuItem placeholder="menu-item" className="flex-start group gap-2 hover:!bg-dimTeal">
               <i className="fas fa-envelope-open text-xl group-hover:text-teal-500" />
               <Typography
                  placeholder="email"
                  variant="paragraph"
                  className="text-xl font-bold group-hover:text-teal-500"
               >
                  {user.email}
               </Typography>
            </MenuItem>

            <hr className="border-b-sp my-2 !border-teal-100 dark:!border-teal-900" />

            <MenuItem
               placeholder="menu-item"
               className="flex-start group gap-2 hover:!bg-dimTeal"
               onClick={() => navigate("/auths/login")}
            >
               <i className="fas fa-sign-in-alt text-xl group-hover:text-teal-500" />
               <Typography
                  placeholder="sign-in"
                  variant="paragraph"
                  className="text-xl font-bold group-hover:text-teal-500"
               >
                  Other Account
               </Typography>
            </MenuItem>

            <MenuItem
               placeholder="menu-item"
               className="flex-start group gap-2 hover:!bg-dimTeal"
               onClick={() => navigate("/auths/register")}
            >
               <i className="fas fa-user-plus text-xl group-hover:text-teal-500" />
               <Typography
                  placeholder="sign-up"
                  variant="paragraph"
                  className="text-xl font-bold group-hover:text-teal-500"
               >
                  Create Account
               </Typography>
            </MenuItem>

            <hr className="border-b-sp my-2 !border-teal-100 dark:!border-teal-900" />

            <MenuItem
               placeholder="menu-item"
               className="flex-start group gap-2 hover:!bg-dimTeal"
               onClick={handleSignout}
            >
               <i className="fas fa-sign-out-alt text-xl group-hover:text-teal-500" />
               <Typography
                  placeholder="sign-out"
                  variant="paragraph"
                  className="text-xl font-bold group-hover:text-teal-500"
               >
                  Sign Out
               </Typography>
            </MenuItem>
         </MenuList>
      </Menu>
   );
};
