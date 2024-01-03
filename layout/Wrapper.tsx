"use client";
import { ThemeProvider } from "@material-tailwind/react";
import { SessionProvider } from "next-auth/react";
import { Provider } from "react-redux";
import { ReactNode } from "react";

import { Configrator, Navbar } from "@/layout";
import { theme } from "@/constants";
import { store } from "@/redux/store";

type WrapperProps = {
   children: ReactNode;
};

export const Wrapper = ({ children }: WrapperProps) => {
   return (
      <ThemeProvider value={theme}>
         <SessionProvider>
            <Provider store={store}>
               <Navbar />

               <Configrator />

               <main className="mx-auto mt-20 w-full max-w-[1320px] p-2 text-dimWhite md:p-4 xl:p-0">
                  {children}
               </main>
            </Provider>
         </SessionProvider>
      </ThemeProvider>
   );
};
