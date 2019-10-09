import React from "react"

import Layout from "../components/layout"

const SecondPage = () => (
  <Layout>
    <h2>feConvolveMatrix</h2>

    <svg
      xmlns="http://www.w3.org/2000/svg"
      xmlnsXlink="http://www.w3.org/1999/xlink"
      style={{ width: 900, height: 600 }}
    > 
      <defs>
        // table风格
        <defs>
            <filter id="table" filterUnits="userSpaceOnUse">
            <feComponentTransfer>
                <feFuncR type="table" tableValues="0.0 0.7 0.9 1.0"/>
                <feFuncG type="table" tableValues=".2 0.7 0.9 1.0"/>
                <feFuncB type="table" tableValues=".2 0.7 0.9 1.0"/>
            </feComponentTransfer>
            </filter>
        </defs>
        // discrete风格
        <filter id="discrete" filterUnits="userSpaceOnUse">
            <feComponentTransfer>
                <feFuncR type="discrete" tableValues="0.0 1.0 1.0 1.0"/>
                <feFuncG type="discrete" tableValues="0.0 0.5 0.5 0.9"/>
                <feFuncB type="discrete" tableValues="0.0 0.6"/>
            </feComponentTransfer>
        </filter>
  
        <filter id="linear" filterUnits="objectBoundingBox">
            <feComponentTransfer>
                <feFuncR type="linear" slope="0" intercept="0"/>
                <feFuncG type="linear" slope="1" intercept="0"/>
                <feFuncB type="linear" slope="1" intercept="0"/>
            </feComponentTransfer>
        </filter>
        // 边缘化
        <filter id="gamma" filterUnits="objectBoundingBox">
      <feComponentTransfer>
        <feFuncR type="gamma" amplitude="2" exponent="5" offset="0"/>
        <feFuncG type="gamma" amplitude="2" exponent="3" offset="0"/>
        <feFuncB type="gamma" amplitude="2" exponent="1" offset="0"/>
      </feComponentTransfer>
    </filter>
      </defs>
      <image
        href="https://timgsa.baidu.com/timg?image&quality=80&size=b9999_10000&sec=1570182424645&di=233605f77ef2b88c1f9d6ad35fce2fcb&imgtype=0&src=http%3A%2F%2Fpic1.win4000.com%2Fwallpaper%2F2018-06-02%2F5b12041ccbe39.jpg"
        x="0"
        y="0"
        width="192"
        height="120"
      />
      <text x="80" y="150">原图</text>
      <image
        href="https://timgsa.baidu.com/timg?image&quality=80&size=b9999_10000&sec=1570182424645&di=233605f77ef2b88c1f9d6ad35fce2fcb&imgtype=0&src=http%3A%2F%2Fpic1.win4000.com%2Fwallpaper%2F2018-06-02%2F5b12041ccbe39.jpg"
        x="0"
        y="160"
        width="192"
        height="120"
        style={{ filter: "url(#table)" }}
      />
      <text x="80" y="310">table</text>

      <image
        href="https://timgsa.baidu.com/timg?image&quality=80&size=b9999_10000&sec=1570182424645&di=233605f77ef2b88c1f9d6ad35fce2fcb&imgtype=0&src=http%3A%2F%2Fpic1.win4000.com%2Fwallpaper%2F2018-06-02%2F5b12041ccbe39.jpg"
        x="220"
        y="160"
        width="192"
        height="120"
        style={{ filter: "url(#discrete)" }}
      />
      <text x="280" y="310">discrete</text>
      <image
        href="https://timgsa.baidu.com/timg?image&quality=80&size=b9999_10000&sec=1570182424645&di=233605f77ef2b88c1f9d6ad35fce2fcb&imgtype=0&src=http%3A%2F%2Fpic1.win4000.com%2Fwallpaper%2F2018-06-02%2F5b12041ccbe39.jpg"
        x="440"
        y="160"
        width="192"
        height="120"
        style={{ filter: "url(#linear)" }}
      />
      <text x="510" y="310">linear</text>
      <image
        href="https://timgsa.baidu.com/timg?image&quality=80&size=b9999_10000&sec=1570182424645&di=233605f77ef2b88c1f9d6ad35fce2fcb&imgtype=0&src=http%3A%2F%2Fpic1.win4000.com%2Fwallpaper%2F2018-06-02%2F5b12041ccbe39.jpg"
        x="660"
        y="160"
        width="192"
        height="120"
        style={{ filter: "url(#gamma)" }}
      />
      <text x="720" y="310">gamma</text>
    </svg>
  </Layout>
)

export default SecondPage
