import React from "react"
import Menu from "./Menu"
import Chartcard from "./Chartcard"
import Popup from "reactjs-popup"
import { useQuery, gql } from "@apollo/client"

import { CircleLoader } from "react-spinners"
import { useBarcode } from "react-barcodes"

const GET_SETS = gql`
  query GetSets {
    getAllSets {
      id
      name
      image
      rarity
      uniqueMoments
    }
  }
`

const RARITIES = {
  SET_VISUAL_COMMON: "rarity-common",
  SET_VISUAL_RARE: "rarity-rare",
  SET_VISUAL_LEGENDARY: "rarity-legendary",
  SET_VISUAL_ULTIMATE: "rarity-ultimate",
}

function Moment({ id, name, image, rarity, uniqueMoments }) {
  const { inputRef } = useBarcode({
    value: name.substr(0, 10),
    options: {
      lineColor: "#f0f0f0",
      background: "#00000000",
      displayValue: false,
      height: 32,
    },
  })
  return (
    <div className="w-full md:w-1/3 lg:w-1/4 p-12 text-gray-50 select-none">
      <div class={`group relative cursor-pointer card ${RARITIES[rarity]}`}>
        <div className="absolute top-0 bottom-0 w-full rarity-round"></div>
        <img src={image} alt={name} className="rounded-xl rarity z-0" />
        <div className="rounded-xl absolute top-0 bottom-0 w-full z-10 flex flex-col justify-center bg-black bg-opacity-40 group-hover:bg-opacity-10">
          <div className="bg-black bg-opacity-80 text-center py-2">
            <h3 className="font-bungee text-xl">{name}</h3>
            <p>{uniqueMoments} Moments</p>
            <svg
              ref={inputRef}
              className="w-full"
              preserveAspectRatio="false"
            ></svg>
          </div>
        </div>
      </div>
    </div>
  )
}

function Dashboard(props) {
  const { loading, error, data } = useQuery(GET_SETS, {
    variables: { language: "english" },
  })

  return (
    <div>
      <Menu />
      <header class="bg-gray-600  shadow-2xl">
        <div class="font-display1 max-w-7xl mx-auto py-6 px-4 sm:px-6 lg:px-8 flex flex-col">
          {/* <h1 class="text-3xl font-bold text-gray-50">Welcome to Edge!</h1> */}
          <p className=" text-xl text-gray-200">
            Welcome to NFToast - TS, your home for NBA Top Shot market analysis.
          </p>
          <p className=" text-xs text-gray-200">
            Utilize proprietary technology to give you the edge you need to
            collect and trade Top Shot NFTs. Click on a set to start browsing
            moments, or head over to the search tab for specific moments.
          </p>
        </div>
      </header>

      <main className="flex flex-col justify-center items-center text-white mt-8">
        <h1 className="font-display3 text-9xl uppercase">Sets</h1>
        {loading ? (
          <CircleLoader size={100} />
        ) : error ? (
          <div>
            <h1>Error fetching sets</h1>
            <pre>{error.message}</pre>
          </div>
        ) : (
          <div className="container flex flex-wrap justify-evenly">
            {data.getAllSets.map((set) => (
              <Moment key={set.id} {...set} />
            ))}
          </div>
        )}
      </main>
    </div>
  )
}

export default Dashboard
