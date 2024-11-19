import ProjectHeader from "../feature/project/ProjectHeader"
import ProposalsTable from "../feature/project/ProposalsTable"
import useProject from "../feature/project/useProject"
import Loading from "../ui/Loading"

function Project() {  
  const {project, isLoading} = useProject()
  if(isLoading) return <Loading />
  return (
    <div>
      <ProjectHeader project={project}/>
      <ProposalsTable proposals={project.proposals} />
    </div>
  )
}

export default Project