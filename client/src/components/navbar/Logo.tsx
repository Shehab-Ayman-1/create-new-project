import { Typography } from "@material-tailwind/react";
import { Link } from "react-router-dom";

export const Logo = () => {
   return (
      <Link to="/">
         <Typography
            variant="h1"
            placeholder="logo"
            className="text-gradient -mt-2 pb-2 text-2xl sm:-mt-1 md:-mt-2 md:pb-3 md:text-4xl lg:text-4xl ltr:mt-0"
         >
            Logo
         </Typography>
      </Link>
   );
};
