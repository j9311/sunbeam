import React from "react"

import MomentChart from "./MomentChart"
import Menu from "./Menu"

function Dashboard(props) {
  return (
    <div>
      <Menu />
      <header class="bg-green-600">
        <div class="max-w-7xl mx-auto py-6 px-4 sm:px-6 lg:px-8">
          <h1 class="text-3xl font-bold text-gray-50">Dashboard</h1>
        </div>
      </header>
      <main>
        <div class="bg-gray-300 max-w-7xl mx-auto py-6 sm:px-6 lg:px-8">
          <div class="px-4 py-6 sm:px-0">
            <div class="flex direction-row rounded-lg h-96">
              <div class="bg-gray-200">
                <p>Player/Moment Flavor</p>
              </div>
              <MomentChart />
            </div>
            <br />
            <div class="border-4 border-dashed border-gray-800 rounded-lg h-96"></div>
            <br />
            <div class="border-4 border-dashed border-gray-800 rounded-lg h-96"></div>
          </div>
        </div>
      </main>
    </div>
  )
}

export default Dashboard
