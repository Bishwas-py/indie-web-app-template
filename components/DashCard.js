import React from 'react';
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";
import Link from "next/link";

function DashCard({children, title, icon, iconColor = 'text-white', href="/", bgColor="bg-green-500" }) {
    return (
        <Link href={href}>
            <a className={`rounded-2xl px-3 py-5 text-center min-h-[292px] ${bgColor}`}>
                <FontAwesomeIcon icon={icon} className={`text-6xl ${iconColor} mb-3`}/>
                <h5 className={"font-medium text-white text-lg mb-3"}>{title}</h5>
                <p className={"text-[18px] leading-normal font-light text-white"}>
                    {children}
                </p>
            </a>
        </Link>
    );
}

export default DashCard;