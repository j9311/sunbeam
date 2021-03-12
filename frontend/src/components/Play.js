import React, { useState } from "react"
import { Link } from "react-router-dom"
import { AddFavorite, IsFavorite } from "../Contexts"

const Play = ({
  setID,
  playID,
  date,
  name,
  jerseyNumber,
  set,
  team,
  image,
  playType,
  playCategory,
  fav,
}) => {
  const [isFavorite, setIsFavorite] = useState(IsFavorite(setID, playID))

  function favorite() {
    AddFavorite(setID, playID)
    setIsFavorite(IsFavorite(setID, playID))
  }
  if (fav && !isFavorite) {
    return null
  }
  return (
    <tr>
      <td class="px-6 py-4 whitespace-nowrap bg-gray-800">
        <div class="flex items-center">
          <div class="flex-shrink-0 h-10 w-10">
            <img class="h-15 w-15 rounded-full" src={image} alt="set_im" />
          </div>
          <div class="ml-4">
            <div class="text-sm text-gray-100 font-semibold">{name}</div>
            <div class="text-sm text-gray-50 font-thin">{team}</div>
          </div>
        </div>
      </td>
      <td class="px-6 py-4 whitespace-nowrap bg-gray-800">
        <div class="text-sm text-gray-100 font-semibold">{set.name}</div>
        <div class="text-sm text-gray-50 font-thin">
          {new Date(date).toDateString()}
        </div>
      </td>
      <td class="px-6 py-4 whitespace-nowrap bg-gray-800">
        <span class="px-2 uppercase inline-flex font-normal justify-center text-xs leading-5 rounded-full bg-yellow-700 text-gray-50">
          {set.humanRarity}
        </span>
      </td>
      <td class="px-6 py-4 whitespace-nowrap bg-gray-800 text-sm text-gray-50">
        <div>
          <p>Type: {playType}</p>
          {playType !== playCategory && <p>Category: {playCategory}</p>}
        </div>
      </td>
      <td class="m-3 whitespace-nowrap text-center text-sm font-medium bg-gray-800">
        <Link
          to={`/moment-spec/${setID}/${playID}`}
          type="submit"
          class="inline bg-gray-900py-2 px-4 border border-transparent text-sm font-medium rounded-md text-white bg-red-600 hover:bg-red-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500"
        >
          View Moment
        </Link>

        <button
          onClick={favorite}
          className="inline group relative w-5em ml-4 py-2 px-4 border border-transparent text-sm font-medium rounded-md text-white bg-gray-700 hover:bg-gray-500"
        >
          Remove
        </button>
      </td>
    </tr>
  )
}

export default Play
