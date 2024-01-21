"use client";
import { useRouter } from "next/navigation";
import { BookmarkIcon, DashboardIcon, ExitIcon, GearIcon, IdCardIcon, PersonIcon } from "@radix-ui/react-icons";

export default function Sidebar(){

    const router = useRouter();


    return(
        <div className="bg-slate-200 p-8">
                    <ul className="flex flex-col gap-4">
                       <li>
                            <button className="flex gap-2 items-center justify-center" onClick={()=> router.push("/pages/dashboard")}>  
                                <span className="bg-white p-2 rounded">
                                    <DashboardIcon />
                                </span>
                                <span className="font-semibold text-sm">Dashboard</span>
                            </button>
                       </li>
                       <li>
                            <button className="flex gap-2 items-center justify-center" onClick={()=> router.push("/pages/students")}>  
                                <span className="bg-white p-2 rounded">
                                    <PersonIcon />
                                </span>
                                <span className="font-semibold text-sm">Students</span>
                            </button>
                       </li>
                       <li>
                            <button className="flex gap-2 items-center justify-center"  onClick={()=> router.push("/pages/courses")}>
                                <span className="bg-white p-2 rounded">
                                    <BookmarkIcon />
                                </span>
                                <span className="font-semibold text-sm">Courses</span>
                            </button>
                       </li>
                       <li>
                            <button className="flex gap-2 items-center justify-center"  onClick={()=> router.push("/pages/teachers")}>
                                <span className="bg-white p-2 rounded">
                                    <PersonIcon/>
                                </span>
                                <span className="font-semibold text-sm">Teachers</span>
                            </button>
                       </li>
                       <li>
                            <button className="flex gap-2 items-center justify-center" onClick={()=> router.push("/pages/payments")}>
                                <span className="bg-white p-2 rounded">
                                    <IdCardIcon/>
                                </span>
                                <span className="font-semibold text-sm">Payments</span>
                            </button>
                       </li>
                       <li>
                            <button className="flex gap-2 items-center justify-center" onClick={()=> router.push("/pages/settings")}>
                                <span className="bg-white p-2 rounded">
                                    <GearIcon/>
                                </span>
                                <span className="font-semibold text-sm">Settings</span>
                            </button>
                       </li>
                       <li>
                            <button className="flex gap-2 items-center justify-center" onClick={()=> router.push("/pages/login")}>
                                <span className="bg-white p-2 rounded">
                                    <ExitIcon/>
                                </span>
                                <span className="font-semibold text-sm">Logout</span>
                            </button>
                       </li>
                    </ul>
                </div>
    )
}