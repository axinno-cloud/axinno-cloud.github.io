import React, {useEffect, useState} from "react"

import Layout from "../components/layout"
import RepoCard from "../components/cards/repo"
import bgImage from "../media/phones.png"

import { TiWarning } from "react-icons/ti";

const IndexPage = () => {
    const [repos, setRepos] = useState([]);
    
    useEffect(() => {
        fetch("https://raw.githubusercontent.com/amorabda/cs-repos/master/repos-db.json")
            .then(r => r.json())
            .then(data => {
                setRepos(data)
            })
    }, [setRepos])

    return <Layout>
        <div className="flex items-center w-full flex-col">
          
            {repos &&
                repos.map((it, index) => <RepoCard url={it} key={index} isFirst={index===0}/>)
            }
        </div>
    </Layout>

}

export function Head() {
    return (
        <>
            <title>InnoFlix Repositories</title>
            <meta property="og:title" content="InnoFlix Repositories" />
            <meta property="og:description" content="InnoFlix is an Android app for streaming and downloading Movies, TV-Series and Anime." />
            <meta property="og:image" content={bgImage} />
            <meta property="og:image:type" content="image/png" />
            <meta name="twitter:card" content="summary_large_image" />
        </>
    )
}

export default IndexPage
