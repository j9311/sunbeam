import React from "react"

function Favoritecard(props) {
  return (
    <div class="flex flex-col">
      <div class="-my-2 overflow-x-auto sm:mx-6 lg:-mx-8">
        <div class="py-2 align-middle inline-block min-w-full sm:px-6 lg:px-8">
          <div class="shadow overflow-hidden border-b border-gray-200 sm:rounded-lg">
            <table class="min-w-full divide-y divide-gray-200">
              <tbody class="bg-white divide-y divide-gray-200">
                <tr>
                  <td class="px-6 py-4 whitespace-nowrap">
                    <div class="flex items-center">
                      <div class="flex-shrink-0 h-10 w-10">
                        <img
                          class="h-15 w-15 rounded-full"
                          src="https://assets.nbatopshot.com/resize/editions/1_base_set_common/40ebbf73-582a-4e8c-bf6e-627aee3d6f83/play_40ebbf73-582a-4e8c-bf6e-627aee3d6f83_1_base_set_common_capture_Hero_2880_2880_Black.jpg?width=780&quality=80"
                          alt=""
                        />
                      </div>
                      <div class="ml-4">
                        <div class="text-sm font-medium text-gray-900">
                          {props.name}
                        </div>
                        <div class="text-sm text-gray-500">
                          {props.playType}Dunk; Nov. 10, 2019
                        </div>
                      </div>
                    </div>
                  </td>
                  <td class="px-6 py-4 whitespace-nowrap">
                    <div class="text-sm text-gray-900">
                      {props.set}Base Set (Series 1)
                    </div>
                    <div class="text-sm text-gray-500">
                      {props.set} Size: 3999
                    </div>
                  </td>
                  <td class="px-6 py-4 whitespace-nowrap">
                    <span class="px-2 inline-flex text-xs leading-5 font-semibold rounded-full bg-yellow-700 text-gray-50">
                      Common
                    </span>
                  </td>
                  <td class="px-6 py-4 whitespace-nowrap text-sm text-gray-500">
                    Admin
                  </td>
                  <td class="flex flex-row m-3 whitespace-nowrap text-right text-sm font-medium">
                    <button
                      type="submit"
                      class="group relative w-5em flex justify-center py-2 px-4 border border-transparent text-sm font-medium rounded-md text-white bg-green-700 hover:bg-green-500 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500"
                    >
                      <span class="absolute left-0 inset-y-0 flex items-center pl-3"></span>
                      Go To
                    </button>
                    <button
                      type="submit"
                      class="group relative w-5em flex justify-center py-2 px-4 border border-transparent text-sm font-medium rounded-md text-white bg-green-700 hover:bg-green-500 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500"
                    >
                      <span class="absolute left-0 inset-y-0 flex items-center pl-3"></span>
                      Remove
                    </button>
                  </td>
                </tr>
              </tbody>
            </table>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Favoritecard
