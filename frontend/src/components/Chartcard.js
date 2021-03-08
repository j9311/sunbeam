import React from "react"
import MomentChart from "./MomentChart"

function Chartcard(props) {
  return (
    <div>
      <div class="bg-gray-100 max-w-7xl mx-auto py-6 sm:px-6 lg:px-8 shadow-inner-2xl">
        <div class="px-4 py-6 sm:px-0">
          <div class="flex direction-row rounded-lg h-96 border-2 border-gray-400 shadow-2xl ">
            <div class="bg-gray-500 shadow-inner-2xl text-gray-50">
              <p>Player/Moment Flavor</p>
              <ul class=" text-gray-50">
                {/* need typedefs and backend resolvers */}
                <li>moment.image(TS moment card)</li>
                <li>moment.id</li>
                <li>moment.serializationRange</li>
                <li>moment.momentLowList</li>
                <li>moment.DPS</li>
                <li>moment.momentLastSell</li>
              </ul>
            </div>
            <MomentChart />
          </div>
        </div>
      </div>
    </div>
  )
}

export default Chartcard
