import React from "react"

import Menu from "./Menu"
import Momentcard from "./Momentcard"
import Momentcardhead from "./Momentcardhead"
import Favoritecard from "./Favoritecard"
import Spinner from "./Spinner"
import Play from "./Play"
import { useQuery, gql } from "@apollo/client"
import { GetFavorites } from "../Contexts"

const GET_MOMENTS = gql`
  query AllMomentsSearchQuery($moments: [String]!) {
    getMoments(moments: $moments) {
      playID
      setID
      image

      set {
        name
        rarity
        humanRarity
      }

      name
      jerseyNumber
      team
      playCategory
      playType
      date
    }
  }
`

function Favorites(props) {
  const { loading, error, data } = useQuery(GET_MOMENTS, {
    variables: { moments: Object.keys(GetFavorites()) },
  })
  console.log(error || data)

  const plays = data?.getMoments ?? []

  return (
    <div>
      <header class="bg-gray-800 shadow-2xl font-display1">
        <div class="max-w-7xl mx-auto py-6 px-4 sm:px-6 lg:px-8">
          <h1 class="text-3xl text-gray-50">Favorites</h1>
        </div>
      </header>
      <main className="container mx-auto">
        {loading ? (
          <Spinner />
        ) : error ? (
          <div>
            <h1>Error with search query</h1>
            <pre>{error.message}</pre>
          </div>
        ) : (
          <div class="overflow-x-auto sm:mx-6">
            <div class="py-2 align-middle inline-block min-w-full sm:px-6 lg:px-8">
              <div class="shadow overflow-hidden border-b border-gray-200 sm:rounded-lg">
                <table class="min-w-full divide-y divide-gray-200">
                  <tbody class="bg-white divide-y divide-gray-200">
                    {plays.map((play) => {
                      return <Play {...play} fav={true} />
                    })}
                  </tbody>
                </table>
              </div>
            </div>
          </div>
        )}
      </main>
    </div>
  )
}

export default Favorites
