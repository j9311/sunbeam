import React, { useMemo } from "react"

import { min, max, quantile, group, sum } from "d3-array"
import { format } from "d3-format"
import { timeFormat } from "d3-time-format"

import rawListings from "../listings.json"

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
  StochasticSeries,
} from "@react-financial-charts/series"

import {
  bollingerBand,
  BollingerSeries,
  BollingerSeriesProps,
  BollingerBandTooltip,
  stochasticOscillator,
  ema,
  MovingAverageTooltip,
} from "react-financial-charts"

import ScatterNebula from "./ScatterNebula"

// import { MACDTooltip } from "react-financial-charts/tooltip"

import { HoverTooltip } from "react-financial-charts"
import SpecTable from "./SpecTable"
function getData(listings) {
  const arr = []
  arr.columns = ["time", "volumeListed", "high", "low"]
  listings.forEach((sample) => {
    let prices = sample.prices.map((x) => Number(x.price))
    const barrier = quantile(prices, 0.75)
    prices = prices.filter((x) => x <= barrier)

    const serials = sample.prices.map((x) => Number(x.serial))
    // console.log("serials", serials)
    const _min = min(prices)
    const _max = max(prices)
    const _fakemin = min(prices) + (min(prices) + min(prices) * 0.1)
    const _fakemax = max(prices) - max(prices) * 0.3
    arr.push({
      date: new Date(sample.time),
      volume: sample.volumeListed,
      prices: prices,
      serials: serials,
      high: Math.min(barrier, _max),
      low: _min,
      open: _fakemin,
      close: Math.min(barrier, _fakemax),
      a1: quantile(prices, 1 / 5),
      a2: quantile(prices, 2 / 5),
      a3: quantile(prices, 3 / 5),
      a4: quantile(prices, 4 / 5),
    })
  })

  return arr
}

function getIntervalInfo(listings, transactions, interval) {
  const now = Date.now()
  listings = listings.filter((x) => x.date >= now - interval)
  transactions = transactions.filter((x) => x.date >= now - interval)

  const totListPrices = sum(listings, (x) => sum(x.prices))
  const totListVolume = sum(listings, (x) => x.prices.length + 1)
  let ALP = totListPrices / totListVolume // Average List Price

  const totSerialsListed = totListVolume
  const totListSerialSum = sum(listings, (x) => sum(x.serials))
  let ASO = totListSerialSum / totSerialsListed // Average Serial Offered
  let LDPS = ASO / ALP / totListVolume // List Dollar per Serial

  const totSalePrices = sum(transactions, (x) => x.price)

  let TSV = transactions.length + 1

  const totSaleSerialSum = sum(transactions, (x) => x.serial)
  let ASP = totSalePrices / TSV // Avg Selling Price
  let ASS = totSaleSerialSum / TSV // Avg Selling Serial
  let ADPS = ASS / ASP / TSV // Avg Dollar Per Serial

  return {
    TSV,
    ALP,
    ASO,
    LDPS,
    ASP,
    ASS,
    ADPS,
  }
}

function getTransactionData(transactions) {
  const arr = []
  arr.columns = ["date", "high", "low", "open", "close", "volume"]

  const grouper = (trans) =>
    Math.floor(trans.date - (trans.date % (24 * 60 * 60 * 1000)))

  const groups = group(transactions, grouper)
  groups.forEach((transactions) => {
    const prices = transactions.map((x) => x.price)
    console.log("HIGH", prices)
    arr.push({
      date: new Date(grouper(transactions[0])),
      open: transactions[0].price,
      close: transactions[transactions.length - 1].price,
      high: max(prices),
      low: min(prices),
      volume: prices.length + 1,
    })
  })

  return arr
}

const bbStroke = {
  top: "#964B00",
  middle: "#000000",
  bottom: "#964B00",
}

const bbFill = "#4682B4"

