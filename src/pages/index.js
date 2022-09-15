import React from "react"

import Layout from "../components/layout"
import Hero from "../components/hero"
import CompatBtn from "../components/compatbtn"

import bgImage from "../media/phones.png"
import { Link } from "gatsby"

const IndexPage = () => {
    return <Layout>
        <Hero bg={bgImage}>
        <h1 className="mb-5 text-5xl font-bold">Hello there</h1>
            <p className="mb-5 text-lg">InnoFlix is an Android app for streaming and downloading Movies, TV-Series and Anime.</p>
            <div className="flex justify-center w-full mb-5">
                <CompatBtn autoFocus={true} className="btn-bg-emerald-400 hover:bg-emerald-500 text-white font-bold py-2 px-4 rounded-full" href="/install">Install</CompatBtn>
                <div className="divider divider-horizontal" />
                <CompatBtn className="btn-bg-emerald-400 hover:bg-emerald-500 text-white font-bold py-2 px-4 rounded-full" href="/repos">Repositories</CompatBtn>
            </div>
         
        </Hero>
    </Layout>

}

export default IndexPage


export function Head() {
    return (
        <>
            <title>InnoFlix</title>
            <meta property="og:title" content="InnoFlix" />
            <meta property="og:description" content="InnoFlix is an Android app for streaming and downloading Movies, TV-Series and Anime." />
            <meta property="og:image" content={bgImage} />
            <meta property="og:image:type" content="image/png" />
            <meta name="twitter:card" content="summary_large_image" />
            <meta name="google-site-verification" content="eJAZtihmv0cJwd54kImmb2IfwLskeCfyW7gEm_HgXd8" />
        </>
    )
}
