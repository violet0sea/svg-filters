import React from "react"

import Layout from "../components/layout"

const SecondPage = () => (
  <Layout>
    <h2>feColorMatrix Blur</h2>
    <svg
      xmlns="http://www.w3.org/2000/svg"
      xmlnsXlink="http://www.w3.org/1999/xlink"
      style={{ width: 600, height: 600 }}
    >
      <g>
        <circle cx="30" cy="100" r="20" fill="blue" fill-opacity="0.5" />
        <circle cx="20" cy="120" r="20" fill="green" fill-opacity="0.5" />
        <circle cx="40" cy="120" r="20" fill="red" fill-opacity="0.5" />
      </g>
      <defs>
        <g id="circles">
          <circle cx="230" cy="100" r="20" fill="blue" fill-opacity="0.5" />
          <circle cx="220" cy="120" r="20" fill="green" fill-opacity="0.5" />
          <circle cx="240" cy="120" r="20" fill="red" fill-opacity="0.5" />
        </g>
      </defs>
      <filter id="colorMeMatrix">
        <feColorMatrix
          in="SourceGraphic"
          type="matrix"
          values="0 0 0 0 0
                1 1 1 1 0
                0 0 0 0 0
                0 0 0 1 0"
        />
      </filter>
      <use href="#circles" filter="url(#colorMeMatrix)" />
      <text x="100" y="120">
        matrix
      </text>
    </svg>
    <svg>
      <defs>
        <filter id="filterName">// 声明使用的滤镜</filter>
      </defs>
    </svg>
  </Layout>
)

export default SecondPage
