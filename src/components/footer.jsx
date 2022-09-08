import React from "react"

const Footer = () => (
    <footer class="footer footer-center p-10 mt-15 bg-base-200 text-base-content rounded gap-2">
        <div class="grid grid-flow-col gap-4">
            <a class="link link-hover" href="https://github.com/amorabda/">Github</a>
            <a class="link link-hover" onClick={() => {window.open("https://www.youtube.com/channel/UCZbbj-dZKkxAXBxNBHJSJ2A")}}>DMCA</a>
        </div>
        <div>
            <p>Website by <a className="link" href="https://github.com/amorabda" target="_blank">Axinno</a></p>
        </div>
    </footer>)

export default Footer
