import React from "react"
import "./global.sass"

const Layout = ({ children }) => {
  return (
    <>
      <div id="stars"></div>
      <div id="stars2"></div>
      <div id="stars3"></div>
      {children}
    </>
  )
}

export default Layout
