import {
  HiCollection,
  HiCurrencyDollar,
  HiOutlineViewGrid,
} from "react-icons/hi";
import Stat from "../../ui/Stat";
import { toPersianNumbers, toPersianNumbersWithComma } from "../../utils/toPersianNumbers";

function Stats({ proposals }) {
  const numOfproposals = proposals.length;
  const acceptedProposals = proposals.filter((proposal) => proposal.status === 2);
  const numOfAcceptedProposals = acceptedProposals.length;
  const balance = acceptedProposals.reduce((acc, curr) => acc + curr.price, 0);

  return (
    <div className="grid grid-cols-3 gap-x-8">
      <Stat
        icon={<HiOutlineViewGrid className="w-20 h-20" />}
        title="پروپوزال ها"
        value={toPersianNumbers(numOfproposals)}
        color="primary"
      />
      <Stat
        icon={<HiCollection className="w-20 h-20" />}
        title="پروپوزال های پذیرفته شده"
        value={toPersianNumbers(numOfAcceptedProposals)}
        color="green"
      />
      <Stat
        icon={<HiCurrencyDollar className="w-20 h-20" />}
        title=" بالانس  "
        value={toPersianNumbersWithComma(balance)}
        color="blue"
      />
    </div>
  );
}

export default Stats;
