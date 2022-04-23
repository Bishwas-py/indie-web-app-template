import React from 'react';
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";
import Link from "next/link";

function DashCard({
                      children,
                      icon,
                      iconColor = 'text-black',
                      href = "/",
                      bgColor = "bg-sky-100",
                  }) {
    return (
        <Link href={href}>
            <a className={`relative flex justify-center group text-black px-3 hover:drop-shadow-2xl py-5 text-center]`}>
                <div
                    className={`flex group-hover:scale-110 duration-500 place-items-center w-full justify-center rounded-2xl h-36 ${bgColor}`}>
                    <FontAwesomeIcon icon={icon}
                                     className={`text-6xl opacity-30 duration-500 group-hover:text-black group-hover:opacity-60 ${iconColor} mb-3`}/>
                </div>
                <h5 className={"absolute text-center top-32 group-hover:scale-90 duration-500 w-fit mix-blend-overlay font-light text-sm text-white group-hover:text-black"}>{children}</h5>
            </a>
        </Link>
    );
}

export default DashCard;