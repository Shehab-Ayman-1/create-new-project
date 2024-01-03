import type { Metadata } from "next";
import { ReactNode } from "react";
import { Wrapper } from "@/layout";
import "@/public/sass/index.scss";
import "@/public/fonts/fontAwasome.css";

export const metadata: Metadata = {
   title: "Next App",
   description: "Next App Description",
};

export default function RootLayout({ children }: { children: ReactNode }) {
   return (
      <html lang="en" data-theme="" className="dark">
         <body>
            <Wrapper>{children}</Wrapper>
         </body>
      </html>
   );
}
