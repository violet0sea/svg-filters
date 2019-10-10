import React from "react"

import Layout from "../components/layout"

const SecondPage = () => (
  <Layout>
    <h2>feMerge</h2>
    <p>feMerge滤镜允许同时应用滤镜效果而不是按顺序应用滤镜效果。利用result存储别的滤镜的输出可以实现这一点，然后在一个 feMergeNode子元素中访问它。</p>
    <svg>
      <defs>
        <filter id="merge" x="0" y="0" width="120" height="120">
            <feOffset in="SourceAlpha" dx="8" dy="8" result="offset"/>
            <feGaussianBlur stdDeviation="3" result="blur"/>
            <feMerge>
                <feMergeNode in="blur" />
                <feMergeNode in="SourceGraphic" />
            </feMerge>
        </filter>
      </defs>
      <rect
        x="20"
        y="20"
        width="90"
        height="90"
        style={{  stroke: "#000000", fill: "#639", filter: "url(#merge)" }}
      />
    </svg>
  </Layout>
)

export default SecondPage
