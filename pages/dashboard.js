import React from 'react';
import DashboardContentLayout from "../layout/DashboardContentLayout";
import DashCard from "../components/DashCard";
import { faSearch } from "@fortawesome/free-solid-svg-icons";

function Dashboard(props) {
    return (
        <DashboardContentLayout padding={"p-5"} heading={"Dashboard: All Our Apps"}>
            <div className={"flex flex-col sm:grid xl:grid-cols-4 lg:grid-cols-3 md:grid-cols-2 gap-4"}>
                <DashCard title={"Tailwind Card: Search"} icon={faSearch}
                          href={"/search"}>
                    Your online profile searching gives a more comprehensive view of who you are. Making Profile is
                    super duper essential.
                </DashCard>
            </div>
        </DashboardContentLayout>
    );
}

export default Dashboard;