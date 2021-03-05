import React from "react"
import { GiGooeyEyedSun } from "react-icons/gi"

function Search(props) {
  return (
    <div>
      <nav class="bg-green-700">
        <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div class="flex items-center justify-between h-16">
            <div class="flex items-center">
              <GiGooeyEyedSun class=""></GiGooeyEyedSun>
              <div class="hidden md:block">
                <div class="ml-10 flex items-baseline space-x-4">
                  <a
                    href="http://localhost:3000/Dashboard"
                    class="text-gray-300 hover:bg-gray-700 hover:text-white px-3 py-2 rounded-md text-sm font-medium"
                  >
                    Dashboard
                  </a>

                  <a
                    href="http://localhost:3000/Favorites"
                    class="text-gray-300 hover:bg-gray-700 hover:text-white px-3 py-2 rounded-md text-sm font-medium"
                  >
                    Favorites
                  </a>

                  <a
                    href="http://localhost:3000/Search"
                    class="text-gray-300 hover:bg-gray-700 hover:text-white px-3 py-2 rounded-md text-sm font-medium"
                  >
                    Search
                  </a>

                  <a
                    href="http://localhost:3000/Redlines"
                    class="text-gray-300 hover:bg-gray-700 hover:text-white px-3 py-2 rounded-md text-sm font-medium"
                  >
                    Redlines
                  </a>

                  <a
                    href="http://localhost:3000/Releases"
                    class="text-gray-300 hover:bg-gray-700 hover:text-white px-3 py-2 rounded-md text-sm font-medium"
                  >
                    Releases
                  </a>
                </div>
              </div>
            </div>
            <div class="hidden md:block">
              <div class="ml-4 flex items-center md:ml-6">
                <a
                  href="http://localhost:3000/"
                  class="text-gray-300 hover:bg-gray-700 hover:text-white block px-3 py-2 rounded-md text-base font-medium"
                >
                  Log In / Sign Out
                </a>
                <button class="bg-gray-800 p-1 rounded-full text-gray-400 hover:text-white focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-offset-gray-800 focus:ring-white">
                  <span class="sr-only">View notifications</span>
                  <svg
                    class="h-6 w-6"
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                    aria-hidden="true"
                  >
                    <path
                      stroke-linecap="round"
                      stroke-linejoin="round"
                      stroke-width="2"
                      d="M15 17h5l-1.405-1.405A2.032 2.032 0 0118 14.158V11a6.002 6.002 0 00-4-5.659V5a2 2 0 10-4 0v.341C7.67 6.165 6 8.388 6 11v3.159c0 .538-.214 1.055-.595 1.436L4 17h5m6 0v1a3 3 0 11-6 0v-1m6 0H9"
                    />
                  </svg>
                </button>
                <div class="ml-3 relative">
                  <div>
                    <button
                      class="max-w-xs bg-gray-800 rounded-full flex items-center text-sm focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-offset-gray-800 focus:ring-white"
                      id="user-menu"
                      aria-haspopup="true"
                    >
                      <span class="sr-only">Open user menu</span>
                      <img
                        class="h-8 w-8 rounded-full"
                        src="https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80"
                        alt=""
                      />
                    </button>
                  </div>

                  {/* <div
                      class="origin-top-right absolute right-0 mt-2 w-48 rounded-md shadow-lg py-1 bg-white ring-1 ring-black ring-opacity-5"
                      role="menu"
                      aria-orientation="vertical"
                      aria-labelledby="user-menu"
                    >
                      <a
                        href="http://localhost:3000/"
                        class="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100"
                        role="menuitem"
                      >
                        Your Profile
                      </a>
  
                      <a
                        href="http://localhost:3000/"
                        class="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100"
                        role="menuitem"
                      >
                        Settings
                      </a>
  
                      <a
                        href="http://localhost:3000/"
                        class="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100"
                        role="menuitem"
                      >
                        Log In / Sign Out
                      </a>
                    </div> */}
                </div>
              </div>
            </div>
            <div class="-mr-2 flex md:hidden">
              <button
                type="button"
                class="bg-gray-800 inline-flex items-center justify-center p-2 rounded-md text-gray-400 hover:text-white hover:bg-gray-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-offset-gray-800 focus:ring-white"
                aria-controls="mobile-menu"
                aria-expanded="false"
              >
                <span class="sr-only">Open main menu</span>

                <svg
                  class="block h-6 w-6"
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                  aria-hidden="true"
                >
                  <path
                    stroke-linecap="round"
                    stroke-linejoin="round"
                    stroke-width="2"
                    d="M4 6h16M4 12h16M4 18h16"
                  />
                </svg>

                <svg
                  class="hidden h-6 w-6"
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                  aria-hidden="true"
                >
                  <path
                    stroke-linecap="round"
                    stroke-linejoin="round"
                    stroke-width="2"
                    d="M6 18L18 6M6 6l12 12"
                  />
                </svg>
              </button>
            </div>
          </div>
        </div>

        <div class="md:hidden" id="mobile-menu">
          <div class="px-2 pt-2 pb-3 space-y-1 sm:px-3">
            <a
              href="http://localhost:3000/Dashboard"
              class="bg-gray-900 text-white block px-3 py-2 rounded-md text-base font-medium"
            >
              Dashboard
            </a>

            <a
              href="http://localhost:3000/Favorites"
              class="text-gray-300 hover:bg-gray-700 hover:text-white block px-3 py-2 rounded-md text-base font-medium"
            >
              Favorites
            </a>

            <a
              href="http://localhost:3000/Search"
              class="text-gray-300 hover:bg-gray-700 hover:text-white block px-3 py-2 rounded-md text-base font-medium"
            >
              Search
            </a>

            <a
              href="http://localhost:3000/Redlines"
              class="text-gray-300 hover:bg-gray-700 hover:text-white block px-3 py-2 rounded-md text-base font-medium"
            >
              Redlines
            </a>

            <a
              href="http://localhost:3000/Releases"
              class="text-gray-300 hover:bg-gray-700 hover:text-white block px-3 py-2 rounded-md text-base font-medium"
            >
              Releases
            </a>
            <a
              href="http://localhost:3000/"
              class="text-gray-300 hover:bg-gray-700 hover:text-white block px-3 py-2 rounded-md text-base font-medium"
            >
              Log In / Sign Out
            </a>
          </div>
          <div class="pt-4 pb-3 border-t border-gray-700">
            <div class="flex items-center px-5">
              <div class="flex-shrink-0">
                <img
                  class="h-10 w-10 rounded-full"
                  src="https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80"
                  alt=""
                />
              </div>
              <div class="ml-3">
                <div class="text-base font-medium leading-none text-white">
                  Google Name
                </div>
                <div class="text-sm font-medium leading-none text-gray-400">
                  daemon@google.com
                </div>
              </div>
              <button class="ml-auto bg-gray-800 flex-shrink-0 p-1 rounded-full text-gray-400 hover:text-white focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-offset-gray-800 focus:ring-white">
                <span class="sr-only">View notifications</span>
                <svg
                  class="h-6 w-6"
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                  aria-hidden="true"
                >
                  <path
                    stroke-linecap="round"
                    stroke-linejoin="round"
                    stroke-width="2"
                    d="M15 17h5l-1.405-1.405A2.032 2.032 0 0118 14.158V11a6.002 6.002 0 00-4-5.659V5a2 2 0 10-4 0v.341C7.67 6.165 6 8.388 6 11v3.159c0 .538-.214 1.055-.595 1.436L4 17h5m6 0v1a3 3 0 11-6 0v-1m6 0H9"
                  />
                </svg>
              </button>
            </div>
            <div class="mt-3 px-2 space-y-1">
              <a
                href="http://localhost:3000/"
                class="block px-3 py-2 rounded-md text-base font-medium text-gray-400 hover:text-white hover:bg-gray-700"
              >
                Log In / Sign Out
              </a>
            </div>
          </div>
        </div>
      </nav>
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
                        class="inline-flex justify-center py-2 px-4 border border-transparent shadow-sm text-sm font-medium rounded-md text-white bg-green-600 hover:bg-green-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-green-500"
                      >
                        Search
                      </button>
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
