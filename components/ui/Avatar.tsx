"use client";
import { Avatar as MTAvatar } from "@material-tailwind/react";

type StaticImage = {
   width: number;
   height: number;
   src: string;
};

type AvatarProps = {
   variant?: "square" | "rounded" | "circular";
   alt: string;
   className?: string;
   image: StaticImage;
};

export const Avatar = ({ image, alt, variant = "rounded", className = "" }: AvatarProps) => {
   return (
      <MTAvatar
         placeholder="avatar"
         variant={variant}
         alt={alt}
         src={image.src}
         className={`h-6 w-6 cursor-pointer sm:h-8 sm:w-8 ${className}`}
      ></MTAvatar>
   );
};
