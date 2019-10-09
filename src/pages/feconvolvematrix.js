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
        // 锐利
        <filter id="convolve">
          <feConvolveMatrix kernelMatrix="
              0 -1  0    
              -1  5 -1    
              0 -1  0">
          </feConvolveMatrix>
        </filter>
        // 浮雕
        <filter id="convolve2">
          <feConvolveMatrix kernelMatrix="
            -9 -2  0    
            -2  1  2    
            0  2  9">
          </feConvolveMatrix>
        </filter>
        // 边缘化
        <filter id="convolve3">
          <feConvolveMatrix kernelMatrix="
              1  1  1    
              1 -6  1    
              1  1  1">
          </feConvolveMatrix>
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
        style={{ filter: "url(#convolve)" }}
      />
      <text x="80" y="310">锐利</text>

      <image
        href="https://timgsa.baidu.com/timg?image&quality=80&size=b9999_10000&sec=1570182424645&di=233605f77ef2b88c1f9d6ad35fce2fcb&imgtype=0&src=http%3A%2F%2Fpic1.win4000.com%2Fwallpaper%2F2018-06-02%2F5b12041ccbe39.jpg"
        x="250"
        y="160"
        width="192"
        height="120"
        style={{ filter: "url(#convolve2)" }}
      />
      <text x="320" y="310">浮雕</text>
      <image
        href="https://timgsa.baidu.com/timg?image&quality=80&size=b9999_10000&sec=1570182424645&di=233605f77ef2b88c1f9d6ad35fce2fcb&imgtype=0&src=http%3A%2F%2Fpic1.win4000.com%2Fwallpaper%2F2018-06-02%2F5b12041ccbe39.jpg"
        x="500"
        y="160"
        width="192"
        height="120"
        style={{ filter: "url(#convolve3)" }}
      />
      <text x="580" y="310">边缘化</text>
    </svg>
  </Layout>
)

export default SecondPage
