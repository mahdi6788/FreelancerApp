import { useMutation } from "@tanstack/react-query";
import { useState } from "react";
import toast from "react-hot-toast";
import OTPInput from "react-otp-input";
import { checkOtp } from "../../services/authService";
import { useNavigate } from "react-router-dom";

function CheckOTPForm({phoneNumber}) {
  const navigate = useNavigate()
  const [otp, setOtp] = useState("");

  const { data, isPending, error, mutateAsync} = useMutation({
    mutationFn: checkOtp
  })

  const chckOtpHandler = async (e) => {
    e.preventDefault()
    try {
      const {message,user} = await mutateAsync({phoneNumber, otp})
      toast.success(message)
      
      if(user.isActive){
        /// push to panel based on role
        // if (user.role === "OWNER") navigate("/owner")
        // if (user.role === "FREELANCER") navigate("/freelancer")
      } else {
        navigate("/complete-profile")
      }
    } catch (error) {
      toast.error(error?.response?.data?.message)
    }

  }
  return (
    <div>
      <form className="space-y-10" onSubmit={chckOtpHandler}>
        <p className="font-bold text-secondary-800">کد تایید را وارد کنید </p>
        <OTPInput
          value={otp}
          onChange={setOtp}
          numInputs={6}
          renderSeparator={<span>-</span>}
          renderInput={(props) => <input {...props} />}
          containerStyle="flex flex-row-reverse gap-x-2 justify-center"
          inputStyle={{
            width: "2.5rem",
            padding: "0.5rem, 0.2rem",
            border: "1px solid rgb(var(--color-primary-400))",
            borderRadius: "0.5rem"
          }}
        />
        <button className="btn btn--primary w-full">تایید</button>
      </form>
    </div>
  );
}

export default CheckOTPForm;
