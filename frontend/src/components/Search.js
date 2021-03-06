import React from "react"
import Menu from "./Menu"

function Search(props) {
  return (
    <div>
      <Menu />
      <header class="bg-green-600">
        <div class="max-w-7xl mx-auto py-6 px-4 sm:px-6 lg:px-8">
          <h1 class="text-3xl font-bold text-gray-50">Search</h1>
        </div>
      </header>
      <main>
        <div>
          <div class="md:grid md:grid-cols-3 md:gap-6">
            <div class="md:col-span-1">
              <div class="px-4 sm:px-0">
                <h2 class="text-lg font-medium leading-6 text-gray-900 p-5">
                  Current supported search parameters:
                </h2>
                <ul class="mt-1 text-sm font-bold text-gray-600 p-5">
                  <li>Player names. Moment names.</li>
                  <li>Set and Rarity coming soon.</li>
                  <li>
                    Some listings and moments may not be present due to lack of
                    volume;listings, sales or otherwise.
                  </li>
                </ul>
                <p class="mt-1 text-sm text-gray-600 p-5 font-extralight">
                  Report any bugs or errors to #dev-chat in Ligma.
                </p>
              </div>
            </div>
            <div class="mt-5 md:mt-0 md:col-span-2">
              <form action="#" method="POST">
                <div class="shadow sm:rounded-md sm:overflow-hidden">
                  <div class="px-4 py-5 bg-white space-y-6 sm:p-6">
                    <div class="grid grid-cols-3 gap-6">
                      <div class="col-span-3 sm:col-span-2">
                        <label
                          for="company_website"
                          class="block text-sm font-medium text-gray-700"
                        >
                          Moment Search
                        </label>
                        <div class="mt-1 flex rounded-md shadow-sm">
                          <input
                            type="text"
                            name="company_website"
                            id="company_website"
                            class="focus:ring-green-500 focus:border-green-500 flex-1 block w-full rounded-none rounded-r-md sm:text-sm border-green-300"
                            placeholder="search for player or moment name"
                          />
                        </div>
                      </div>
                    </div>
                    <div class="px-4 py-3 bg-gray-50 text-right sm:px-6">
                      <button
                        type="submit"
                        class="flex justify-center py-2 px-4 border border-transparent shadow-sm text-sm font-medium rounded-md text-white bg-green-600 hover:bg-green-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-green-500"
                      >
                        Search
                      </button>
                      <p class="font-italic text-gray-500">
                        Based on server conditions, search times may vary.
                      </p>
                    </div>
                  </div>
                </div>
              </form>
            </div>
          </div>
        </div>
      </main>
    </div>
  )
}

export default Search
