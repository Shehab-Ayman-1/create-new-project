import { Typography, Button, Card, CardBody, CardHeader, CardFooter } from "@/components/ui";
import { FormSubmitEvent } from "@/types";
import { ReactNode } from "react";

type FormProps = {
   headerText: string;
   buttonText: string;
   cardStyle?: string;
   headerStyle?: string;
   bodyStyle?: string;
   footerStyle?: string;
   loading?: boolean;
   onSubmit: (event: FormSubmitEvent) => any;
   children: ReactNode;
};

export const Form = ({
   headerText = "",
   buttonText = "",
   cardStyle = "",
   headerStyle = "",
   bodyStyle = "",
   footerStyle = "",
   loading = false,
   onSubmit = () => {},
   children,
   ...formRest
}: FormProps) => {
   return (
      <form onSubmit={onSubmit} {...formRest}>
         <Card
            className={`border-sp bg-gradient mx-auto mb-2 mt-14 w-[650px] max-w-full overflow-x-visible md:mt-32 ${cardStyle}`}
         >
            <CardHeader className={headerStyle}>
               <Typography color="white" variant="h3" className="text-2xl md:text-3xl">
                  {headerText}
               </Typography>
            </CardHeader>

            <CardBody className={bodyStyle}>{children}</CardBody>

            {buttonText && (
               <CardFooter className={footerStyle}>
                  <Button type="submit" disabled={loading} className="from-teal-400 to-teal-900" fullWidth>
                     {buttonText}
                  </Button>
               </CardFooter>
            )}
         </Card>
      </form>
   );
};
