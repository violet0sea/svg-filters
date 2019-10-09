import React from "react"
import { Link } from "gatsby"

import Layout from "../components/layout"
import SEO from "../components/seo"
import "../style/index.css"

const navList = [
  {
    key: "gaussblur",
    to: "gaussianblur",
  },
  {
    key: "feOffset",
    to: "feoffset",
  },
  {
    key: "feImage",
    to: "feimage",
  },
  {
    key: "feFlood",
    to: "feflood",
  },
  {
    key: "feBlend",
    to: "feblend",
  },
  {
    key: "feColorMatrix",
    to: "fecolormatrix",
  },
  {
    key: "gooeyEffect",
    to: "gooey",
  },
  {
    key: "gooeyMenu",
    to: "gooeymenu",
  },
]

const IndexPage = () => (
  <Layout>
    <SEO title="Home" />
    <div className="nav-list">
      {navList.map(d => (
        <div className="nav-item" key={d.key}>
          <Link to={d.to}>{d.to}</Link>
        </div>
      ))}
    </div>
  </Layout>
)

export default IndexPage

