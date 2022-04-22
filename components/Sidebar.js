import {FontAwesomeIcon} from '@fortawesome/react-fontawesome'

import {useState} from "react";
import {faChevronLeft} from "@fortawesome/free-solid-svg-icons";
import paths from "../utils/paths";
import Link from "next/link";

export default function Sidebar() {
    const [open, setOpen] = useState(false);
    return (
        <div
            className={`${open ? "w-64 sm:relative ultra-sm:fixed ultra-sm:w-full" : "w-20"} relative align-middle duration-700 transition-all h-screen p-3 pt-8 bg-dark-purple`}>
            <div onClick={() => setOpen(!open)}
                 className={`absolute w-7 h-7 cursor-pointer -right-3 top-9
                        flex justify-center align-middle place-items-center
                        duration-500
                        ${open && `ultra-sm:-right-0`}
                        border-2 border-dark-purple rounded-full bg-white`}>
                <FontAwesomeIcon icon={faChevronLeft}
                                 className={`${!open && "rotate-180"} duration-700`}/>
            </div>
            <div className={"w-full pl-1"}>
                <div className={`flex ${!open ? "p-2 w-12" : "py-2 px-3 gap-x-4"} items-center` +
                    ` cursor-pointer rounded-md bg-light-white hover:bg-blue-500`}>
                    <img src={"/favicon.svg"} alt=''
                         className={`cursor-pointer duration-500 ` +
                             `${open ? "w-6" : "w-auto rotate-[360deg]"}`}/>
                    <h1 className={`text-white origin-left font-medium 
                            duration-300 ${!open && "scale-0 h-0"}`}>Webmatrices Apps</h1>
                </div>
            </div>
            <div className={"pt-3 overflow-y-scroll h-[89%] scrollbar-hide"}>
                {paths.map((path, index) => (
                    <Link key={index} href={`${path.url}`}>
                        <a
                            className={`text-gray-300 group flex ${open && "gap-x-4"} cursor-pointer ` +
                                `p-3 py-2.5 hover:bg-light-white rounded-md ${path.gap && "mb-7"}`}>
                            <FontAwesomeIcon
                                className={`${open ? "text-2xl mr-3" : "text-3xl"} duration-500 group-hover:scale-110 group-hover:text-white`}
                                icon={path.faIcon}/>
                            <span
                                className={`${!open && "scale-0"} transition-all origin-left duration-500 truncate`}>{path.title}</span>
                        </a>
                    </Link>
                ))}
            </div>
        </div>
    )
}
