function RadioInput({name, id, value, label, onChange, checked}) {
  return (
    <div className="flex justify-center gap-x-2">
      <input
        className="cursor-pointer w-4 accent-green-500"
        type="radio"
        name={name}
        id={id}
        value={value}
        onChange={onChange}
        checked={checked}
      />
      <label htmlFor={id} > {label} </label>
    </div>
  );
}

export default RadioInput;
