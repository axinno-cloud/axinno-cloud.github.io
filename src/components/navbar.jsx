import React from "react"

import {FaDiscord, FaGithub, FaBars} from "react-icons/fa"
import {SiMatrix} from "react-icons/si"
import Button from "./navbar/button"

import logo from "../media/icon.svg"
import { Link } from "gatsby"

const Navbar = () => (
<div className="sticky top-0 z-30 flex h-16 w-full justify-center bg-opacity-90 backdrop-blur text-primary-content">
    <nav className="navbar w-full">
        <div className="navbar-start flex flex-0 md:gap-1 lg:gap-2">
            
        </div>
        <div className="flex navbar-center items-center gap-2">
            <Link className="flex flex-0 btn btn-ghost gap-4 text-base-content" to="/repos">
                <img src={logo} alt="Logo" className="object-contain h-12 w-24" />
                <span className="hidden md:inline">InnoFlix</span>
            </Link>
        </div>
        <div className="flex flex-0 navbar-end text-base-content">
            
        </div>
    </nav>
</div>
)

export default Navbar
