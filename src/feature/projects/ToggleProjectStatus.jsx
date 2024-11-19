import { useState } from "react";
import Loading from "../../ui/Loading";
import usetoggleProjectStatus from "./usetoggleProjectStatus";
import Toggle from "../../ui/Toggle";
import { Label } from "@headlessui/react";

function ToggleProjectStatus({ project }) {
  
  const { isUpdating, toggleProjectStatus } = usetoggleProjectStatus();
  const toggleHandler = () => {
    const status = project.status === "OPEN" ? "CLOSE" : "OPEN";

    toggleProjectStatus(
      {
        id: project._id,
        data: { status },
      },
    );
  };

  return (
    <div className="w=[5rem]">
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
