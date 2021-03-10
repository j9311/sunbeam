import React from "react"
import MomentChart from "./MomentChart"
// import rawListings from "./listings.json"
import Menu from "./Menu"
import SpecTable from "./SpecTable"
import Popup from "reactjs-popup"

function MomentSpec(props) {
  return (
    <div>
      <Menu />
      <div className="flex direction-row">
        <h1>PLAYER NAME</h1>
      </div>
      <div>
        <button className="group relative w-5em ml-4 flex justify-center py-2 px-4 border border-transparent text-sm font-medium rounded-md text-white bg-gray-700 hover:bg-gray-500">
          Favorite
        </button>
      </div>
      <div className="m-4">
        <h4>PLAY TYPE</h4>

        <h4>SET</h4>
      </div>
      <h5>#ofLISTINGS</h5>
      <div>
        <Popup
          trigger={
            <button className="group relative ml-20 w-3em flex justify-center py-2 px-4 border border-transparent text-xs font-sm rounded-md text-white bg-gray-700 hover:bg-gray-500 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500">
              What Am I Looking At?
            </button>
          }
          position="right center"
        >
          <div className="bg-gray-300 max-w-7xl mx-auto py-6 sm:px-6 lg:px-8 shadow-2xl">
            Lit ass shit or something, idk
          </div>
        </Popup>
      </div>
      <div className="">
        <MomentChart />
      </div>
      <div className="">
        <img src="asdfg" alt="this is a placeholder"></img>
        <h5>description</h5>
      </div>
      <br />
      <hr></hr>
      <div>
        <SpecTable />
      </div>
    </div>
  )
}

export default MomentSpec
