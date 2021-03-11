import { useBarcode } from "react-barcodes"

import React from "react"
import { Link } from "react-router-dom"

const RARITIES = {
  SET_VISUAL_COMMON: "rarity-common",
  SET_VISUAL_RARE: "rarity-rare",
  SET_VISUAL_LEGENDARY: "rarity-legendary",
  SET_VISUAL_ULTIMATE: "rarity-ultimate",
}

export default function CodexSet({ id, name, image, rarity, uniqueMoments }) {
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
    <Link
      to={"/set/" + id}
      className="w-full md:w-1/3 lg:w-1/4 p-12 text-gray-50 select-none"
    >
      <div class={`group relative cursor-pointer card ${RARITIES[rarity]}`}>
        <div className="absolute top-0 bottom-0 w-full rarity-round"></div>
        <img src={image} alt={name} className="rounded-xl rarity z-0" />
        <div className="rounded-xl absolute top-0 bottom-0 w-full z-10 flex flex-col justify-center bg-black bg-opacity-40 group-hover:bg-opacity-10">
          <div className="bg-black bg-opacity-80 text-center py-2">
            <h3 className="font-bungee text-xl">{name}</h3>
            <p>{uniqueMoments} Moments</p>
            <svg ref={inputRef} className="w-full"></svg>
          </div>
        </div>
      </div>
    </Link>
  )
}
