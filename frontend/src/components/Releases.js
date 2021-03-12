import React from "react"

import Menu from "./Menu"

function Releases(props) {
  return (
    <div>
      <header class="bg-gray-800 font-display1">
        <div class="max-w-7xl mx-auto py-6 px-4 sm:px-6 lg:px-8">
          <h1 class="text-3xl text-gray-50">Newest Pack Releases</h1>
          <p className=" text-xs text-gray-200">
            Select a pack below to be directed to NBA Top Shots
          </p>
        </div>
      </header>
      <main className="container mx-auto">
        <div className="flex direction-row justify-center p-2 m-4">
          <a
            target="_blank"
            rel="noreferrer noopener"
            href="https://www.nbatopshot.com/listings/pack/8ad923b8-38ca-4e9d-9622-34327d6b25b3"
          >
            <img
              src="/seeingstars.png"
              alt="SeeingStars"
              className="rounded-xl px-2 top-0 bottom-0 w-full z-10 flex flex-col justify-center bg-black bg-opacity-40"
            />
          </a>
          <a
            target="_blank"
            rel="noreferrer noopener"
            href="https://www.nbatopshot.com/listings/pack/75f17ded-56e8-4481-bc44-0985ff971252"
          >
            <img
              src="/risingstar.png"
              alt="RisingStars"
              className="rounded-xl px-2 top-0 bottom-0 w-full z-10 flex flex-col justify-center bg-black bg-opacity-40"
            />
          </a>
        </div>
        <div className="text-center">
          <p>
            Check back in for release updates on packs, new sets and moments.
          </p>
        </div>
      </main>
    </div>
  )
}

export default Releases
