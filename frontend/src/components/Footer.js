import React from "react"

function Footer() {
  return (
    <div className="flex flex-row justify-between mx-5 p-6">
      <div className="text-gray-50">
        <span>NFToast &copy; 2021</span>
      </div>
      <div>
        <a href="/termsofservice">
          <span>ToS | Privacy Policy | Disclaimer</span>
        </a>
      </div>
    </div>
  )
}

export default Footer
