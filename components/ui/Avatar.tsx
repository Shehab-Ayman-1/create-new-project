"use client";
import { Avatar as MTAvatar } from "@material-tailwind/react";

type AvatarProps = {
   variant?: "square" | "rounded" | "circular";
   alt: string;
   className?: string;
   src: string;
};

export const Avatar = ({ src = "", alt, variant = "rounded", className = "" }: AvatarProps) => {
   return (
      <MTAvatar
         placeholder="avatar"
         variant={variant}
         alt={alt}
         src={src}
         className={`h-6 w-6 cursor-pointer rounded-full sm:h-8 sm:w-8 ${className}`}
      ></MTAvatar>
   );
};
