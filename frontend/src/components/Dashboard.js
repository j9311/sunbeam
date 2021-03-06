import React from "react"
import Menu from "./Menu"
import Chartcard from "./Chartcard"
import Popup from "reactjs-popup"
import { useQuery, gql } from "@apollo/client"

import { CircleLoader } from "react-spinners"
import { useBarcode } from "react-barcodes"

import CodexPreview from "./CodexPreview"
import Spinner from "./Spinner"

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

function Dashboard(props) {
  const { loading, error, data } = useQuery(GET_SETS, {
    variables: { language: "english" },
  })

  return (
    <div>
      <header class="bg-gray-800  shadow-2xl font-display1">
        <div class=" max-w-7xl mx-auto py-6 px-4 sm:px-6 lg:px-8 flex flex-col">
          {/* <h1 class="text-3xl font-bold text-gray-50">Welcome to Edge!</h1> */}
          <p className=" text-3xl text-gray-200">Welcome to NFToast - TS</p>
          <p className=" text-xs text-gray-200">
            Utilize proprietary technology to give you the edge you need to
            collect and trade NBA Top Shot NFTs. Click on a set below to start
            browsing moments, or head over to the search tab for specific
            moments.
          </p>
        </div>
      </header>

      <main className="flex flex-col justify-center items-center text-white mt-8">
        <h1 className="font-display3 text-9xl uppercase select-none">Sets</h1>
        {loading ? (
          <Spinner />
        ) : error ? (
          <div>
            <h1>Error fetching sets</h1>
            <pre>{error.message}</pre>
          </div>
        ) : (
          <div className="container mx-auto flex flex-wrap justify-evenly">
            {data.getAllSets.map((set) => (
              <CodexPreview key={set.id} {...set} />
            ))}
          </div>
        )}
      </main>
    </div>
  )
}

export default Dashboard
