import { useState } from "react";
import SendOTPForm from "./SendOTPForm";
import CheckOTPForm from "./CheckOTPForm";
import { useMutation } from "@tanstack/react-query";
import { getOtp } from "../../services/authService";
import toast from "react-hot-toast";

function AuthContainer() {
  /// we need to getOtp function in both SendOTPForm and ChckOTPForm, so put it in parent
  const { isPending: isSendingOtp, mutateAsync, data:otpResponse } = useMutation({
    mutationFn: getOtp,
  });

  const sendOtpHandler = async (e) => {
    e.preventDefault();
    try {
      const data = await mutateAsync({ phoneNumber }); /// calling mutateAsync() means calling the getOtp()
      // console.log(data.message)
      toast.success(data.message);
      {
        setStep(2);
      }
      // console.log(data.message)
    } catch (error) {
      toast.error(error?.response?.data?.message);
    }
  };

  /// we need phone number for both sendOtpForm and CheckOtpForm
  const [phoneNumber, setPhoneNumber] = useState("");

  /// step is counter for each stage : step1: sending phone number and step2: typing the took code to check
  const [step, setStep] = useState(1);
  const renderStep = () => {
    switch (step) {
      case 1:
        return (
          <SendOTPForm
            isSendingOtp={isSendingOtp}
            setStep={setStep}
            phoneNumber={phoneNumber}
            setPhoneNumber={setPhoneNumber}
            onSendOtp={sendOtpHandler}
          />
        );
      case 2:
        return (
          <CheckOTPForm
            phoneNumber={phoneNumber}
            setStep={setStep}
            onResendOtp={sendOtpHandler}
            otpResponse={otpResponse}
          />
        );
      default:
        return null;
    }
  };

  return <div className=" w-full sm:max-w-sm"> {renderStep()} </div>;
}

export default AuthContainer;
