import React from "react"
import MomentChart from "./MomentChart"
import { BsQuestionCircle } from "react-icons/bs"
import Popup from "reactjs-popup"

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
                <li>
                  {" "}
                  <Popup
                    trigger={
                      <button class="group relative ml-20 w-3em flex justify-center py-2 px-4 border border-transparent text-xs font-sm rounded-md text-white bg-gray-700 hover:bg-gray-500 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500">
                        What Am I Looking At?
                      </button>
                    }
                    position="right center"
                  >
                    <div class="bg-gray-300 max-w-7xl mx-auto py-6 sm:px-6 lg:px-8 shadow-2xl">
                      Lit ass shit or something, idk
                    </div>
                  </Popup>
                </li>
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
