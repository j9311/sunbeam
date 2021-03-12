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
      <td class="px-6 py-4 whitespace-nowrap bg-gray-800">
        <div class="flex items-center">
          <div class="flex-shrink-0 h-10 w-10">
            <img class="h-15 w-15 rounded-full" src={image} alt="set_im" />
          </div>
          <div class="ml-4">
            <div class="text-sm font-medium text-gray-100">{name}</div>
            <div class="text-sm text-gray-50">No. {jerseyNumber}</div>
          </div>
        </div>
      </td>
      <td class="px-6 py-4 whitespace-nowrap bg-gray-800">
        <div class="text-sm text-gray-100">{set.name}</div>
        <div class="text-sm text-gray-50">{new Date(date).toDateString()}</div>
      </td>
      <td class="px-6 py-4 whitespace-nowrap bg-gray-800">
        <span class="px-2 inline-flex justify-center text-xs leading-5 font-semibold rounded-full bg-yellow-700 text-gray-50">
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
          to={`/set/${setID}/${playID}`}
          type="submit"
          class="py-2 px-4 border border-transparent text-sm font-medium rounded-md text-white bg-red-600 hover:bg-red-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500"
        >
          View Moment
        </Link>
      </td>
    </tr>
  )
}

export default Play
