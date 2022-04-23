import React from 'react';
import DashboardContentLayout from "../layout/DashboardContentLayout";
import DashCard from "../components/DashCard";
import { faSearch } from "@fortawesome/free-solid-svg-icons";
import {faEtsy, faFonticons, faFonticonsFi} from "@fortawesome/free-brands-svg-icons";

function Dashboard(props) {
    return (
        <DashboardContentLayout padding={"p-5"} heading={"Dashboard: All Our Apps"}>
            <div className={"flex flex-col sm:grid xl:grid-cols-7 lg:grid-cols-5 md:grid-cols-2 gap-4"}>
                <DashCard icon={faEtsy}
                          bgColor={"bg-yellow-500"}
                          href={"/apps/etsy-tag-generator"}>
                    Etsy Tag Generator
                </DashCard>
                <DashCard icon={faFonticonsFi}
                          bgColor={"bg-green-500"}
                          href={"/apps/etsy-tag-generator"}>
                    Fiverr Tag Generator
                </DashCard>
            </div>
        </DashboardContentLayout>
    );
}

export default Dashboard;