import React, { useEffect } from "react"
import * as d3 from "d3"

import Layout from "../components/layout"

const renderGooeyEffect = () => {
  const width = 400

  const svg = d3
    .select("#gooey")
    .append("svg")
    .attr("width", 500)
    .attr("height", 500)
    .append("g")
    .attr("transform", "translate(250, 250)")

  const defs = svg.append("defs")
  const filter = defs.append("filter").attr("id", "gooeyfilter")
  filter
    .append("feGaussianBlur")
    .attr("in", "SourceGraphic")
    .attr("stdDeviation", "10")
    .attr("color-interpolation-filters", "sRGB")
    .attr("result", "blur")
  filter
    .append("feColorMatrix")
    .attr("in", "blur")
    .attr("mode", "matrix")
    .attr("values", "1 0 0 0 0  0 1 0 0 0  0 0 1 0 0  0 0 0 19 -9")
    .attr("result", "gooey")

  filter
    .append("feBlend")
    .attr("in", "SourceGraphic")
    .attr("in2", "gooey")
    .attr("operator", "atop")

  var xScale = d3.scale
    .linear()
    .domain([-1.25, 1.25])
    .range([-width / 2, width / 2])

  var circleWrapper = svg.append("g").style("filter", "url(#gooeyfilter)")

  var steps = 14
  var colors = [
    "#F95B34",
    "#EE3E64",
    "#F36283",
    "#FF9C34",
    "#EBDE52",
    "#B7D84B",
    "#44ACCF",
  ]
  var flyCircleData = []
  for (var i = 0; i < steps; i++) {
    flyCircleData.push({
      fixedAngle: (i / steps) * (2 * Math.PI),
      randomAngle: (i / steps) * (2 * Math.PI),
      speed: Math.random() * 7000 + 3000,
      r: Math.floor(Math.random() * 20 + 15),
      color: colors[i % colors.length],
    })
  }

  var flyCircles = circleWrapper
    .selectAll(".flyCircle")
    .data(flyCircleData)
    .enter()
    .append("circle")
    .attr("class", "flyCircle")
    .style("fill", function(d) {
      return d.color
    })
    .attr("cy", 0)
    .attr("cx", 0)
    .attr("r", 0)
    .transition()
    .duration(500)
    .delay(function(d, i) {
      return i * 50
    })
    .attr("cy", function(d) {
      return xScale(Math.sin(d.fixedAngle))
    })
    .attr("cx", function(d) {
      return xScale(Math.cos(d.fixedAngle))
    })
    .attr("r", function(d) {
      return d.r
    })
    .each(goRound)

  function goRound(p, j) {
    d3.select(this)
      .transition()
      .duration(function(d) {
        return d.speed
      })
      .ease(["linear"])
      .attrTween("transform", function() {
        return d3.interpolateString("rotate(0)", "rotate(360)")
      })
      .each("end", goRound)
  }
}

const SecondPage = () => {
  useEffect(() => {
    renderGooeyEffect()
  }, [])
  return (
    <Layout>
      <h2>feOffset</h2>
      <div id="gooey"></div>
    </Layout>
  )
}
export default SecondPage
