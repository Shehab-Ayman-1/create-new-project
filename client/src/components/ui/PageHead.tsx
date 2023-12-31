import { Typography, TypographyProps } from "@material-tailwind/react";

type PageHeadProps = TypographyProps & {
   text: string;
};

export const PageHead = ({ variant, color, className, text = "" }: PageHeadProps) => {
   return (
      <Typography
         variant={variant || "h3"}
         placeholder="typography"
         color={color || "teal"}
         className={`mb-4 text-center ${className || ""}`}
      >
         {text}
      </Typography>
   );
};
