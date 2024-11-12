import { useMutation } from "@tanstack/react-query";
import { useEffect, useState } from "react";
import toast from "react-hot-toast";
import OTPInput from "react-otp-input";
import { checkOtp } from "../../services/authService";
import { useNavigate } from "react-router-dom";
import { HiArrowCircleRight } from "react-icons/hi";
import {CiEdit} from "react-icons/ci"
import Loading from "../../ui/Loading";

function CheckOTPForm({ phoneNumber, setStep, onResendOtp, otpResponse }) {
  const RESEND_TIME = 10;
  const navigate = useNavigate();
  const [otp, setOtp] = useState("");
  const [time, setTime] = useState(RESEND_TIME);

  const { isPending, mutateAsync } = useMutation({
    mutationFn: checkOtp,
  });

  const chckOtpHandler = async (e) => {
    e.preventDefault();
    try {
      const { message, user } = await mutateAsync({ phoneNumber, otp });
      toast.success(message);

      if (!user.isActive) return navigate("/complete-profile")
      if (user.status !== 2) {
        navigate("/")
        toast("پروفایل شما در انتظار تایید است.")
        return
      }
      if (user.role === "OWNER") return navigate("/owner")
      if (user.role === "FREELANCER") return navigate("/freelancer")
    } catch (error) {
      toast.error(error?.response?.data?.message);
    }
  };

  useEffect(() => {
    const timer =
      time > 0 &&
      setInterval(() => {
        setTime(time - 1);
      }, 1000);
    return () => {
      clearInterval(timer);
    };
  }, [time]);
  return (
    <div className="mb-4">
      <button onClick={() => setStep(1)}>
        <HiArrowCircleRight className="w-7 h-7 text-secondary-500" />
      </button>
      <div>
        {otpResponse &&
        (<div className="flex items-center gap-x-3 my-4"> 
          <span>{otpResponse?.message}</span> 
          <button onClick={() => setStep(1)}> <CiEdit className="text-primary-900 w-5 h-5"/> </button>
        </div>
         )
        }
      </div>
      <div className="text-secondary-500 mb-3">
        {time > 0 ? (
          <p> {time} ثانیه تا ارسال مجدد کد</p>
        ) : (
          <button className="text-primary-900" onClick={onResendOtp}>
            ارسال مجدد کد تایید
          </button>
        )}
      </div>
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
            borderRadius: "0.5rem",
          }}
        />
        <div>
          {isPending ? (
            <Loading />
          ) : (
            <button className="btn btn--primary w-full">تایید</button>
          )}
        </div>
      </form>
    </div>
  );
}

export default CheckOTPForm;
