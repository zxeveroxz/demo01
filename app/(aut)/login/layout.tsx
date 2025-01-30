import { FC, PropsWithChildren } from "react";
import "@/app/ui/globals.css";
const Rootlayout:FC<PropsWithChildren> = ({children}) => {
  return (
    <>{children}</>
  );
}
export default Rootlayout;