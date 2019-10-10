import React from "react"

import Layout from "../components/layout"

const FeOffset = () => (
  <Layout>
    <h2>feOffset</h2>
    <p>输入图像作为一个整体，在属性dx和属性dy的值指定了它的偏移量</p>
    <p>两个矩形均为x=20, y=20, width=90, height=90</p>
    <p>黑色边框的元素未使用offsetFIlter，绿色边框的元素使用了offsetFilter</p>
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

export default FeOffset
