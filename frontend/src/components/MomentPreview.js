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
    <div className="block xl:w-1/3 lg:w-1/2 md-:w-1/2 w-full p-4 text-gray-50">
      <Link
        to={"/moment/" + setID + "/" + playID}
        className="flex p-6 bg-gray-50 bg-opacity-10 hover:bg-opacity-20 rounded-sm"
      >
        <img src={image} alt={name} className="w-32 h-32" />
        <div className="flex flex-col flex-grow px-8">
          <h2 className="font-display text-2xl">{name}</h2>
          <p>{team}</p>
          <p>{playCategory}</p>
          <p>{new Date(date).toDateString()}</p>
        </div>
        <h3 className="font-display2 text-5xl select-none flex flex-col text-right">
          {" "}
          <span className="text-3xl font-display">No.</span> {jerseyNumber}
        </h3>
      </Link>
    </div>
  )
}
