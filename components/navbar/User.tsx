import { useRouter } from "next/navigation";
import { useSelector } from "@/hooks/useRedux";
import { signOut, useSession } from "next-auth/react";

import { Avatar, Menu, MenuItem, Typography } from "@/components/ui";
import { userLogo } from "@/public";
import { MenuItemEvent } from "@/types";

type UserItemProps = {
   name: string;
   icon: string;
   onClick?: (event: MenuItemEvent) => void;
};

const UserItem = ({ name, icon, onClick }: UserItemProps) => {
   return (
      <MenuItem className="flex-start group gap-2 hover:!bg-dimTeal" onClick={onClick}>
         <i className={`fas ${icon} text-base group-hover:text-teal-500`} />
         <Typography variant="paragraph" className="text-base font-bold text-dimWhite group-hover:text-teal-500">
            {name}
         </Typography>
      </MenuItem>
   );
};

export const User = () => {
   const { data: session } = useSession();
   const { user } = useSelector(({ users }) => users);
   const router = useRouter();

   const handleSignout = () => {
      signOut();
      window.location.reload();
   };

   if (!session || !session?.user?.email) return;

   return (
      <Menu handler={<Avatar src={session.user.image || userLogo.src} alt="avatar" />} allowHover={false}>
         <UserItem name={session.user.name || ""} icon="fa-user-circle" />
         <UserItem name={session.user.email || ""} icon="fa-envelope-open" />

         <hr className="border-b-sp my-2 !border-teal-100 dark:!border-teal-900" />

         <UserItem name="Other Account" icon="sign-in-alt" onClick={() => router.push("/auths/login")} />
         <UserItem name="Create Account" icon="sign-user-plus" onClick={() => router.push("/auths/register")} />

         <hr className="border-b-sp my-2 !border-teal-100 dark:!border-teal-900" />

         <UserItem name="Sign Out" icon="sign-sign-out-alt" onClick={handleSignout} />
      </Menu>
   );
};
