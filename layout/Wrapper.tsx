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
               {children}
            </Provider>
         </SessionProvider>
      </ThemeProvider>
   );
};
