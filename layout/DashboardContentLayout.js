import React from 'react';
import Sidebar from "../components/Sidebar";

function DashboardContentLayout({ children, padding }) {
    return (
        <div className={"flex"}>
            <Sidebar/>
            <div className={`${padding} text-2xl font-semibold content-center w-full h-screen overflow-y-scroll scrollbar-hide`}>
                { children }
            </div>
        </div>
    );
}

export default DashboardContentLayout;