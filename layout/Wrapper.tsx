"use client";
import { ThemeProvider } from "@material-tailwind/react";
import { ReactNode } from "react";
import { Provider } from "react-redux";

import { theme } from "@/constants";
import { store } from "@/redux/store";
import { Configrator, Navbar } from "@/layout";

type WrapperProps = {
   children: ReactNode;
};

export const Wrapper = ({ children }: WrapperProps) => {
   return (
      <ThemeProvider value={theme}>
         <Provider store={store}>
            <Navbar />
            <Configrator />

            {children}
         </Provider>
      </ThemeProvider>
   );
};
