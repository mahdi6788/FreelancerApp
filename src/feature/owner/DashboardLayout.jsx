import DashboardHeader from "../../ui/DashboardHeader";
import Loading from "../../ui/Loading";
import useOwnerProjects from "../projects/useOwnerProjects";
import Stats from "./Stats";

function DashboardLayout() {
  const { projects, isLoading } = useOwnerProjects();

  return isLoading ? (
    <Loading />
  ) : (
    <div>
      <DashboardHeader />
      <Stats projects={projects}/>
    </div>
  );
}

export default DashboardLayout;
