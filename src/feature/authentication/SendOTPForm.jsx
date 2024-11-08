import { useState } from "react";
import TextField from "../../ui/TextField";

function SendOTPForm() {
  const [phoneNumber, setPhoneNumber] = useState("");
  
  const sendOtpHandler = e => {
    e.preventDefault()
  }

  return (
    <div>
      <form className="space-y-8" onSubmit={sendOtpHandler}>
        <TextField
          label={" شماره موبایل"}
          name={"phonenumber"}
          onChange={(e) => setPhoneNumber(e.target.value)}
          value={phoneNumber}
        />
        <button type="submit" className="btn btn--primary w-full">ارسال کد تایید</button>
      </form>
    </div>
  );
}

export default SendOTPForm;
