import Loading from "../../ui/Loading";
import usetoggleProjectStatus from "./usetoggleProjectStatus";
import Toggle from "../../ui/Toggle";
import { Label } from "@headlessui/react";

function ToggleProjectStatus({ project }) {
  const { isUpdating, toggleProjectStatus } = usetoggleProjectStatus();

  const toggleHandler = () => {
    /// when toggling, status changes so should send this change to backend
    /// so we need a custome hook (usetoggleProjectStatus) to the http method as a function
    /// this method needs id and data that is status here to send to backend.
    const status = project.status === "OPEN" ? "CLOSE" : "OPEN";

    toggleProjectStatus(
      {
        id: project._id,
        data: { status },
      }
    );
  };

  return (
    /// to have fix width, set w-[5rem]
    <div className="w-[5rem]"> 
      {isUpdating ? (
        <Loading height={20} width={50} />
      ) : (
        <Toggle
          enabled={project.status === "OPEN" ? true : false}
          label={<Label>{project.status === "OPEN" ? "باز" : "بسته"}</Label>}
          onChange={toggleHandler}
        />
      )}
    </div>
  );
}

export default ToggleProjectStatus;

/// -translate: rtl
