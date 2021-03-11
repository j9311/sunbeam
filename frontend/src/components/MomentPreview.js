import React from "react"
import { Link } from "react-router-dom"

export default function MomentPreview({
  playID,
  setID,
  image,
  name,
  jerseyNumber,
  team,
  date,
  playType,
  playCategory,
}) {
  console.log("date", date)
  return (
    <div className="block lg:w-1/2 p-4 text-gray-50">
      <Link
        to={"/moment/" + setID + "/" + playID}
        className="flex p-6 bg-gray-50 bg-opacity-10 hover:bg-opacity-20 rounded-sm"
      >
        <img src={image} alt={name} className="w-32 h-32" />
        <div className="flex flex-col flex-grow px-8">
          <h2 className="font-display text-3xl">{name}</h2>
          <p>Team: {team}</p>
          <p>Moment: {playType}</p>
          <p>Date: {new Date(date).toDateString()}</p>
        </div>
        <h3 className="font-display2 text-9xl select-none">{jerseyNumber}</h3>
      </Link>
    </div>
  )
}
