import DatePicker from "react-multi-date-picker";

function DatePickerField({ label, date, setDate }) {
  return (
    <div>
      <span className="mb-2 block text-secondary-700">{label}</span>
      <DatePicker
        containerClassName="w-full"
        inputClass="textField__input"
        value={date}
        onChange={(date) => setDate(date)}
        format="YYYY/MM/DD"
        calendar="persian"    // must be an object
        locale="persian_fa"   //error must be an object
        calendarPosition="bottom-center"
      />
    </div>
  );
}

export default DatePickerField;
