import React, {useState} from 'react';
import DashboardContentLayout from "../../layout/DashboardContentLayout";
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";
import {faKey, faSearch} from "@fortawesome/free-solid-svg-icons";

function EtsyTagGenerator(props) {
    let [tags, setTags] = useState(null)
    let [searchQuery, setSearchQuery] = useState("null")
    let fetchTags = async (event) => {
        event.preventDefault();

        console.log(`https://www.etsy.com/suggestions_ajax.php?search_query=${searchQuery.body}`)

        let response = await fetch(`/api/etsy-tags?key=${searchQuery.body}`, {
            headers: {
                'Content-Type': 'application/json',
                'Authority': "www.etsy.com",
                'Accept': "text/html,application/xhtml+xml,application/xml;q=0.9,image/avif,image/webp,image/apng,*/*;q=0.8,application/signed-exchange;v=b3;q=0.9"
            }
        })
        let received_data = await response.json()
        let data = received_data['results']
        data.pop(data.length - 1)
        setTags(data)
    }
    return (
        <DashboardContentLayout>
            <div className="bg-light-smooth-blue w-full text-gray-100 shadow p-10">
                <div className="mb-9 text-center grid gap-y-2">
                    <h1 className="text-4xl ultra-sm:text-2xl">Etsy Tag Generator</h1>
                    <p className={"text-lg ultra-sm:text-sm"}>Get Etsy tags to quickly increase visibility of your Etsy
                        Shop.</p>
                </div>
                <form
                    onSubmit={fetchTags}
                    className="mb-8 px-6 py-3 border border-gray-200 border-opacity-75 rounded-lg shadow-lg w-full flex items-center">
                    <input onChange={(e) => setSearchQuery(
                        {...searchQuery, 'body': e.target.value}
                    )} value={searchQuery?.body ?? ""}
                           type="search"
                           className="w-full bg-transparent text-base xl:w-11/12 lg:w-10/12 sm:w-9/12 focus:outline-none"
                           placeholder="Type you tag"/>
                    <button
                        className="focus:outline-none xl:w-1/12 lg:w-2/12 sm:w-3/12 ">
                        <FontAwesomeIcon icon={faSearch}/>
                        <span className={"ultra-sm:hidden align-middle sm:inline sm:ml-3 text-sm"}>Search</span>
                    </button>
                </form>
            </div>
            {tags?.length > 0 &&
                <div className="bg-blue-100 h-auto min-h-full text-smooth-blue shadow p-10">
                    <div className="mb-9 text-center grid gap-y-2">
                        <h4 className="text-lg">Get your High quality Etsy Tags</h4>
                    </div>
                    <div className={""}>
                        {tags?.map((tag, index) => (
                            <div key={index}
                                 className="inline-flex mx-2 mb-8 px-6 py-3 border border-gray-200 border-opacity-75 rounded-lg shadow-lg">
                                {tag.query}
                            </div>
                        ))}
                    </div>
                </div>
            }
        </DashboardContentLayout>
    );
}

export default EtsyTagGenerator;