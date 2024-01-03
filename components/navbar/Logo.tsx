import { Typography } from "@/components/ui";
import Link from "next/link";

export const Logo = () => {
   return (
      <Link href="/">
         <Typography className="text-gradient -mt-2 pb-2 text-2xl hover:brightness-125 sm:-mt-1 md:pb-3 md:text-4xl lg:text-4xl ltr:mt-0">
            Logo
         </Typography>
      </Link>
   );
};
