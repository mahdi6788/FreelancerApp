import { Field, Switch } from "@headlessui/react";

function Toggle({ enabled, onChange, label }) {
  return (
    <Field>
      {label}
      <Switch
        checked={enabled}
        onChange={onChange}
        className={`relative inline-flex h-6 w-11 items-center rounded-full  transition ${
          enabled ? "bg-primary-900" : "bg-secondary-200"
        }`}
      >
        <span
          className={` inline-block size-4 rounded-full bg-secondary-0 transform h-4 w-4
            ${enabled ? "-translate-x-6" : "-translate-x-1"}`}
        />
      </Switch>
    </Field>
  );
}

export default Toggle;
