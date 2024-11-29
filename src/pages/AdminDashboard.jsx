import Stats from "../feature/admin/Stats";
import useUsers from "../feature/admin/useUsers";
import useProposals from "../feature/proposals/useProposals";
import useProjects from "../hooks/useProjects";
import DashboardHeader from "../ui/DashboardHeader";
import Loading from "../ui/Loading";

function AdminDashboard() {
  const { proposals, isLoading: isLoading1 } = useProposals();
  const { projects, isLoading: isLoading2 } = useProjects();
  const { users, isLoading: isLoading3 } = useUsers();

  return isLoading1 || isLoading2 || isLoading3 ? (
    <Loading />
  ) : (
    <div>
      <DashboardHeader />
      <Stats
        proposals={proposals.length}
        projects={projects.length}
        users={users.length}
      />
    </div>
  );
}

export default AdminDashboard;
