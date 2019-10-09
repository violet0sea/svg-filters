import React from "react"

import Layout from "../components/layout"

const SecondPage = () => (
  <Layout>
    <h2>feColorMatrix</h2>
    <svg
      xmlns="http://www.w3.org/2000/svg"
      xmlnsXlink="http://www.w3.org/1999/xlink"
      style={{ width: 600, height: 200 }}
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
    <svg
      xmlns="http://www.w3.org/2000/svg"
      xmlnsXlink="http://www.w3.org/1999/xlink"
      style={{ width: 600, height: 200 }}
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
      <filter id="grayFilter">
        <feColorMatrix
          in="SourceGraphic"
          type="matrix"
          values="1 0 0 0 0
                1 0 0 0 0
                1 0 0 0 0
                0 0 0 1 0"
        />
      </filter>
      <use href="#circles" filter="url(#grayFilter)" />
      <text x="100" y="120">
        matrix
      </text>
    </svg>
    <svg
      xmlns="http://www.w3.org/2000/svg"
      xmlnsXlink="http://www.w3.org/1999/xlink"
      style={{ width: 600, height: 200 }}
    >
           <image
        href="https://timgsa.baidu.com/timg?image&quality=80&size=b9999_10000&sec=1570182424645&di=233605f77ef2b88c1f9d6ad35fce2fcb&imgtype=0&src=http%3A%2F%2Fpic1.win4000.com%2Fwallpaper%2F2018-06-02%2F5b12041ccbe39.jpg"
        x="0"
        y="5"
        width="192"
        height="120"
      />
      <filter id="grayFilter1">
 
        <feColorMatrix
          in="SourceGraphic"
          type="matrix"
          values="1 0 0 0 0
                1 0 0 0 0
                1 0 0 0 0
                0 0 0 1 0"
        />
      </filter>
      <image
        href="https://timgsa.baidu.com/timg?image&quality=80&size=b9999_10000&sec=1570182424645&di=233605f77ef2b88c1f9d6ad35fce2fcb&imgtype=0&src=http%3A%2F%2Fpic1.win4000.com%2Fwallpaper%2F2018-06-02%2F5b12041ccbe39.jpg"
        x="300"
        y="5"
        width="192"
        height="120"
        style={{ filter: "url(#grayFilter)" }}
      />
    </svg>
  </Layout>
)

export default SecondPage
