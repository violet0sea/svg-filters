import React from "react"

import Layout from "../components/layout"

const SecondPage = () => (
  <Layout>
    <h2>Gaussian Blur</h2>
    <svg>
      <defs>
        <filter id="blurFilter1" x="-20" y="-20" width="200" height="200">
          <feGaussianBlur in="SourceGraphic" stdDeviation="5" />
        </filter>
      </defs>
      <rect
        x="20"
        y="20"
        width="90"
        height="90"
        style={{ stroke: "none", fill: "#00ff00", filter: "url(#blurFilter1)" }}
      />
      <defs>
        <filter id="blurFilter2" x="-20" y="-20" width="200" height="200">
          <feGaussianBlur in="SourceAlpha" stdDeviation="5" />
        </filter>
      </defs>
      <rect
        x="150"
        y="20"
        width="90"
        height="90"
        style={{ stroke: "none", fill: "#00ff00", filter: "url(#blurFilter2)" }}
      />
    </svg>
  </Layout>
)

export default SecondPage
