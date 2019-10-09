import React from "react"

import Layout from "../components/layout"

const SecondPage = () => (
  <Layout>
    <h2>feColorMatrix</h2>
    <svg
      xmlns="http://www.w3.org/2000/svg"
      xmlnsXlink="http://www.w3.org/1999/xlink"
      style={{ width: 600, height: 500 }}
    >
        <image
            href="https://timgsa.baidu.com/timg?image&quality=80&size=b9999_10000&sec=1570182424645&di=233605f77ef2b88c1f9d6ad35fce2fcb&imgtype=0&src=http%3A%2F%2Fpic1.win4000.com%2Fwallpaper%2F2018-06-02%2F5b12041ccbe39.jpg"
            x="0"
            y="5"
            width="192"
            height="120"
        />
        <rect x="220" y="5" width="192" height="120" fill="orange"></rect>
        <filter id="compose">
            <feFlood floodColor="orange" floodOpacity="0.5" result="orange" />
            <feFlood floodColor="green" floodOpacity="0.5" result="green" />
            <feComposite in="SourceGraphic" in2="orange" operator="out" result="comp"/>
        </filter>
      <image
        href="https://timgsa.baidu.com/timg?image&quality=80&size=b9999_10000&sec=1570182424645&di=233605f77ef2b88c1f9d6ad35fce2fcb&imgtype=0&src=http%3A%2F%2Fpic1.win4000.com%2Fwallpaper%2F2018-06-02%2F5b12041ccbe39.jpg"
        x="0"
        y="185"
        width="192"
        height="120"
        style={{ filter: "url(#compose)" }}
      />
        <rect x="220" y="185" width="192" height="120" fill="green"     style={{ filter: "url(#compose)" }}></rect>
    </svg>
  </Layout>
)

export default SecondPage
