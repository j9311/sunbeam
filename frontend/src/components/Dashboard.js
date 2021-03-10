import React from "react"
import Menu from "./Menu"
import Chartcard from "./Chartcard"
import Popup from "reactjs-popup"

function Dashboard(props) {
  return (
    <div>
      <Menu />
      <header class="bg-gray-600  shadow-2xl">
        <div class="max-w-7xl mx-auto py-6 px-4 sm:px-6 lg:px-8 flex direction-column">
          {/* <h1 class="text-3xl font-bold text-gray-50">Welcome to Edge!</h1> */}
          <p className=" text-sm text-gray-200">
            Welcome to Edge, your home for NBA Top Shot market analysis. We use
            proprietary technology to give you the edge you need to collect and
            trade Top Shot NFTs.
          </p>
        </div>
      </header>
      <main>
        <Chartcard />
        <Chartcard />
        <Chartcard />
        <Chartcard />
        <Chartcard />
        <Chartcard />
      </main>
    </div>
  )
}

export default Dashboard
