import React from "react"

import Layout from "../components/layout"
import img from "../images/timg.jpeg"

const SecondPage = () => (
  <Layout>
    <h2>feimage</h2>
    <svg width="360" height="220">
      <defs>
        <filter id="f">
          <feImage href="https://timgsa.baidu.com/timg?image&quality=80&size=b9999_10000&sec=1570182424645&di=233605f77ef2b88c1f9d6ad35fce2fcb&imgtype=0&src=http%3A%2F%2Fpic1.win4000.com%2Fwallpaper%2F2018-06-02%2F5b12041ccbe39.jpg" />
        </filter>
      </defs>
      <rect x="30" y="30" width="150" height="150" filter="url(#f)" />
      <rect x="30" y="30" width="150" height="150" stroke="#00f" fill="none" />
    </svg>
  </Layout>
)

export default SecondPage