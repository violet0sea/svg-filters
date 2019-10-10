import React from "react"

import Layout from "../components/layout"

const FeColorMatrix = () => (
  <Layout>
    <h2>feColorMatrix</h2>
    <p>该滤镜基于转换矩阵对颜色进行变换。每一像素的颜色值(一个表示为[红,绿,蓝,透明度] 的矢量) 都经过矩阵乘法 (matrix multiplated) 计算出的新颜色</p>
      <svg
        xmlns="http://www.w3.org/2000/svg"
        xmlnsXlink="http://www.w3.org/1999/xlink"
        style={{ width: 600, height: 130 }}
      >
      <image
        href="https://timgsa.baidu.com/timg?image&quality=80&size=b9999_10000&sec=1570182424645&di=233605f77ef2b88c1f9d6ad35fce2fcb&imgtype=0&src=http%3A%2F%2Fpic1.win4000.com%2Fwallpaper%2F2018-06-02%2F5b12041ccbe39.jpg"
        x="0"
        y="5"
        width="192"
        height="120"
      />
      <filter id="redFilter">
        <feColorMatrix
          in="SourceGraphic"
          type="matrix"
          values="1 1 1 0 0
                0 0 0 0 0
                0 0 0 0 0
                0 0 0 1 0"
        />
      </filter>
      <image
        href="https://timgsa.baidu.com/timg?image&quality=80&size=b9999_10000&sec=1570182424645&di=233605f77ef2b88c1f9d6ad35fce2fcb&imgtype=0&src=http%3A%2F%2Fpic1.win4000.com%2Fwallpaper%2F2018-06-02%2F5b12041ccbe39.jpg"
        x="220"
        y="5"
        width="192"
        height="120"
        style={{ filter: "url(#redFilter)" }}
      />
    </svg>
    <svg
      xmlns="http://www.w3.org/2000/svg"
      xmlnsXlink="http://www.w3.org/1999/xlink"
      style={{ width: 600, height: 130 }}
    >
      <image
        href="https://timgsa.baidu.com/timg?image&quality=80&size=b9999_10000&sec=1570182424645&di=233605f77ef2b88c1f9d6ad35fce2fcb&imgtype=0&src=http%3A%2F%2Fpic1.win4000.com%2Fwallpaper%2F2018-06-02%2F5b12041ccbe39.jpg"
        x="0"
        y="5"
        width="192"
        height="120"
      />
      <filter id="greenFilter">
        <feColorMatrix
          in="SourceGraphic"
          type="matrix"
          values="0 0 0 0 0
                1 1 1 0 0
                0 0 0 0 0
                0 0 0 1 0"
        />
      </filter>
      <image
        href="https://timgsa.baidu.com/timg?image&quality=80&size=b9999_10000&sec=1570182424645&di=233605f77ef2b88c1f9d6ad35fce2fcb&imgtype=0&src=http%3A%2F%2Fpic1.win4000.com%2Fwallpaper%2F2018-06-02%2F5b12041ccbe39.jpg"
        x="220"
        y="5"
        width="192"
        height="120"
        style={{ filter: "url(#greenFilter)" }}
      />
    </svg>
    <svg
      xmlns="http://www.w3.org/2000/svg"
      xmlnsXlink="http://www.w3.org/1999/xlink"
      style={{ width: 600, height: 130 }}
    >
           <image
        href="https://timgsa.baidu.com/timg?image&quality=80&size=b9999_10000&sec=1570182424645&di=233605f77ef2b88c1f9d6ad35fce2fcb&imgtype=0&src=http%3A%2F%2Fpic1.win4000.com%2Fwallpaper%2F2018-06-02%2F5b12041ccbe39.jpg"
        x="0"
        y="5"
        width="192"
        height="120"
      />
      <filter id="blueFilter">
        <feColorMatrix
          in="SourceGraphic"
          type="matrix"
          values="0 0 0 0 0
                0 0 0 0 0
                1 1 1 0 0
                0 0 0 1 0"
        />
      </filter>
      <image
        href="https://timgsa.baidu.com/timg?image&quality=80&size=b9999_10000&sec=1570182424645&di=233605f77ef2b88c1f9d6ad35fce2fcb&imgtype=0&src=http%3A%2F%2Fpic1.win4000.com%2Fwallpaper%2F2018-06-02%2F5b12041ccbe39.jpg"
        x="220"
        y="5"
        width="192"
        height="120"
        style={{ filter: "url(#blueFilter)" }}
      />
    </svg>
    <svg
      xmlns="http://www.w3.org/2000/svg"
      xmlnsXlink="http://www.w3.org/1999/xlink"
      style={{ width: 600, height: 130 }}
    >
           <image
        href="https://timgsa.baidu.com/timg?image&quality=80&size=b9999_10000&sec=1570182424645&di=233605f77ef2b88c1f9d6ad35fce2fcb&imgtype=0&src=http%3A%2F%2Fpic1.win4000.com%2Fwallpaper%2F2018-06-02%2F5b12041ccbe39.jpg"
        x="0"
        y="5"
        width="192"
        height="120"
      />
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
      <image
        href="https://timgsa.baidu.com/timg?image&quality=80&size=b9999_10000&sec=1570182424645&di=233605f77ef2b88c1f9d6ad35fce2fcb&imgtype=0&src=http%3A%2F%2Fpic1.win4000.com%2Fwallpaper%2F2018-06-02%2F5b12041ccbe39.jpg"
        x="220"
        y="5"
        width="192"
        height="120"
        style={{ filter: "url(#grayFilter)" }}
      />
    </svg>
    <svg
      xmlns="http://www.w3.org/2000/svg"
      xmlnsXlink="http://www.w3.org/1999/xlink"
      style={{ width: 600, height: 130 }}
    >
           <image
        href="https://timgsa.baidu.com/timg?image&quality=80&size=b9999_10000&sec=1570182424645&di=233605f77ef2b88c1f9d6ad35fce2fcb&imgtype=0&src=http%3A%2F%2Fpic1.win4000.com%2Fwallpaper%2F2018-06-02%2F5b12041ccbe39.jpg"
        x="0"
        y="5"
        width="192"
        height="120"
      />
      <filter id="customFilter">
        <feColorMatrix
          in="SourceGraphic"
          type="matrix"
          values="3 -1 -1 0 0
                -1 3 -1 0 0
                -1 -1 3 0 0
                0 0 0 1 0"
        />
      </filter>
      <image
        href="https://timgsa.baidu.com/timg?image&quality=80&size=b9999_10000&sec=1570182424645&di=233605f77ef2b88c1f9d6ad35fce2fcb&imgtype=0&src=http%3A%2F%2Fpic1.win4000.com%2Fwallpaper%2F2018-06-02%2F5b12041ccbe39.jpg"
        x="220"
        y="5"
        width="192"
        height="120"
        style={{ filter: "url(#customFilter)" }}
      />
    </svg>
  </Layout>
)

export default FeColorMatrix
