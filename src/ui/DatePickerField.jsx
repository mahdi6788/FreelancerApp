import DatePicker from "react-multi-date-picker";
import persian from "react-date-object/calendars/persian";
import persian_fa from "react-date-object/locales/persian_fa";

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
        calendar={persian}    // should import persian, otherwise shows error that persian isnot defined.
        locale={persian_fa}   // should import persian_fa, otherwise shows error that persian_fa isnot defined.
        calendarPosition="bottom-center"
      />
    </div>
  );
}

export default DatePickerField;
