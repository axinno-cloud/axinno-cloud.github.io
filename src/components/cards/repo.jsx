import React, { useState, useEffect } from "react";

import CompatBtn from "../compatbtn";

const RepoCard = ({ url, isFirst }) => {
    const [data, setData] = useState(null)

    useEffect(() => {
        fetch(url)
            .then(r => r.json())
            .then(dat => {
                setData(dat)
            })
    }, [setData])

    if (data == null) {
        return <progress className="progress progress-primary w-full mx-10 md:w-2/3 mb-5"></progress>
    }

    return <article className="card bg-base-100 shadow-xl w-full mx-10 md:w-2/3 mb-5">
        <div className="card-body">
            <h2 className="card-title">{data.name || "Unnamed"}</h2>
            <p>
                {data.description || "No description provided"}
            </p>
            <div className="card-actions justify-end">
                <div className="btn-group">
                    <CompatBtn
                        autoFocus={isFirst}
                        group={true}
                        className="bg-emerald-400 hover:bg-emerald-500 text-white font-bold py-2 px-4 rounded-full"
                        href={`cloudstreamrepo://${url.replace(/^https?:\/\//, "")}`}
                        target="_blank"
                        >Install</CompatBtn>
                    <CompatBtn group={true} 
                        onClick={() => {
                            
                    }}></CompatBtn>
                </div>
            </div>
        </div>
    </article>
}

export default RepoCard
