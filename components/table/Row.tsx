import { ReactNode } from "react";

type RowProps = {
   className: string;
   index: number;
   children: ReactNode;
};

export const Row = ({ className, index, children, ...rest }: RowProps) => {
   return (
      <tr
         className={`p-2 print:border-0 print:border-b print:border-solid print:border-b-teal-200 md:p-4 ${
            className || ""
         } ${index % 2 ? "from-dimTeal dark:to-dimTeal bg-gradient-to-r to-teal-100" : ""}`}
         {...rest}
      >
         {children}
      </tr>
   );
};
