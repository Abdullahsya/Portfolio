import React from "react"

import {
  FaTwitter as Twitter,
  FaGithub as Github,
  FaYoutube as Youtube,
  FaInstagram as Insta,
  FaEnvelope as Mail,
} from "react-icons/fa"

export default function info() {
  return (
    <div className="container">
      <div className="my-5"></div>
      <div className="display-3" style={{ color: "#FF8A00" }}>
        <span style = {{color : "white"}}>Hello, I'm</span> <br />
        Abdullah.
      </div>
      <div className="h1 code mt-4 mb-3">async {"{"}</div>
      <div className="text-muted mx-5 my-4 h3 text-justify info">
        A beginner Front-end Developer, coming from Engineering background, interested in learning about new technologies.
        <br /> This is my first project, a portfoilo, and I will be doing more similar stuff in the near future.
      </div>
      <div className="h1 code mt-2 mb-3">{"}"}</div>
      <div className="h1 mt-5">
        <a className="mr-5 icon" href="https://twitter.com/home">
          <Twitter />
        </a>
        <a className="mr-5 icon" href="https://instagram.com/sumanth.zero7">
          <Insta />
        </a>
        <a className="mr-5 icon" href="https://github.com/Abdullahsya">
          <Github />
        </a>
        <a
          className="mr-5 icon"
          href="https://www.youtube.com/channel/UCw0FDIL-HpcfzEZrjcQwhMQ"
        >
          <Youtube />
        </a>
        <a className="mr-5 icon" href="mailto://abdullah.abdulrahim@outlook.com">
          <Mail />
        </a>
      </div>
    </div>
  )
}
