import React from 'react';
import Sidebar from "../components/Sidebar";

function DashboardContentLayout({ children, heading }) {
    return (
        <div className={"flex"}>
            <Sidebar/>
            <div className={"p-7 text-2xl font-semibold flex-1 h-screen overflow-y-scroll"}>
                <h1 className={"ml-2 mb-2 text-dark-purple"}>{ heading }</h1>
                { children }
            </div>
        </div>
    );
}

export default DashboardContentLayout;