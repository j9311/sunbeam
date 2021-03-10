import React, { useEffect } from "react"

const TwitterContainerTS = () => {
  useEffect(() => {
    const anchor = document.createElement("a")
    anchor.setAttribute("class", "twitter-timeline")
    anchor.setAttribute("data-theme", "dark")
    anchor.setAttribute("data-tweet-limit", "100")
    anchor.setAttribute("data-chrome", "noheader nofooter 5px")
    anchor.setAttribute("href", "https://twitter.com/TheFirstMint")
    document.getElementsByClassName("twitter-embed")[0].appendChild(anchor)

    const script = document.createElement("script")
    script.setAttribute("src", "https://platform.twitter.com/widgets.js")
    document.getElementsByClassName("twitter-embed")[0].appendChild(script)
  }, [])

  return (
    <section className="twitterContainer grid-cols-3">
      <div className="twitter-embed w-10 mx-4"></div>
    </section>
  )
}

export default TwitterContainerTS
