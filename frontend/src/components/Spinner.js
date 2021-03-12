import { CircleLoader } from "react-spinners"

export default function Spinner() {
  return (
    <div className="fixed top-0 bottom-0 left-0 right-0 flex justify-center items-center">
      <CircleLoader color="#ffffff" size={250} />
    </div>
  )
}
