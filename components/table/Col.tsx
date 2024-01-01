import { Typography } from "@/components/ui";
import { ReactNode } from "react";

type ColProps = {
   head: string;
   className: string;
   typographyStyle: string;
   children: ReactNode;
};

export const Col = ({ head, className, typographyStyle, children, ...rest }: ColProps) => {
   if (head)
      return (
         <th className={`p-2 md:p-4 ${className || ""}`} {...rest}>
            <Typography
               className={`whitespace-nowrap text-center text-base font-bold md:text-xl ${typographyStyle || ""}`}
            >
               {children || " "}
            </Typography>
         </th>
      );

   return (
      <td className={`p-2 md:p-4 ${className || ""}`} {...rest}>
         <Typography
            className={`whitespace-nowrap text-center text-base font-bold md:text-xl ${typographyStyle || ""}`}
         >
            {children || "0"}
         </Typography>
      </td>
   );
};
