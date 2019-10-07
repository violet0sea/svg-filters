import React from "react"

import Layout from "../components/layout"

const SecondPage = () => (
  <Layout>
    <h2>feOffset</h2>
    <svg>
      <defs>
        <filter id="offsetFilter" x="0" y="0" width="100" height="100">
          <feOffset in="SourceGraphic" dx="10" dy="10" />
        </filter>
      </defs>
      <rect
        x="20"
        y="20"
        width="90"
        height="90"
        style={{
          stroke: "#00ff00",
          fill: "none",
          filter: "url(#offsetFilter)",
        }}
      />
      <rect
        x="20"
        y="20"
        width="90"
        height="90"
        style={{ stroke: "#000000", fill: "none" }}
      />
    </svg>
  </Layout>
)

export default SecondPage
