import React from "react"
import { Link } from "react-router-dom"

export default function MomentPreview({
  id,
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
  return (
    <Link
      to={"/moment/" + setID + "/" + playID}
      className="w-full md:w-1/3 lg:w-1/4 p-12 text-gray-50 select-none"
    >
      <div>
        <img src={image} alt={name} />
        <h2>{name}</h2>
        <p>{}</p>
      </div>
    </Link>
  )
}
