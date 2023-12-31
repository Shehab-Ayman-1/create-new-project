import { Typography } from "@material-tailwind/react";
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
               placeholder="typography"
               variant="h5"
               className={`whitespace-nowrap text-center text-base font-bold md:text-xl ${typographyStyle || ""}`}
            >
               {children || " "}
            </Typography>
         </th>
      );
   if (!head)
      return (
         <td className={`p-2 md:p-4 ${className || ""}`} {...rest}>
            <Typography
               placeholder="typography"
               variant="h5"
               className={`whitespace-nowrap text-center text-base font-bold md:text-xl ${typographyStyle || ""}`}
            >
               {children || "0"}
            </Typography>
         </td>
      );
};
