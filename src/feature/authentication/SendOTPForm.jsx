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
            className="w-full py-3 px-4 rounded-xl text-secondary-900 
            border border-gray-300 
            hover:border-primary-300 
            focus:border-primary-500 
            focus:bg-white focus:shadow-lg 
            focus:shadow-primary-200
            transition-all duration-300 ease-out"
          />
        </div>
        <button className="w-full py-2 px-4 font-bold bg-primary-900 text-white 
        rounded-xl transition-all duration-300 hover:bg-primary-800 shadow-lg shadow-primary-300">
          ارسال کد تایید
          </button>
      </form>
    </div>
  );
}

export default SendOTPForm;
