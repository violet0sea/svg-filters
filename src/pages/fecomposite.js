import React from "react"

import Layout from "../components/layout"

const feComposite = () => (
  <Layout>
    <h2>feComposite</h2>
    <svg
      xmlns="http://www.w3.org/2000/svg"
      xmlnsXlink="http://www.w3.org/1999/xlink"
      style={{ width: 600, height: 500 }}
    >   
        <rect x="0" y="0" width="192" height="120" fill="red" fillOpacity="0.6"></rect>
        <rect x="200" y="0" width="192" height="120" fill="green" fillOpacity="0.6"></rect>
        <filter id="compose-in">
            <feFlood floodColor="green" floodOpacity="0.5" result="green" />
            <feComposite in="SourceGraphic" in2="green" operator="in" result="comp"/>
        </filter>
        <filter id="compose-out">
            <feFlood floodColor="green" floodOpacity="0.5" result="green" />
            <feComposite in="SourceGraphic" in2="green" operator="atop" result="comp"/>
        </filter>
        <rect x="0" y="180" width="192" height="120" fill="orange" fillOpacity="0.5" filter="url(#compose-in)"></rect> 
        <rect x="200" y="180" width="192" height="120" fill="orange" fillOpacity="0.5" filter="url(#compose-out)"></rect> 
    </svg>
  </Layout>
)

export default feComposite
