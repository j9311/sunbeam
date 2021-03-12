import React, { createContext, useState } from "react"
export const USER = createContext()

export function UserProvider({ children }) {
  let localUser
  try {
    localUser = JSON.parse(localStorage.user || "null")
  } catch (e) {
    localStorage.removeItem("user")
  }

  const [user, setUserState] = useState(localUser)

  const setUser = (newUser) => {
    localStorage.setItem("user", JSON.stringify(newUser))
    setUserState(newUser)
  }
  return <USER.Provider value={{ user, setUser }}>{children}</USER.Provider>
}

export const API_BASE =
  process.env.NODE_ENV === "production"
    ? "https://nftoast.xyz"
    : "http://localhost:5000"

export function AddFavorite(setID, playID) {
  const favs = JSON.parse(localStorage.favorites || "{}") || {}
  const id = CombinePlay(setID, playID)
  favs[id] = !favs[id]
  localStorage.favorites = JSON.stringify(favs)
}

export function GetFavorites() {
  const favs = JSON.parse(localStorage.favorites || "{}") || {}
  return favs
}

export function CombinePlay(setID, playID) {
  return `${setID}+${playID}`
}

export function IsFavorite(setID, playID) {
  return !!GetFavorites()[CombinePlay(setID, playID)]
}
