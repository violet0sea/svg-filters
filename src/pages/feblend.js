import React from "react"

import Layout from "../components/layout"
import img from "../images/timg.jpeg"

const SecondPage = () => (
  <Layout>
    <h2>feflood</h2>
    <svg width="800" height="130">
      <image
        href="https://timgsa.baidu.com/timg?image&quality=80&size=b9999_10000&sec=1570182424645&di=233605f77ef2b88c1f9d6ad35fce2fcb&imgtype=0&src=http%3A%2F%2Fpic1.win4000.com%2Fwallpaper%2F2018-06-02%2F5b12041ccbe39.jpg"
        x="0"
        y="5"
        width="192"
        height="120"
      />
      <defs>
        <filter id="flood">
          <feFlood
            result="floodFill"
            x="290"
            y="0"
            width="210"
            height="130"
            floodColor="orange"
            floodOpacity="1"
          />
          <feBlend in="SourceGraphic" in2="floodFill" mode="multiply" />
        </filter>
      </defs>
      <image
        href="https://timgsa.baidu.com/timg?image&quality=80&size=b9999_10000&sec=1570182424645&di=233605f77ef2b88c1f9d6ad35fce2fcb&imgtype=0&src=http%3A%2F%2Fpic1.win4000.com%2Fwallpaper%2F2018-06-02%2F5b12041ccbe39.jpg"
        x="300"
        y="5"
        width="192"
        height="120"
        style={{ filter: "url(#flood)" }}
      />
    </svg>
  </Layout>
)

export default SecondPage
