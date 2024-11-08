function TextField({ label, value, name, onChange }) {
  return (
    <div>
      <label className="mb-2 block" htmlFor={name}>
        {label}
      </label>
      <input
        onChange={onChange}
        value={value}
        id={name}
        name={name}
        autoComplete="off"
        type="text"
        className="textField__input"
      />
    </div>
  );
}

export default TextField;