function MomentChart({ listings, transactions }) {
  const listingData = useMemo(() => {
    return getData(listings)
  }, [listings])

  const transactionData = useMemo(() => {
    return getTransactionData(transactions)
  }, [transactions])

  // const listingData = getData(listings)

  const margin = { left: 40, right: 40, top: 24, bottom: 24 }
  const xScaleProvider = discontinuousTimeScaleProviderBuilder().inputDateAccessor(
    (sample) => sample.date
  )

  const { data, xScale, xAccessor, displayXAccessor } = xScaleProvider(
    listingData
  )

  const xScaleProviderCandle = discontinuousTimeScaleProviderBuilder().inputDateAccessor(
    (sample) => sample.date
  )

  const bbcalculator = bollingerBand()
    .merge((d, c) => {
      d.bb = c
    })
    .accessor((d) => d.bb)

  const fullSTO = stochasticOscillator()
    .options({ windowSize: 14, kWindowSize: 3, dWindowSize: 4 })
    .merge((d, c) => {
      d.fullSTO = c
    })
    .accessor((d) => d.fullSTO)

  const ema12 = ema()
    .id(1)
    .options({ windowSize: 3 })
    .merge((d, c) => {
      d.ema12 = c
    })
    .accessor((d) => d.ema12)

  const ema26 = ema()
    .id(2)
    .options({ windowSize: 7 })
    .merge((d, c) => {
      d.ema26 = c
    })
    .accessor((d) => d.ema26)

  const {
    data: dataCandle,
    xScale: xScaleCandle,
    xAccessor: xAccessorCandle,
    displayXAccessor: displayXAccessorCandle,
  } = xScaleProviderCandle(ema12(ema26(fullSTO(bbcalculator(transactionData)))))

  const yExtents = (sample) => [sample.high, 0]
  const barChartExtents = (data) => {
    return data.volume
  }

  const volumeSeries = (data) => {
    return data.volume
  }
  const xMax = xAccessor(data[data.length - 1])
  const xMin = xAccessor(data[0])
  const xExtents = [xMin, xMax]

  const maxCandle = xAccessorCandle(dataCandle[dataCandle.length - 1])
  const minCandle = xAccessorCandle(dataCandle[0])
  const toppestCandle = max(transactionData, (x) => +x.high)
  const yExtentsCandle = (sample) => [toppestCandle, 0]
  const xExtentsCandle = [minCandle, maxCandle]

  const radius = (data) => 3
  const yAccessor = (data) => data.low
  const yAccessor1 = (data) => data.a1
  const yAccessor2 = (data) => data.a2
  const yAccessor3 = (data) => data.a3
  const yAccessor4 = (data) => data.a4
  const dateFormat = timeFormat("%Y-%m-%d %H:%M:%S")
  const numberFormat = format(".2f")

  const yListAccessor = (data) => data.prices

  const yListAccessorCandle = (data) => data.candles

  const ChartCanvasCandle = withDeviceRatio()(
    withSize({ style: { minHeight: 300 } })(function ({
      width,
      height,
      ratio,
    }) {
      const gridHeight = height - margin.top - margin.bottom
      const barChartHeight = gridHeight / 4
      const barChartOrigin = (_, h) => [0, h - barChartHeight]

      return (
        <ChartCanvas
          height={height}
          ratio={ratio}
          width={width}
          margin={margin}
          data={dataCandle}
          displayXAccessor={displayXAccessorCandle}
          seriesName="Data"
          xScale={xScaleCandle}
          xAccessor={xAccessorCandle}
          xExtents={xExtentsCandle}
        >
          <Chart id={1} yExtents={yExtentsCandle} height={height * 0.7}>
            <CandlestickSeries />
            <BollingerSeries />

            <LineSeries
              yAccessor={ema26.accessor()}
              strokeStyle={ema26.stroke()}
            />
            <LineSeries
              yAccessor={ema12.accessor()}
              strokeStyle={ema12.stroke()}
            />

            <MovingAverageTooltip
              origin={[8, 0]}
              options={[
                {
                  stroke: ema26.stroke(),
                  type: "EMA",
                  windowSize: ema26.options().windowSize,
                  yAccessor: ema26.accessor(),
                },
                {
                  stroke: ema12.stroke(),
                  type: "EMA",
                  windowSize: ema12.options().windowSize,
                  yAccessor: ema12.accessor(),
                },
              ]}
            />

            <HoverTooltip
              yAccessor={yListAccessorCandle}
              tooltip={{
                content: ({ currentItem, xAccessor }) => ({
                  x: dateFormat(xAccessor(currentItem)),
                  y: [
                    {
                      label: "Low",
                      value: currentItem.low && numberFormat(currentItem.low),
                    },
                    {
                      label: "High",
                      value: currentItem.high && numberFormat(currentItem.high),
                    },
                    {
                      label: "Open",
                      value: currentItem.open && numberFormat(currentItem.open),
                    },
                    {
                      label: "Close",
                      value:
                        currentItem.close && numberFormat(currentItem.close),
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
          {/* <Chart
            id={2}
            height={height * 0.3}
            padding={{ top: 25, bottom: 0, left: 0, right: 0 }}
            origin={(_, h) => [0, h - 2 * height * 0.3]}
            yExtents={[0, 100]}
          >
            <StochasticSeries yAccessor={(d) => d.fullSTO} />
            <YAxis />
          </Chart> */}
        </ChartCanvas>
      )
    })
  )

  const ChartCanvasCool = withDeviceRatio()(
    withSize({ style: { minHeight: 300 } })(function ({
      width,
      height,
      ratio,
    }) {
      const gridHeight = height - margin.top - margin.bottom
      const barChartHeight = gridHeight / 4
      const barChartOrigin = (_, h) => [0, h - barChartHeight]

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
          <Chart
            id={1}
            yExtents={yExtents}
            height={height * 0.7}
            padding={{ top: 25, bottom: 0, left: 0, right: 0 }}
          >
            {/* <CandlestickSeries /> */}
            {/* <ScatterNebula
          yListAccessor={yListAccessor}
          marker={CircleMarker}
          markerProps={{ r: radius }}
        /> */}
            <LineSeries
              yAccessor={yAccessor}
              // marker={CircleMarker}
              // markerProps={{ r: radius }}
            />
            <LineSeries
              yAccessor={yAccessor1}
              strokeStyle="rgba(102, 229, 67, 1)"
              strokeWidth={2}
              hoverStrokeWidth={4}
              // marker={CircleMarker}
              // markerProps={{ r: radius }}
            />
            <LineSeries
              yAccessor={yAccessor2}
              strokeStyle="rgba(255, 225, 0, 1)"
              strokeWidth={2}
              hoverStrokeWidth={4}
              // marker={CircleMarker}
              // markerProps={{ r: radius }}
            />
            <LineSeries
              yAccessor={yAccessor3}
              strokeStyle="rgba(229, 164, 67, 1)"
              strokeWidth={2}
              hoverStrokeWidth={4}
              // marker={CircleMarker}
              // markerProps={{ r: radius }}
            />
            <LineSeries
              yAccessor={yAccessor4}
              strokeStyle="rgba(229, 85, 67, 1)"
              strokeWidth={2}
              hoverStrokeWidth={4}
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
                      label: "LowList",
                      value: currentItem.low && numberFormat(currentItem.low),
                    },
                    {
                      label: "HighList",
                      value: currentItem.high && numberFormat(currentItem.high),
                    },
                    {
                      label: "Volume",
                      value:
                        currentItem.volume && numberFormat(currentItem.volume),
                    },
                    { label: "RH", value: parseInt([currentItem.a4]) },
                    { label: "R4", value: parseInt([currentItem.a3]) },
                    { label: "R3", value: parseInt([currentItem.a2]) },
                    { label: "R2", value: parseInt([currentItem.a1]) },
                    { label: "RL", value: parseInt([currentItem.low]) },
                    // {
                    //   label: "DPS",
                    //   value: currentItem.DPS && numberFormat(currentItem.DPS),
                    // },
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
            height={height * 0.3}
            padding={{ top: 25, bottom: 0, left: 0, right: 0 }}
            origin={barChartOrigin}
            yExtents={barChartExtents}
          >
            <BarSeries yAccessor={volumeSeries} />
            <YAxis />
          </Chart>
        </ChartCanvas>
      )
    })
  )

  const hour = getIntervalInfo(listingData, transactions, 60 * 60 * 1000)
  const day = getIntervalInfo(listingData, transactions, 24 * 60 * 60 * 1000)
  const week = getIntervalInfo(
    listingData,
    transactions,
    7 * 24 * 60 * 60 * 1000
  )
  const month = getIntervalInfo(
    listingData,
    transactions,
    4 * 7 * 24 * 60 * 60 * 1000
  )

  return (
    <div>
      <div className="w-full flex">
        <div class="w-1/2">
          <ChartCanvasCool />
        </div>
        <div class="w-1/2">
          <ChartCanvasCandle />
        </div>
      </div>
      <SpecTable {...{ hour, day, week, month }} />
    </div>
  )
}

export default MomentChart
