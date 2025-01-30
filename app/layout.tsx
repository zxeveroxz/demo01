import { FC, PropsWithChildren } from "react";
import "@/app/ui/globals.css";
import { roboto } from "./ui/fonts";
const Rootlayout:FC<PropsWithChildren> = ({children}) => {
  return (
    <html>
        <body className={`${roboto.className} antialiased  ` }>{children}</body> 
    </html>
  );
}
export default Rootlayout;