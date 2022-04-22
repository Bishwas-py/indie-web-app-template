import React from 'react';
import DashboardContentLayout from "../layout/DashboardContentLayout";
import {faGoogle} from "@fortawesome/free-brands-svg-icons";
import DashCard from "../components/DashCard";
import {faBookAtlas} from "@fortawesome/free-solid-svg-icons";

function AboutUsGenerator(props) {
    return (
        <DashboardContentLayout heading={"Dashboard: All Our Apps"}>
            <div className={"flex flex-col sm:grid xl:grid-cols-4 lg:grid-cols-3 md:grid-cols-2 gap-4"}>
                <DashCard title={"Adsense Eligibility Checker"} icon={faGoogle}
                          href={"/analyzer/adsense-eligibility-checker"}>
                    Adsense Status Checker can scan your website and tells you that whether your website is ready
                    for Google Adsense.
                </DashCard>
                <DashCard title={"About Us Generator"} icon={faBookAtlas}
                          href={"/generator/about-us-generator"} bgColor={"bg-purple-500"}>
                    About us generator can be used in your shopify site. This is tool is totally qualified to be said a
                    About us generator for ecommerce website.
                </DashCard>
                <DashCard title={"About Us Generator"} icon={faBookAtlas}
                          href={"/generator/about-us-generator"} bgColor={"bg-purple-500"}>
                    About us generator can be used in your shopify site. This is tool is totally qualified to be said a
                    About us generator for ecommerce website.
                </DashCard>
                <DashCard title={"About Us Generator"} icon={faBookAtlas}
                          href={"/generator/about-us-generator"} bgColor={"bg-purple-500"}>
                    About us generator can be used in your shopify site. This is tool is totally qualified to be said a
                    About us generator for ecommerce website.
                </DashCard>
                <DashCard title={"About Us Generator"} icon={faBookAtlas}
                          href={"/generator/about-us-generator"} bgColor={"bg-purple-500"}>
                    About us generator can be used in your shopify site. This is tool is totally qualified to be said a
                    About us generator for ecommerce website.
                </DashCard>
            </div>
        </DashboardContentLayout>
    );
}

export default AboutUsGenerator;