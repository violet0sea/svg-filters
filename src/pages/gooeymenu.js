import React, { useState, useEffect } from "react"

import Layout from "../components/layout"
import "../style/GooeyMenu.css"

const GooeyMenu = () => {
  const [active, setActive] = useState(false)

  const handleMenuClick = () => {
    setActive(!active)
  }
  useEffect(() => {}, [])
  return (
    <Layout>
      <div className="menu">
        <div className="menu-wrapper">
          <ul className="menu-items">
            <li className="menu-item" style={{ transform: "rotate(120deg)" }}>
              <button
                className={`menu-item-button ${active ? "active" : "hide"}`}
              >
                <i
                  className="menu-item-icon fa fa-reply"
                  style={{ transform: "rotate(-120deg)" }}
                ></i>
              </button>
              <div
                className="menu-item-bounce"
                style={{
                  transform: "translate3d(0px, 0px, 0px) scale(0.8, 0.8)",
                  transformOrigin: "50% 50% 0px",
                }}
              ></div>
            </li>
            <li className="menu-item" style={{ transform: "rotate(180deg)" }}>
              <button
                className={`menu-item-button ${active ? "active" : "hide"}`}
              >
                <i
                  className="menu-item-icon fa fa-envelope"
                  style={{ transform: "rotate(-180deg)" }}
                ></i>
              </button>
              <div
                className="menu-item-bounce"
                style={{
                  transform: "translate3d(0px, 0px, 0px) scale(0.8, 0.8)",
                  transformOrigin: "50% 50% 0px",
                }}
              ></div>
            </li>
            <li className="menu-item" style={{ transform: "rotate(240deg)" }}>
              <button
                className={`menu-item-button ${active ? "active" : "hide"}`}
              >
                <i
                  className="menu-item-icon fa fa-trash"
                  style={{ transform: "rotate(-240deg)" }}
                ></i>
              </button>
              <div
                className="menu-item-bounce"
                style={{
                  transform: "translate3d(0px, 0px, 0px) scale(0.8, 0.8)",
                  transformOrigin: "50% 50% 0px",
                }}
              ></div>
            </li>
          </ul>
          <button className="menu-toggle-button" onClick={handleMenuClick}>
            <i className={`fa fa-plus menu-toggle-icon ${active ? "active" : "hide"}`}></i>
          </button>
        </div>
      </div>
      <svg xmlns="http://www.w3.org/2000/svg" version="1.1">
        <defs>
          <filter id="gooey">
            <feGaussianBlur
              in="SourceGraphic"
              stdDeviation="10"
              result="blur"
            />
            <feColorMatrix
              in="blur"
              mode="matrix"
              values="1 0 0 0 0  0 1 0 0 0  0 0 1 0 0  0 0 0 19 -9"
              result="gooey"
            />
            <feBlend in="SourceGraphic" in2="gooey"/>
          </filter>
        </defs>
      </svg>
    </Layout>
  )
}
export default GooeyMenu
