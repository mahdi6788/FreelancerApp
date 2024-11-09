import { useState } from "react";
import SendOTPForm from "./SendOTPForm";
import CheckOTPForm from "./CheckOTPForm";


function AuthContainer() {
  /// we need phone number for both sendOtpForm and CheckOtpForm
  const [phoneNumber, setPhoneNumber] = useState("09123456789");

  /// step is counter for each stage : step1: sending phone number and step2: typing the took code to check
  const [step, setStep] = useState(2);
  const renderStep = () => {
    switch (step) {
      case 1:
        return <SendOTPForm setStep={setStep} phoneNumber={phoneNumber} setPhoneNumber={setPhoneNumber}/>;
      case 2:
        return <CheckOTPForm phoneNumber={phoneNumber}/>;
      default:
        return null;
    }
  };

  return <div className=" w-full sm:max-w-sm"> {renderStep()} </div>;
}

export default AuthContainer;
