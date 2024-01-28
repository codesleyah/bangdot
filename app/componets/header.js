import Link from "next/link";
import { MobileIcon, PersonIcon } from "@radix-ui/react-icons";
import Image from "next/image";

export default function Header(){
    return(
        <div className="w-full flex justify-between items-center p-2 absolute bg-gray-800 shadow">
            <h1 className="font-bold text-white">BANGERZ TV</h1>
            <div className="flex rounded-full bg-gray-500 p-2">
                <PersonIcon />
            </div>
        </div>
    )
}