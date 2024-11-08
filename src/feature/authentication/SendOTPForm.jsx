import { useState } from "react";

function SendOTPForm() {
  const [phoneNumber, setPhoneNumber] = useState("")
  return (
    <div>
      <form className="space-y-8">
        <div>
          <label className="mb-1" htmlFor="phonenumber">
            شماره موبایل
          </label>
          <input
          onChange={(e) => setPhoneNumber(e.target.value)}
          value={phoneNumber}
            id="phonenumber"
            type="text"
            className="textField__input"
          />
        </div>
        <button className="btn btn--primary w-full">
          ارسال کد تایید
          </button>
      </form>
    </div>
  );
}

export default SendOTPForm;
