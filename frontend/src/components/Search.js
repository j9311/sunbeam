import React, { useEffect, useState } from "react"
import { useQuery, gql } from "@apollo/client"

import Play from "./Play"

const SEARCH_PLAYS = gql`
  query AllMomentsSearchQuery($search: String!) {
    searchMoments(search: $search) {
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

function Search(props) {
  const [search, setSearch] = useState("")
  const [searchInput, setSearchInput] = useState("")
  // const [plays, setPlays] = useState([])

  const { loading, error, data } = useQuery(SEARCH_PLAYS, {
    variables: { search },
  })
  console.log(error || data)

  const plays = data?.searchMoments ?? []

  let timeout
  function debounce(evt) {
    clearTimeout(timeout)
    const val = evt.target.value
    setSearchInput(val)

    if (val.length > 3) {
      timeout = setTimeout(() => {
        runSearch(val)
      }, 400)
    }
  }

  const keyDown = (evt) => {
    if (evt.key === "Enter") {
      evt.preventDefault()
      runSearch()
    }
  }

  const clickSearch = (evt) => {
    evt.preventDefault()
    runSearch()
  }

  const runSearch = (str) => {
    clearTimeout(timeout)
    console.log("Str", str, searchInput)

    if ((str ?? searchInput).length > 3) {
      setSearch(str ?? searchInput)
    } else {
      alert("Please type more than 3 characters for your search query!")
    }
  }

  return (
    <div className="font-body">
      <header className="bg-gray-800 bg-opacity-90">
        <div className="max-w-7xl mx-auto py-6 px-4 sm:px-6 lg:px-8">
          <h1 className="font-display text-3xl font-bold text-gray-50">
            Search
          </h1>
        </div>
      </header>
      <main className="container mx-auto">
        <div>
          <div className="md:grid md:grid-cols-3 md:gap-6">
            <div className="md:col-span-1">
              <div className="px-4 sm:px-0">
                <h2 className="text-lg font-medium leading-6 text-gray-190 p-5">
                  Current supported search parameters:
                </h2>
                <hr className="flex mx-4"></hr>
                <ul className="mt-1 text-sm font-semibold text-gray-150 p-5">
                  <li>Player names. Moment names.</li>
                  <li>Set and Rarity coming soon.</li>
                  <li>
                    Some listings and moments may not be present due to lack of
                    volume;listings, sales or otherwise.
                  </li>
                </ul>
                <p className="mt-1 text-sm text-gray-175 p-5 font-extralight">
                  Report any bugs or errors to #dev-chat in Ligma.
                </p>
              </div>
            </div>
            <div className="mt-5 md:mt-0 md:col-span-2">
              <form action="#" method="POST">
                <div className="shadow sm:rounded-md sm:overflow-hidden">
                  <div className="px-4 py-5 space-y-6 sm:p-6">
                    <div className="grid grid-cols-3 gap-6">
                      <div className="col-span-3 sm:col-span-2">
                        <label
                          for="company_website"
                          className="block text-sm font-medium text-gray-100"
                        >
                          Moment Search
                        </label>
                        <div className="mt-1 flex rounded-md shadow-sm">
                          <input
                            type="text"
                            name="moment-search"
                            className="text-black focus:ring-green-500 focus:border-gray-500 flex-1 block w-full rounded-none rounded-r-md sm:text-sm border-gray-300"
                            placeholder="search for player name"
                            onChange={debounce}
                            onKeyDown={keyDown}
                          />
                          <button
                            onClick={clickSearch}
                            className="ml-4 flex justify-center py-4 px-6 border border-transparent shadow-sm text-sm font-medium rounded-md text-white bg-red-600 hover:bg-red-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-green-500"
                          >
                            Search
                          </button>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </form>
            </div>
          </div>
        </div>
        <div class="flex flex-col">
          <div class="overflow-x-auto sm:mx-6">
            <div class="py-2 align-middle inline-block min-w-full sm:px-6 lg:px-8">
              <div class="shadow overflow-hidden border-b border-gray-200 sm:rounded-lg">
                <table class="min-w-full divide-y divide-gray-200">
                  <tbody class="bg-white divide-y divide-gray-200">
                    {plays.map((play) => {
                      return <Play {...play} />
                    })}
                  </tbody>
                </table>
              </div>
            </div>
          </div>
        </div>
      </main>
    </div>
  )
}

export default Search
