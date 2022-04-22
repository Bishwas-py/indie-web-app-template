import React from 'react';
import DashboardContentLayout from "../layout/DashboardContentLayout";
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";
import {faKey, faSearch} from "@fortawesome/free-solid-svg-icons";

function Search(props) {
    return (
        <DashboardContentLayout>
            <div className="bg-light-smooth-blue w-full text-gray-100 shadow p-10">
                <div className="mb-9 text-center grid gap-y-2">
                    <h1 className="text-4xl">Etsy Tag Generator</h1>
                    <p className={"text-lg"}>Get Etsy tags to quickly increase visibility of your Etsy Shop.</p>
                </div>
                <div
                    className="mb-8 px-6 py-3 border border-gray-200 border-opacity-75 rounded-lg shadow-lg w-full flex items-center">
                    <input type="search" className="w-full bg-transparent text-base xl:w-11/12 lg:w-10/12 sm:w-9/12 focus:outline-none"
                           placeholder="Type you tag" />
                    <button className="focus:outline-none xl:w-1/12 lg:w-2/12 sm:w-3/12 ">
                        <FontAwesomeIcon icon={faSearch}/>
                        <span className={"ultra-sm:hidden align-middle sm:inline sm:ml-3 text-sm"}>Search</span>
                    </button>
                </div>
            </div>
            <div className="bg-blue-900 h-full text-gray-100 shadow p-10">
                <div className="mb-9 text-center grid gap-y-2">
                    <h4 className="text-lg">Get your High quality Etsy Tags</h4>
                </div>
                <div
                    className="mb-8 px-6 py-3 border border-gray-200 border-opacity-75 rounded-lg shadow-lg w-fit flex items-center">

                </div>
            </div>
        </DashboardContentLayout>
);
}

export default Search;