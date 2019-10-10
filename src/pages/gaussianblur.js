import React from "react"

import Layout from "../components/layout"

const FeGaussianBlur = () => (
  <Layout>
    <h2>Gaussian Blur</h2>
    <p>对输入图像进行高斯模糊，属性stdDeviation中指定模糊的标准差。</p>
    <svg width="600">
      <defs>
        <filter id="blurFilter1" x="-20" y="-20" width="400" height="300">
          <feGaussianBlur in="SourceGraphic" stdDeviation="5" />
        </filter>
        <filter id="blurFilter2" x="-20" y="-20" width="400" height="300">
          <feGaussianBlur in="SourceAlpha" stdDeviation="5" />
        </filter>
      </defs>
      <rect
        x="20"
        y="20"
        width="90"
        height="90"
        style={{ stroke: "none", fill: "#639", filter: "url(#blurFilter1)" }}
      />
      <text x="0" y="150">in=SourceGraphic</text>
  
      <rect
        x="220"
        y="20"
        width="90"
        height="90"
        style={{ stroke: "none", fill: "#639", filter: "url(#blurFilter2)" }}
      />
      <text x="200" y="150">in=SourceAlpha</text>
    </svg>
  </Layout>
)

export default FeGaussianBlur
