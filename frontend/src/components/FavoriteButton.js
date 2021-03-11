import React from "react"

export const favorite = () => {
  var favList = []
  const getFavs = JSON.parse(localStorage.getItem("id") || "0")
  for (let i = 0; i < getFavs.length; i++) {
    let x = getFavs[i]
    favList[i] = JSON.parse(localStorage.getItem("favItem" + [x]) || "")
  }
  const favMoments = Object.keys(favList[0])
  console.log(favMoments)
}
