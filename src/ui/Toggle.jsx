import { Field, Switch } from "@headlessui/react";

function Toggle({enabled, onChange, label}) {
  return (
    <Field>
      {label}
      <Switch
        checked={enabled}
        onChange={onChange}
        className={`group inline-flex h-6 w-11 items-center rounded-full bg-secondary-500 transition ${enabled && "bg-primary-900"}`}
      >
        <span className={`size-4 -translate-x-1 rounded-full bg-secondary-0 transition ${enabled && "-translate-x-6"}`} />
      </Switch>
    </Field>
  );
}

export default Toggle;
