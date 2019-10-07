import React from "react"

import Layout from "../components/layout"

const SecondPage = () => (
  <Layout>
    <h2>feflood</h2>
    <svg width="360" height="220">
      <defs>
        <filter id="floodFilter" filterUnits="userSpaceOnUse">
          <feFlood
            x="10"
            y="10"
            width="100"
            height="100"
            floodColor="green"
            floodOpacity="0.5"
          />
        </filter>
      </defs>
      <use style={{ filter: "url(#floodFilter)" }} />
    </svg>
  </Layout>
)

export default SecondPage
