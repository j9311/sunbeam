import React from "react"
import Menu from "./Menu"
import Chartcard from "./Chartcard"
import Popup from "reactjs-popup"
import { CircleLoader } from "react-spinners"
import { useQuery, gql } from "@apollo/client"

const GET_SETS = gql`
  query GetSets {
    getAllSets {
      id
      name
      image
      rarity
      uniqueMoments
    }
  }
`

function Moment({ id, name, image, rarity, uniqueMoments }) {
  return (
    <div className="w-full md:w-1/3 lg:w-1/4 p-4 grid grid-cols-1 grid-rows-1 bg-black bg-opacity-30 hover:bg-opacity-0">
      <img src={image} alt={name} className="row-start-1 col-start-1" />
      <div className="row-start-1 col-start-1 z-10 flex flex-col justify-center">
        <div className="bg-black bg-opacity-90 text-center py-2">
          <p className="font-serial text-2xl">{name}</p>
          <p>{uniqueMoments} moments</p>
        </div>
      </div>
    </div>
  )
}

function Dashboard(props) {
  const { loading, error, data } = useQuery(GET_SETS, {
    variables: { language: "english" },
  })

  return (
    <div>
      <Menu />
      <header class="bg-gray-600  shadow-2xl">
        <div class="max-w-7xl mx-auto py-6 px-4 sm:px-6 lg:px-8 flex flex-col">
          {/* <h1 class="text-3xl font-bold text-gray-50">Welcome to Edge!</h1> */}
          <p className=" text-xl text-gray-200">
            Welcome to NFToast - TS, your home for NBA Top Shot market analysis.
          </p>
          <p className=" text-xs text-gray-200">
            Utilize proprietary technology to give you the edge you need to
            collect and trade Top Shot NFTs. Click on a set to start browsing
            moments, or head over to the search tab for specific moments.
          </p>
        </div>
      </header>

      <main className="flex justify-center items-center text-white">
        {loading ? (
          <CircleLoader size={100} />
        ) : error ? (
          <div>
            <h1>Error fetching sets</h1>
            <pre>{error.message}</pre>
          </div>
        ) : (
          <div className="container flex flex-wrap justify-evenly mt-8">
            {data.getAllSets.map(Moment)}
          </div>
        )}
      </main>
    </div>
  )
}

export default Dashboard
