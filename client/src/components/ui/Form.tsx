import { FormSubmitEvent } from "@/types";
import { Typography, Button, Card, CardBody, CardHeader, CardFooter } from "@material-tailwind/react";
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
      <form onSubmit={onSubmit} autoComplete="off" {...formRest}>
         <Card
            placeholder="card"
            className={`border-sp bg-gradient mx-auto mb-2 mt-14 w-[650px] max-w-full shadow-sp md:mt-32 dark:shadow-none ${cardStyle}`}
         >
            <CardHeader
               variant="gradient"
               color="teal"
               placeholder="card-header"
               className={`flex-center mx-auto -mt-12 mb-4 h-20 w-[80%] bg-gradient-to-r from-teal-400 to-teal-900 sm:h-28 ${
                  headerStyle || ""
               }`}
            >
               <Typography placeholder="card-title" variant="h3" className="text-2xl md:text-3xl">
                  {headerText}
               </Typography>
            </CardHeader>

            <CardBody placeholder="card-body" className={`flex flex-col gap-4 p-3 ${bodyStyle}`}>
               {children}
            </CardBody>

            {buttonText && (
               <CardFooter placeholder="card-footer" className={`p-3 ${footerStyle}`}>
                  <Button
                     type="submit"
                     variant="gradient"
                     disabled={loading}
                     placeholder="card-button"
                     color="teal"
                     className="bg-teal-500 bg-gradient-to-r from-teal-400 to-teal-900 text-xl hover:brightness-125 md:text-2xl"
                     fullWidth
                  >
                     {buttonText}
                  </Button>
               </CardFooter>
            )}
         </Card>
      </form>
   );
};
