import React from "react"
import Menu from "./Menu"
import Chartcard from "./Chartcard"

function Dashboard(props) {
  return (
    <div>
      <Menu />
      <header class="bg-gray-600  shadow-2xl">
        <div class="max-w-7xl mx-auto py-6 px-4 sm:px-6 lg:px-8">
          <h1 class="text-3xl font-bold text-gray-50">Dashboard</h1>
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
