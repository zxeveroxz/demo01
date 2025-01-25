"use client";
import Link from "next/link";
import { FaFileInvoice, FaHome,  FaUser } from "react-icons/fa";

const links = [
    {
        name: "Dashboard",
        href: "/dashboard",
        icon: FaHome,
    },
    {
        name: "Usuarios",
        href: "/dashboard/users",
        icon: FaUser,
    },
    {
        name: "Invoice",
        href: "/dashboard/invoices",
        icon: FaFileInvoice,
    },
];

const NavLinks = () => {
    return (
        <>
            {links.map((x) => {
                const LinIcon = x.icon;
                return (
                    <Link
                        href={x.href}
                        className="flex h-[48px] grow items-center justify-center gap-2 rounded-md bg-slate-700 p-3 text-lg text-white font-bold hover:bg-slate-500 hover:text-white md:flex-none md:justify-start md:p-2 md:px-3"                    >
                        <LinIcon className="w-6" />
                        <p className="hidden md:block">{x.name}</p>
                    </Link>
                );
            })}
        </>
    )
}

export default NavLinks