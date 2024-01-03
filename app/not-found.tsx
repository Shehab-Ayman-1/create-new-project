"use client";
import { Typography } from "@/components/ui";
import { NotFoundCover } from "@/public";
import { useEffect } from "react";

const PageNotFound = () => {
   useEffect(() => {
      document.querySelector(".navbar")?.remove();
      document.querySelector(".configrator")?.remove();
   }, []);
   return (
      <div className="fixed-center">
         <img src={NotFoundCover.src} alt="404 page" className="mx-auto block h-full w-full object-contain" />
         <Typography variant="h3" className="mt-5 text-center">
            Page Not Found
         </Typography>
      </div>
   );
};

export default PageNotFound;
