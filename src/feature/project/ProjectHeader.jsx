import { HiArrowCircleRight } from "react-icons/hi"
import useMoveBack from "../../hooks/useMoveBack"

function ProjectHeader({project}) {
    const moveBack = useMoveBack()
  return (
    <div className="flex items-center mb-8 gap-x-4">
<button onClick={moveBack}>
    <HiArrowCircleRight />
</button>
<h1 className="font-black text-secondary-700 text-xl">
    لیست درخواست های  {project.title}
</h1>
    </div>
  )
}

export default ProjectHeader