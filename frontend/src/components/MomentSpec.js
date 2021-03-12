import React, { useState } from "react"
import MomentChart from "./MomentChart"
// import rawListings from "./listings.json"
import SpecTable from "./SpecTable"
import Popup from "reactjs-popup"
import Spinner from "./Spinner"
import { useQuery, gql } from "@apollo/client"
import MomentPreview from "./MomentPreview"
import { AddFavorite, IsFavorite } from "../Contexts"

const GET_MOMENT = gql`
  query GetMoment($setID: String!, $playID: String!) {
    getMoment(setID: $setID, playID: $playID) {
      playID
      setID
      image
      set {
        id
        name
        image
        rarity
        uniqueMoments
      }
      name
      jerseyNumber
      team
      playCategory
      playType
      date
      listings {
        time
        prices {
          price
          serial
        }
        volumeCirculation
        volumeListed
        high
        low
        open
        close
      }
      transactions {
        transactionID
        playID
        setID
        price
        date
        serial
      }
    }
  }
`

function MomentSpec(props) {
  console.log("props", props)
  const { loading, error, data } = useQuery(GET_MOMENT, {
    variables: {
      setID: props.match.params.setID,
      playID: props.match.params.playID,
    },
  })

  const {
    playID,
    setID,
    image,
    name,
    jerseyNumber,
    team,
    date,
    playType,
    playCategory,
    listings,
    transactions,
  } = data?.getMoment || {}

  const [isFavorite, setIsFavorite] = useState(
    IsFavorite(props.match.params.setID, props.match.params.playID)
  )

  function favorite() {
    AddFavorite(setID, playID)
    setIsFavorite(
      IsFavorite(props.match.params.setID, props.match.params.playID)
    )
  }

  return loading ? (
    <Spinner />
  ) : (
    <div className="container mx-auto mt-12">
      <div className="w-full flex justify-center">
        <div className="flex justify-center items-center flex-col w-full">
          <MomentPreview {...data?.getMoment} />
          <div className="flex justify-between w-full mb-6">
            <Popup
              trigger={
                <button className="group relative w-3em flex justify-center py-2 px-4 border border-transparent text-xs font-sm rounded-md text-white bg-gray-700 hover:bg-gray-500 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500">
                  What Am I Looking At?
                </button>
              }
              position="right center"
            >
              <div className="bg-gray-700 max-w-7xl mx-auto py-6 sm:px-6 lg:px-8 shadow-2xl">
                In-depth card baller tutorial coming soon
              </div>
            </Popup>

            <div className="inline-flex">
              <a
                href={`https://www.nbatopshot.com/listings/p2p/${setID}+${playID}`}
                target="_blank"
                rel="noreferrer"
                className=" mr-4 group relative w-5em ml-4 flex justify-center py-2 px-4 border border-transparent text-sm font-medium rounded-md text-white bg-blue-700 hover:bg-blue-500"
              >
                View Listings
              </a>

              <button
                onClick={favorite}
                className="group relative w-5em ml-4 flex justify-center py-2 px-4 border border-transparent text-sm font-medium rounded-md text-white bg-gray-700 hover:bg-gray-500"
              >
                {isFavorite ? "Unfavorite" : "Favorite"}
              </button>
            </div>
          </div>
        </div>
      </div>

      <div className="bg-white">
        <div>
          <MomentChart listings={listings} transactions={transactions} />
        </div>
      </div>
    </div>
  )
}

export default MomentSpec
