import React from "react"
import "./global.sass"

const Layout = ({ children }) => {
  return (
    <div id="starsContainer">
      <div id="stars"></div>
      <div id="stars2"></div>
      <div id="stars3"></div>
      <div id="topContainer">{children}</div>
    </div>
  )
}

export default Layout
