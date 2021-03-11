import React from "react"
import Menu from "./Menu"
import Chartcard from "./Chartcard"
import Popup from "reactjs-popup"
import { useQuery, gql } from "@apollo/client"

import { CircleLoader } from "react-spinners"
import CodexPreview from "./CodexPreview"

const GET_SET = gql`
  query GetSet($setID: String!) {
    getSet(id: $setID) {
      id
      name
      image
      rarity
      uniqueMoments
      moments {
        id
        image
      }
    }
  }
`

export default function CodexSet(props) {
  const { loading, error, data } = useQuery(GET_SET, {
    variables: { setID: props.match.setID },
  })

  return <div>Hi cool set</div>
}
