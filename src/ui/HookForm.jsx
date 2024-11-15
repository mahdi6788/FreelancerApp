function HookForm({
  label,
  name,
  register,
  type,
  required,
  validatioSchema,
  errors,
}) {

  return (
    <div>
      <label className="mb-2 block text-secondary-700" htmlFor={name}>
        {label} {required && <span className="text-error">*</span>}
      </label>
      <input
        {...register(name, validatioSchema)}
        type={type}
        id={name}
        autoComplete="off"
        className="textField__input"
      />
      {errors && errors[name] && (
        <span className="text-error block text-sm mt-2">
          {errors[name]?.message}
        </span>
      )}
    </div>
  );
}

export default HookForm;
