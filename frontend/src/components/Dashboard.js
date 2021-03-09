import React from "react"
import Menu from "./Menu"
import Chartcard from "./Chartcard"

function Dashboard(props) {
  return (
    <div>
      <Menu />
      <header class="bg-gray-600  shadow-2xl">
        <div class="max-w-7xl mx-auto py-6 px-4 sm:px-6 lg:px-8 flex direction-row">
          <h1 class="text-3xl font-bold text-gray-50">Dashboard</h1>
          <button class="group relative w-5em ml-4 flex justify-center py-2 px-4 border border-transparent text-sm font-medium rounded-md text-white bg-gray-700 hover:bg-gray-500">
            What am I looking at?
          </button>
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
