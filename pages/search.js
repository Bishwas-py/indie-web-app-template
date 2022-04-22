import React from 'react';
import DashboardContentLayout from "../layout/DashboardContentLayout";
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";
import {faKey, faSearch} from "@fortawesome/free-solid-svg-icons";

function Search(props) {
    return (
        <DashboardContentLayout>
            <div className="bg-light-smooth-blue text-gray-100 rounded-2xl shadow p-10 w-full">
                <div className="mb-9 text-center grid gap-y-2">
                    <h1 className="text-4xl">Etsy Tag Generator</h1>
                    <p className={"text-lg"}>Get Etsy tags to quickly increase visibility of your Etsy Shop.</p>
                </div>
                <div
                    className="mb-8 px-6 py-3 border border-gray-200 border-opacity-75 rounded-lg shadow-lg w-full space-x-6 flex items-center">
                    <input type="search" className="w-full bg-transparent text-base focus:outline-none"
                           placeholder="Type you tag" />
                    <button className="focus:outline-none">
                        <FontAwesomeIcon icon={faSearch}/>
                    </button>
                </div>
            </div>
        </DashboardContentLayout>
);
}

export default Search;