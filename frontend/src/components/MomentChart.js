import React from "react"

import { min, max } from "d3-array"
import { format } from "d3-format"
import { timeFormat } from "d3-time-format"

import listings from "../listings.json"

import { withDeviceRatio, withSize } from "@react-financial-charts/utils"
import { Chart, ChartCanvas } from "@react-financial-charts/core"
import { XAxis, YAxis } from "@react-financial-charts/axes"
import { discontinuousTimeScaleProviderBuilder } from "@react-financial-charts/scales"
import {
  CandlestickSeries,
  BarSeries,
  LineSeries,
  ScatterSeries,
  CircleMarker,
} from "@react-financial-charts/series"

// import { MACDTooltip } from "react-financial-charts/tooltip"

import { HoverTooltip } from "react-financial-charts"
function getData(listings) {
  const arr = []
  arr.columns = ["time", "volumeListed", "high", "low"]
  for (const sample of listings) {
    const prices = sample.prices.map((x) => Number(x.price))
    const serials = sample.prices.map((x) => Number(x.serial))
    console.log("serials", serials)
    const _min = min(prices)
    const _max = max(prices)
    const _fakemin = min(prices) + (min(prices) + min(prices) * 0.1)
    const _fakemax = max(prices) - max(prices) * 0.3
    arr.push({
      date: new Date(sample.time),
      volume: sample.volumeListed,
      high: _max,
      low: _min,
      open: _min,
      close: _min,
    })
  }

  return arr
}

function MomentChart({ width, height, ratio }) {
  const margin = { left: 0, right: 40, top: 0, bottom: 24 }
  const xScaleProvider = discontinuousTimeScaleProviderBuilder().inputDateAccessor(
    (sample) => sample.date
  )

  const { data, xScale, xAccessor, displayXAccessor } = xScaleProvider(
    getData(listings)
  )
  const yExtents = (sample) => [sample.low * 1.5, 0]
  const barChartExtents = (data) => {
    return data.volume
  }

  const volumeSeries = (data) => {
    return data.volume
  }
  const max = xAccessor(data[data.length - 1])
  const min = xAccessor(data[0])
  const xExtents = [min, max]

  const gridHeight = height - margin.top - margin.bottom
  const barChartHeight = gridHeight / 4
  const barChartOrigin = (_, h) => [0, h - barChartHeight]

  const radius = (data) => 3
  const yAccessor = (data) => data.low
  const dateFormat = timeFormat("%Y-%m-%d %H:%M:%S")
  const numberFormat = format(".2f")

  return (
    <ChartCanvas
      height={height}
      ratio={ratio}
      width={width}
      margin={margin}
      data={data}
      displayXAccessor={displayXAccessor}
      seriesName="Data"
      xScale={xScale}
      xAccessor={xAccessor}
      xExtents={xExtents}
    >
      <Chart id={1} yExtents={yExtents}>
        {/* <CandlestickSeries /> */}
        <ScatterSeries
          yAccessor={yAccessor}
          marker={CircleMarker}
          markerProps={{ r: radius }}
        />
        <LineSeries
          yAccessor={yAccessor}
          // marker={CircleMarker}
          // markerProps={{ r: radius }}
        />

        <HoverTooltip
          yAccessor={yAccessor}
          tooltip={{
            content: ({ currentItem, xAccessor }) => ({
              x: dateFormat(xAccessor(currentItem)),
              y: [
                {
                  label: "Lowest",
                  value: currentItem.low && numberFormat(currentItem.low),
                },
                {
                  label: "Volume",
                  value: currentItem.volume && numberFormat(currentItem.volume),
                },
                {
                  label: "Highest",
                  value: currentItem.high && numberFormat(currentItem.high),
                },
              ],
            }),
          }}
        />

        {/* <MACDSeries yAccessor={(d) => d.macd} {...macdAppearance} />
        <MACDTooltip
          origin={[-38, 15]}
          yAccessor={(d) => d.macd}
          options={macdCalculator.options()}
          appearance={macdAppearance}
        /> */}

        <XAxis />
        <YAxis />
      </Chart>
      <Chart
        id={2}
        height={barChartHeight}
        origin={barChartOrigin}
        yExtents={barChartExtents}
      >
        <BarSeries yAccessor={volumeSeries} />
        <YAxis orient="left" />
      </Chart>
    </ChartCanvas>
  )
}

export default withDeviceRatio()(
  withSize({ style: { minHeight: 600 } })(MomentChart)
)
