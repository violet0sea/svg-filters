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
    key: "feoffset",
    to: "feoffset",
  },
  {
    key: "feimage",
    to: "feimage",
  },
  {
    key: "feflood",
    to: "feflood",
  },
  {
    key: "feblend",
    to: "feblend",
  },
  {
    key: "fecolormatrix",
    to: "fecolormatrix",
  },
  {
    key: "gooeyeffect",
    to: "gooey",
  },
  {
    key: "gooeymenu",
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
