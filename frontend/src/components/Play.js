import React from "react"
import { Link } from "react-router-dom"

const Play = ({
  setID,
  playID,
  date,
  name,
  jerseyNumber,
  set,
  image,
  playType,
  playCategory,
}) => {
  return (
    <tr>
      <td class="px-6 py-4 whitespace-nowrap">
        <div class="flex items-center">
          <div class="flex-shrink-0 h-10 w-10">
            <img class="h-15 w-15 rounded-full" src={image} alt="set_im" />
          </div>
          <div class="ml-4">
            <div class="text-sm font-medium text-gray-900">{name}</div>
            <div class="text-sm text-gray-500">No. {jerseyNumber}</div>
          </div>
        </div>
      </td>
      <td class="px-6 py-4 whitespace-nowrap">
        <div class="text-sm text-gray-900">{set.name}</div>
        <div class="text-sm text-gray-500">{new Date(date).toDateString()}</div>
      </td>
      <td class="px-6 py-4 whitespace-nowrap">
        <span class="px-2 inline-flex text-xs leading-5 font-semibold rounded-full bg-yellow-700 text-gray-50">
          {set.rarity}
        </span>
      </td>
      <td class="px-6 py-4 whitespace-nowrap text-sm text-gray-500">
        <div>
          <p>Type: {playType}</p>
          {playType !== playCategory && <p>Category: {playCategory}</p>}
        </div>
      </td>
      <td class="m-3 whitespace-nowrap text-center text-sm font-medium">
        <Link
          to={`/set/${setID}/${playID}`}
          type="submit"
          class="py-2 px-4 border border-transparent text-sm font-medium rounded-md text-white bg-green-700 hover:bg-green-500 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500"
        >
          View Moment
        </Link>
      </td>
    </tr>
  )
}

export default Play
