import {
  functor,
  getAxisCanvas,
  GenericChartComponent,
} from "@react-financial-charts/core"
import { group } from "d3-array"
import { ScaleContinuousNumeric, ScaleTime } from "d3-scale"
import * as React from "react"

class CircleMarker extends React.Component {
  static defaultProps = {
    fillStyle: "#388bff",
    className: "react-financial-charts-marker-circle",
  }

  static drawOnCanvas = (props, point, ctx) => {
    console.log("PROPS", props)
    const { strokeStyle, fillStyle, r, strokeWidth } = props

    if (strokeStyle !== undefined) {
      ctx.strokeStyle = strokeStyle
    }
    if (strokeWidth !== undefined) {
      ctx.lineWidth = strokeWidth
    }
    if (fillStyle !== undefined) {
      ctx.fillStyle = fillStyle
    } else {
      ctx.fillStyle = "#05054480"
    }

    const { datum, x, y } = point

    const radius = functor(r)(datum)

    ctx.moveTo(x, y)
    ctx.beginPath()
    ctx.arc(x, y, radius, 0, 2 * Math.PI, false)
    ctx.fill()
    if (strokeStyle !== undefined) {
      // ctx.stroke()
    }
  }
}

export default class ScatterNebula extends React.Component {
  render() {
    return (
      <GenericChartComponent
        canvasDraw={this.drawOnCanvas}
        canvasToDraw={getAxisCanvas}
        drawOn={["pan"]}
      />
    )
  }

  drawOnCanvas = (ctx, moreProps) => {
    const points = this.getMarkers(moreProps)

    const { markerProps } = this.props

    const nest = group(
      points,
      (d) => d.fillStyle,
      (d) => d.strokeStyle
    )

    nest.forEach((fillValues, fillKey) => {
      if (fillKey !== "none") {
        ctx.fillStyle = fillKey
      }

      ctx.globalCompositeOperation = "lighter"

      fillValues.forEach((strokeValues) => {
        strokeValues.forEach((points) => {
          points.forEach((point) => {
            const { marker } = point
            marker.drawOnCanvas(
              { ...marker.defaultProps, ...markerProps, fillStyle: fillKey },
              point,
              ctx
            )
          })
        })
      })
    })
  }

  /*
{
        xAccessor: (data: any) => number | Date;
        xScale: ScaleContinuousNumeric<number, number> | ScaleTime<number, number>;
        chartConfig: any;
        plotData: any[];
    }
  */

  getMarkers = (moreProps) => {
    const { yListAccessor, markerProvider, markerProps } = this.props

    const {
      xAccessor,
      xScale,
      chartConfig: { yScale },
      plotData,
    } = moreProps

    let { marker: Marker } = this.props
    if (!(markerProvider || Marker)) {
      throw new Error("required prop, either marker or markerProvider missing")
    }

    return plotData
      .map((d) => {
        const yValues = yListAccessor(d)
        return yValues.map((yValue) => {
          // const yValue = yAccessor(d);
          // if (yValue === undefined) {
          //   return undefined;
          // }

          const xValue = xAccessor(d)

          if (markerProvider) {
            Marker = markerProvider(d)
          }

          Marker = CircleMarker

          const mProps = { ...Marker.defaultProps, ...markerProps }

          const fill = functor(mProps.fillStyle)
          const stroke = functor(mProps.strokeStyle)

          return {
            x: xScale(xValue),
            y: yScale(yValue),
            fillStyle: fill(d),
            // strokeStyle: stroke(d),
            datum: d,
            marker: Marker,
          }
        })
      })
      .filter((marker) => marker !== undefined)
      .map((marker) => marker)
  }
}
