import SendOTPForm from "../feature/authentication/SendOTPForm"

function Auth() {
  return (
    <div className=" w-full sm:max-w-sm">
        <SendOTPForm />
    </div>
  )
}

export default Auth

/// this is a page for authentication and we put components here, 
/// containg SendOTPForm and CheckOTPForm
/// step1: get OTP
/// step2: check OTP