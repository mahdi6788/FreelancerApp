import {
    HiCollection,
    HiOutlineViewGrid,
    HiUser,
  } from "react-icons/hi";
  import Stat from "../../ui/Stat";
  import { toPersianNumbers } from "../../utils/toPersianNumbers";
  
  function Stats({ proposals, users, projects }) {
  
    return (
      <div className="grid grid-cols-3 gap-x-8">
        <Stat
          icon={<HiOutlineViewGrid className="w-20 h-20" />}
          title="پروژه ها"
          value={toPersianNumbers(projects)}
          color="primary"
        />
        <Stat
          icon={<HiCollection  className="w-20 h-20" />}
          title="پروپوزال ها"
          value={toPersianNumbers(proposals)}
          color="secondary"
        />
        <Stat
          icon={<HiUser className="w-20 h-20" />}
          title=" کاربران"
          value={toPersianNumbers(users)}
          color="green"
        />
        
      </div>
    );
  }
  
  export default Stats;
  