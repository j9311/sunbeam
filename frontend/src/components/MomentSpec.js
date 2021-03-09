import React from "react"
import MomentChart from "./MomentChart"
// import rawListings from "./listings.json"
import Menu from "./Menu"
import SpecTable from "./SpecTable"

function MomentSpec(props) {
  return (
    <div>
      <Menu />
      <div class="flex direction-row">
        <h1>PLAYER NAME</h1>
      </div>
      <div>
        <button class="group relative w-5em ml-4 flex justify-center py-2 px-4 border border-transparent text-sm font-medium rounded-md text-white bg-gray-700 hover:bg-gray-500">
          Favorite
        </button>
      </div>
      <div>
        <h4>PLAY TYPE</h4>
        <h4>SET</h4>
      </div>
      <h5>#ofLISTINGS</h5>
      <div class="">
        <MomentChart />
      </div>
      <div class="">
        <img src="asdfg" alt="this is a placeholder for an image"></img>
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
