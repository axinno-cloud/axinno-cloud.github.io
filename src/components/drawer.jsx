import { graphql, StaticQuery } from "gatsby"
import React from "react"

import { Link } from "gatsby"
import { node2slug } from "../utils"

function ChildrenNodes({nodes, parent}) {
    const filtered = nodes.filter(it => {
        return it.frontmatter.parent === parent
    })

    if (filtered.length < 1) return <></>

    if (parent === null) {
        return <>{filtered.map(it => {
            return <li>
                <Link to={node2slug(it)}>{it.frontmatter.title}</Link>
                <ChildrenNodes nodes={nodes} parent={it.frontmatter.title} />
            </li> 
        })}</>
    }

    return <a><details>{filtered.map(it => {
        return <li>
            <Link to={node2slug(it)}>{it.frontmatter.title}</Link>
            <ChildrenNodes nodes={nodes} parent={it.frontmatter.title} />
        </li> 
    })}</details></a>
}

const Drawer = () => (
    <ul className="menu p-4 overflow-y-auto w-80 bg-base-100 text-base-content">
        <li><Link to="/">Home</Link></li>
        <li><Link to="/repos">Repositories</Link></li>
    </ul>)

export default Drawer
