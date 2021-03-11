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
    <div className="w-full md:w-1/2 lg:w-1/3 xl:w-1/4 p-12 text-gray-50 select-none">
      <Link
        to={"/set/" + id}
        className={`set-preview group block relative cursor-pointer ${RARITIES[rarity]}`}
      >
        <div className="absolute top-0 bottom-0 w-full rarity-round"></div>
        <img src={image} alt={name} className="rounded-xl rarity z-0" />
        <div className="absolute rounded-xl top-0 bottom-0 w-full z-10 flex flex-col justify-center bg-black bg-opacity-40 group-hover:bg-opacity-10">
          <div className="bg-black bg-opacity-80 text-center py-2">
            <h3 className="font-bungee text-xl">{name}</h3>
            <p>{uniqueMoments} Moments</p>
            <svg ref={inputRef} className="w-full"></svg>
          </div>
        </div>
      </Link>
    </div>
  )
}
