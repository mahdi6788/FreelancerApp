import { HiCollection, HiCurrencyDollar, HiOutlineViewGrid } from "react-icons/hi";
import Stat from "./Stat";

function Stats({ projects }) {
  const numOfProjects = projects.length;
  const numOfAcceptedProjects = projects.map(
    (project) => project.status === 2
  ).length;
  const numOfProposals = projects.reduce(
    (acc, cur) => cur.proposals.length + acc,
    0
  );
  return (
    <div className="grid grid-cols-3 gap-x-8">
      <Stat
        icon={<HiOutlineViewGrid className="w-20 h-20" />}
        title="پروژه ها"
        value={numOfProjects}
        color="primary"
      />
      <Stat
        icon={<HiCurrencyDollar className="w-20 h-20" />}
        title="پروژه های واگذار شده"
        value={numOfAcceptedProjects}
        color="green"
      />
      <Stat
        icon={<HiCollection className="w-20 h-20" />}
        title=" درخواست ها"
        value={numOfProposals}
        color="blue"
      />
      <div className="col-span-1"></div>
      <div className="col-span-1"></div>
    </div>
  );
}

export default Stats;
