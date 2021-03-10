import React, { useRef, useEffect } from "react"

const TwitterContainer = (props) => {
  const disRef = useRef()
  useEffect(() => {
    const script = document.createElement("script")
    script.setAttribute("src", "https://platform.twitter.com/widgets.js")
    if (disRef.current) {
      disRef.current.appendChild(script)
    }
  })

  return (
    <section className="twitterContainer mx-4">
      <div className="twitter-embed  h-screen overflow-auto" ref={disRef}>
        <a
          className="twitter-timeline"
          data-theme="dark"
          data-tweet-limit="100"
          data-chrome="noheader nofooter 5px"
          href={`https://twitter.com/${props.feed}`}
        >
          ...
        </a>
      </div>
    </section>
  )
}

export default TwitterContainer
