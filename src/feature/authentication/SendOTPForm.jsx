import { useState } from "react";
import TextField from "../../ui/TextField";
import { useMutation } from "@tanstack/react-query";
import { getOtp } from "../../services/authService";
import toast from "react-hot-toast";

function SendOTPForm() {
  const [phoneNumber, setPhoneNumber] = useState("");

  const {isPending, isSuccess, error, data, mutateAsync} = useMutation({
    mutationFn: getOtp
  })
  
  const sendOtpHandler = async (e) => {
    e.preventDefault()
    try {
      const data = await mutateAsync({phoneNumber})   /// calling mutateAsync() means calling the getOtp() 
      // console.log(data.message)
    } catch (error) {
      toast.error(error?.response?.data?.message)
    }
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
