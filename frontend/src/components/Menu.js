import React, { useContext } from "react"
import { Link } from "react-router-dom"
import { USER, API_BASE } from "../Contexts"
import GoogleLogin from "react-google-login"

import { ImExit } from "react-icons/im"

function Menu(props) {
  const { user, setUser } = useContext(USER)

  const logout = () => {
    setUser(null)
  }

  const handleLogin = async (googleData) => {
    const resp = await fetch(API_BASE + "/api/v1/auth/google", {
      method: "POST",
      body: JSON.stringify({ token: googleData.tokenId }),
      headers: {
        "Content-Type": "application/json",
      },
    })

    setUser(await resp.json())
  }

  return (
    <div>
      <nav class="bg-gray-900  shadow-2xl select-none font-display">
        <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div class="flex items-center justify-between h-16">
            <div class="flex items-center h-full">
              <img
                alt="NF Toast Logo"
                src="/toasttoast.svg"
                className="h-full py-2"
              ></img>

              <div class="hidden md:block ">
                <div class="ml-10 text-lg flex items-baseline space-x-4">
                  <Link
                    to="/Dashboard"
                    class="text-gray-300 hover:bg-gray-700 hover:text-white px-3 py-2 rounded-md font-medium"
                  >
                    Dashboard
                  </Link>

                  <Link
                    to="/Favorites"
                    class="text-gray-300 hover:bg-gray-700 hover:text-white px-3 py-2 rounded-md font-medium"
                  >
                    Favorites
                  </Link>

                  <Link
                    to="/Search"
                    class="text-gray-300 hover:bg-gray-700 hover:text-white px-3 py-2 rounded-md font-medium"
                  >
                    Search
                  </Link>

                  <Link
                    to="/Redlines"
                    class="text-gray-300 hover:bg-gray-700 hover:text-white px-3 py-2 rounded-md  font-medium"
                  >
                    Feed
                  </Link>

                  <Link
                    to="/Releases"
                    class="text-gray-300 hover:bg-gray-700 hover:text-white px-3 py-2 rounded-md font-medium"
                  >
                    Releases
                  </Link>
                </div>
              </div>
            </div>
            {!user ? (
              <GoogleLogin
                clientId={process.env.REACT_APP_GOOGLE_CLIENT_ID}
                buttonText="Log in with Google"
                theme="dark"
                className="googlelogin"
                onSuccess={handleLogin}
                onFailure={handleLogin}
                cookiePolicy={"single_host_origin"}
              />
            ) : (
              <div class="hidden md:block">
                <div class="ml-4 flex items-center md:ml-6">
                  <p>Welcome, {user.name}</p>
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
                          src={user.picture}
                          alt="Your Google Profile"
                        />
                      </button>
                    </div>
                  </div>

                  <button
                    onClick={logout}
                    className="ml-4 block text-gray-300 hover:text-white"
                  >
                    <span>Log out</span>{" "}
                    <ImExit className="ml-1 h-full inline" />
                  </button>
                </div>
              </div>
            )}
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
            <Link
              to="/Dashboard"
              class="bg-gray-900 text-white block px-3 py-2 rounded-md text-base font-medium"
            >
              Dashboard
            </Link>

            <Link
              to="/Favorites"
              class="text-gray-300 hover:bg-gray-700 hover:text-white block px-3 py-2 rounded-md text-base font-medium"
            >
              Favorites
            </Link>

            <Link
              to="/Search"
              class="text-gray-300 hover:bg-gray-700 hover:text-white block px-3 py-2 rounded-md text-base font-medium"
            >
              Search
            </Link>

            <Link
              to="/Redlines"
              class="text-gray-300 hover:bg-gray-700 hover:text-white block px-3 py-2 rounded-md text-base font-medium"
            >
              Feed
            </Link>

            <Link
              to="/Releases"
              class="text-gray-300 hover:bg-gray-700 hover:text-white block px-3 py-2 rounded-md text-base font-medium"
            >
              Releases
            </Link>
            <Link
              to="/"
              class="text-gray-300 hover:bg-gray-700 hover:text-white block px-3 py-2 rounded-md text-base font-medium"
            >
              Log In | Out
            </Link>
          </div>
          {!user ? (
            <GoogleLogin
              clientId={process.env.REACT_APP_GOOGLE_CLIENT_ID}
              buttonText="Log in with Google"
              theme="dark"
              className="googlelogin"
              onSuccess={handleLogin}
              onFailure={handleLogin}
              cookiePolicy={"single_host_origin"}
            />
          ) : (
            <div class="hidden md:block">
              <div class="ml-4 flex items-center md:ml-6">
                <p>Welcome, {user.name}</p>
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
                        src={user.picture}
                        alt="Your Google Profile"
                      />
                    </button>
                  </div>
                </div>

                <button
                  onClick={logout}
                  className="ml-4 block text-gray-300 hover:text-white"
                >
                  <span>Log out</span> <ImExit className="ml-1 h-full inline" />
                </button>
              </div>
            </div>
          )}
        </div>
      </nav>
    </div>
  )
}

export default Menu
