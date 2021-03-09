import React from "react"

import Menu from "./Menu"
import Momentcard from "./Momentcard"
import Momentcardhead from "./Momentcardhead"
import Favoritecard from "./Favoritecard"
function Favorites(props) {
  return (
    <div>
      <Menu />
      <header class="bg-gray-600 shadow-2xl">
        <div class="max-w-7xl mx-auto py-6 px-4 sm:px-6 lg:px-8">
          <h1 class="text-3xl font-bold text-gray-50">Favorites</h1>
        </div>
      </header>
      <main>
        <Momentcardhead />
        <Favoritecard />
        <Favoritecard />
        <Favoritecard />
        <Favoritecard />
        <Favoritecard />
      </main>
    </div>
  )
}

export default Favorites
