import { HiArrowCircleRight } from "react-icons/hi"
import useMoveBack from "../hooks/useMoveBack"

function NotFound() {
    const moveBack = useMoveBack()

  return (
    <div className="flex justify-center sm:max-w-sm pt-10">
        <div>
            <h1 className="text-xl font-bold text-secondary-700 mb-8">
                صفحه مورد نظر پیدا نشد!
            </h1>
            <button onClick={moveBack} className="flex items-center gap-x-1" >
            <HiArrowCircleRight className="w-5 h-5 text-primary-900"/> 
            <span>برگشت</span>
            </button>
        </div>
    </div>
  )
}


export default NotFound