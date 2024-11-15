function RHFSelect({ label, register, name, options, required }) {
  return (
    <div>
      <label htmlFor="name" className="mb-2 block text-secondary-700">
        {label}  {required && <span className="text-error">*</span>}
      </label>
      <select {...register(name)} id={name} className="textField_input">
        {options.map((option) => (
          <option key={option.value} value={option.value}>
            {option.label}
          </option>
        ))}
      </select>
    </div>
  );
}

export default RHFSelect;
