import React, { useEffect, useState } from "react"
import Menu from "./Menu"

import Play from "./Play"

function Search(props) {
  const [search, setSearch] = useState("")
  const [plays, setPlays] = useState([])

  // useEffect(() => {
  //   axios
  //     .get("", { params: { search } })
  //     .then((res) => {
  //       setPlays(res.data)
  //       console.log(res.data)
  //     })
  //     .catch((err) => console.log(err))
  // }, [])

  const handleChange = (e) => {
    setSearch(e.target.value)
  }

  const filteredPlays = plays.filter((play) =>
    play.name.toLowerCase().includes(search.toLowerCase())
  )

  return (
    <div className="font-display">
      <header class="bg-gray-600">
        <div class="max-w-7xl mx-auto py-6 px-4 sm:px-6 lg:px-8">
          <h1 class="text-3xl font-bold text-gray-50">Search</h1>
        </div>
      </header>
      <main>
        <div>
          <div class="md:grid md:grid-cols-3 md:gap-6">
            <div class="md:col-span-1">
              <div class="px-4 sm:px-0">
                <h2 class="text-lg font-medium leading-6 text-gray-190 p-5">
                  Current supported search parameters:
                </h2>
                <hr className="flex mx-4"></hr>
                <ul class="mt-1 text-sm font-bold text-gray-150 p-5">
                  <li>Player names. Moment names.</li>
                  <li>Set and Rarity coming soon.</li>
                  <li>
                    Some listings and moments may not be present due to lack of
                    volume;listings, sales or otherwise.
                  </li>
                </ul>
                <p class="mt-1 text-sm text-gray-175 p-5 font-extralight">
                  Report any bugs or errors to #dev-chat in Ligma.
                </p>
              </div>
            </div>
            <div class="mt-5 md:mt-0 md:col-span-2">
              <form action="#" method="POST">
                <div class="shadow sm:rounded-md sm:overflow-hidden">
                  <div class="px-4 py-5 space-y-6 sm:p-6">
                    <div class="grid grid-cols-3 gap-6">
                      <div class="col-span-3 sm:col-span-2">
                        <label
                          for="company_website"
                          class="block text-sm font-medium text-gray-100"
                        >
                          Moment Search
                        </label>
                        <div class="mt-1 flex rounded-md shadow-sm">
                          <input
                            type="text"
                            name="moment-search"
                            class="focus:ring-green-500 focus:border-gray-500 flex-1 block w-full rounded-none rounded-r-md sm:text-sm border-gray-300"
                            placeholder="search for player name"
                            onChange={handleChange}
                          />
                          <button
                            type="submit"
                            class="flex justify-center py-4 px-6 border border-transparent shadow-sm text-sm font-medium rounded-md text-white bg-red-600 hover:bg-red-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-green-500"
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
      </main>
      <div>
        {filteredPlays.map((play) => {
          return (
            <Play
              key={play.id ?? "N/A"}
              date={play.date ?? "N/A"}
              jno={play.jerseyNumber ?? "N/A"}
              name={play.name ?? "N/A"}
              rarity={play.rarity ?? "N/A"}
              set={play.set ?? "N/A"}
              image={play.image ?? "N/A"}
              type={play.type ?? "N/A"}
            />
          )
        })}
      </div>
    </div>
  )
}

export default Search
