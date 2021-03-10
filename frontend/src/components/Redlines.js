import React from "react"

import Menu from "./Menu"
import TwitterContainerTS from "./TwitterContainerTS"
import TwitterContainerSM from "./TwitterContainerSM"
import TwitterContainerTSB from "./TwitterContainerTSB"
import TwitterContainerTFM from "./TwitterContainerTFM"

function Redlines(props) {
  return (
    <div>
      <Menu />
      <div className="">
        <table>
          <thead>
            <tr>
              <th>NBA Top Shot Official</th>
              <th>StatMuse</th>
              <th>NBA Top Shot BOT</th>
              <th>TheFirstMint</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td>
                <TwitterContainerTS />
              </td>
              <td>
                <TwitterContainerSM />
              </td>
              <td>
                <TwitterContainerTSB />
              </td>
              <td>
                <TwitterContainerTFM />
              </td>
            </tr>
          </tbody>
        </table>
      </div>
    </div>
  )
}

export default Redlines
