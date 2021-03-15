import React from "react"

import Menu from "./Menu"
import TwitterContainer from "./TwitterContainer"

function Header({ children }) {
  return <h1 className="font-display text-4xl my-4">{children}</h1>
}

function Redlines(props) {
  return (
    <div>
      <header class="bg-gray-800 font-display1">
        <div class="max-w-7xl mx-auto py-6 px-4 sm:px-6 lg:px-8">
          <h1 class="text-3xl  text-gray-50">Popular Twitter Feeds</h1>
          <p className="text-gray-200 text-xs">
            Customizable feeds coming soon!
          </p>
        </div>
      </header>
      <div className="flex flex-row bg-black text-gray-50 text-center">
        <div className="w-1/4">
          <Header>NBA Top Shot Official</Header>
          <TwitterContainer feed="nbatopshot" />
        </div>
        <div className="w-1/4">
          <Header>TheFirstMint</Header>
          <TwitterContainer feed="TheFirstMint" />
        </div>
        <div className="w-1/4">
          <Header>NBA Top Shot BOT</Header>
          <TwitterContainer feed="nbatopshotbot" />
        </div>
        <div className="w-1/4">
          <Header>TheFirstMint</Header>
          <TwitterContainer feed="statmuse" />
        </div>
      </div>
    </div>
  )
}

export default Redlines
