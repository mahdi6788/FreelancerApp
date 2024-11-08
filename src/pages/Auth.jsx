import CheckOTPForm from "../feature/authentication/CheckOTPForm"
import SendOTPForm from "../feature/authentication/SendOTPForm"

function Auth() {
  return (
    <div className="flex justify-center pt-10">
      <div className=" w-full sm:max-w-sm">
        <SendOTPForm />
        <CheckOTPForm />
    </div>
    </div>
  )
}

export default Auth

/// into the pages we do not put side effects and just put components that are placed in feature folder. 
/// containg SendOTPForm and CheckOTPForm
/// step1: get OTP
/// step2: check OTP