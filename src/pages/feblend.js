import React from "react"

import Layout from "../components/layout"

const FeBlend = () => (
  <Layout>
    <h2>feBlend</h2>
    <p>feBlend滤镜把两个对象组合在一起，使它们受特定的混合模式控制</p>
    <svg width="800" height="600">
      <image
        href="https://timgsa.baidu.com/timg?image&quality=80&size=b9999_10000&sec=1570182424645&di=233605f77ef2b88c1f9d6ad35fce2fcb&imgtype=0&src=http%3A%2F%2Fpic1.win4000.com%2Fwallpaper%2F2018-06-02%2F5b12041ccbe39.jpg"
        x="0"
        y="5"
        width="192"
        height="120"
      /> 
      <text x="200" y="70"> + </text>
      <rect x="220" y="5" width="192" height="120" fill="orange"></rect>

      <defs>
        <filter id="blend-multiply">
          <feFlood
            result="floodFill"
            x="0"
            y="160"
            width="192"
            height="120"
            floodColor="orange"
            floodOpacity="1"
          />
          <feBlend in="SourceGraphic" in2="floodFill" mode="multiply" />
        </filter>
        <filter id="blend-color-dodge">
          <feFlood
            result="floodFill2"
            x="220"
            y="160"
            width="192"
            height="120"
            floodColor="orange"
            floodOpacity="1"
          />
          <feBlend in="SourceGraphic" in2="floodFill2" mode="color-dodge" />
        </filter>
      </defs>
      <image
        href="https://timgsa.baidu.com/timg?image&quality=80&size=b9999_10000&sec=1570182424645&di=233605f77ef2b88c1f9d6ad35fce2fcb&imgtype=0&src=http%3A%2F%2Fpic1.win4000.com%2Fwallpaper%2F2018-06-02%2F5b12041ccbe39.jpg"
        x="0"
        y="160"
        width="192"
        height="120"
        style={{ filter: "url(#blend-multiply)" }}
      />
      <text x="40" y="310">multiply模式</text>
      <image
        href="https://timgsa.baidu.com/timg?image&quality=80&size=b9999_10000&sec=1570182424645&di=233605f77ef2b88c1f9d6ad35fce2fcb&imgtype=0&src=http%3A%2F%2Fpic1.win4000.com%2Fwallpaper%2F2018-06-02%2F5b12041ccbe39.jpg"
        x="220"
        y="160"
        width="192"
        height="120"
        style={{ filter: "url(#blend-color-dodge)" }}
      />
      <text x="250" y="310">color-dodge模式</text>
      
    </svg>

  </Layout>
)

export default FeBlend
