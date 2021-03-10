import React from "react"

import Menu from "./Menu"
import TwitterContainer from "./TwitterContainer"

function Redlines(props) {
  return (
    <div>
      <Menu />
      <header class="bg-gray-600">
        <div class="max-w-7xl mx-auto py-6 px-4 sm:px-6 lg:px-8">
          <h1 class="text-3xl font-bold text-gray-50">The Feed</h1>
        </div>
      </header>
      <div className="flex flex-row bg-black">
        <div className="w-1/4">
          <h1>NBA Top Shot Official</h1>
          <TwitterContainer feed="nba_topshot" />
        </div>
        <div className="w-1/4">
          <h1>StatMuse</h1>
          <TwitterContainer feed="TheFirstMint" />
        </div>
        <div className="w-1/4">
          <h1>NBA Top Shot BOT</h1>
          <TwitterContainer feed="nbatopshotbot" />
        </div>
        <div className="w-1/4">
          <h1>TheFirstMint</h1>
          <TwitterContainer feed="statmuse" />
        </div>
      </div>
    </div>
  )
}

export default Redlines
