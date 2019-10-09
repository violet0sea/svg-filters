import React from "react"

import Layout from "../components/layout"

const SecondPage = () => (
  <Layout>
    <h2>feFlood</h2>
    <p>用flood-color元素定义的颜色和flood-opacity元素定义的不透明度填充了滤镜子区域。</p>
    <svg width="360" height="220">
      <defs>
        <filter id="floodFilter" filterUnits="userSpaceOnUse">
          <feFlood
            x="10"
            y="10"
            width="100"
            height="100"
            floodColor="#639"
            floodOpacity="0.5"
          />
        </filter>
      </defs>
      <use style={{ filter: "url(#floodFilter)" }} />
      <text x="140" y="50">color: #639</text>
      <text x="140" y="80">opacity: 0.5</text>
    </svg>
  </Layout>
)

export default SecondPage
