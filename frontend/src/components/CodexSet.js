import React from "react"
import { useQuery, gql } from "@apollo/client"

import "./CodexSet.css"
import MomentPreview from "./MomentPreview"

import { CircleLoader } from "react-spinners"

const GET_SET = gql`
  query GetSet($setID: String!) {
    getSet(id: $setID) {
      id
      name
      image
      rarity
      uniqueMoments
      moments {
        playID
        setID
        image

        name
        jerseyNumber
        team
        playCategory
        playType
        date
      }
    }
  }
`

export default function CodexSet(props) {
  console.log("props", props)
  const { loading, error, data } = useQuery(GET_SET, {
    variables: { setID: props.match.params.setID },
  })

  console.log("Data", data?.getSet)

  return (
    <div
      className="codex-set bg relative"
      style={{
        "--backgroundImage": `url(${data?.getSet.image})`,
      }}
    >
      <div className="bg2">
        <div className="pt-8">
          {loading ? (
            <CircleLoader size={100} />
          ) : error ? (
            <div>
              <h1>Error fetching sets</h1>
              <pre>{error.message}</pre>
            </div>
          ) : (
            <div className="container mx-auto">
              <div className="text-center select-none">
                <h4 className="text-2xl font-display3">Viewing Set</h4>
                <h1 className="text-9xl font-display3">
                  "{data?.getSet.name}"
                </h1>
                <p className="font-display2">
                  Click on a Player's card for Moment details.
                </p>
              </div>

              <div className="flex flex-row flex-wrap">
                {data?.getSet.moments.map((moment) => (
                  <MomentPreview key={moment.id} {...moment} />
                ))}
              </div>
            </div>
          )}
        </div>
      </div>
    </div>
  )
}
