import { FC, PropsWithChildren } from "react";
import "@/app/ui/globals.css";
import { roboto } from "@/app/ui/fonts";
const Rootlayout:FC<PropsWithChildren> = ({children}) => {
  return (
    <html>
        <body className={`${roboto} antialiased  grid place-items-center body_dentro` }>{children}</body> 
    </html>
  );
}
export default Rootlayout;