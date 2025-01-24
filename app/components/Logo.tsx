import { FaReact } from "react-icons/fa";
import { bebas } from "../ui/fonts";

const Logo = () =>{
    return (
        <div className={`${bebas.className} flex flex-row items-center leading-none text-white`}>
        <FaReact className="h-10 w-10 rotate-[15deg]" />
        <p className="text-[30px] ml-3 ">SERGIO</p>
    </div>
    )
}

export default Logo;