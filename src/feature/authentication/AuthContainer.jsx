import { useState } from "react";
import SendOTPForm from "./SendOTPForm";
import CheckOTPForm from "./CheckOTPForm";


function AuthContainer() {
  /// step is counter for each stage : step1: sending phone number and step2: typing the took code to check
  const [step, setStep] = useState(1);
  const renderStep = () => {
    switch (step) {
      case 1:
        return <SendOTPForm setStep={setStep}/>;
      case 2:
        return <CheckOTPForm />;
      default:
        return null;
    }
  };

  return <div className=" w-full sm:max-w-sm"> {renderStep()} </div>;
}

export default AuthContainer;
