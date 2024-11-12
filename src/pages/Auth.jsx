import AuthContainer from "../feature/authentication/AuthContainer";

function Auth() {
  return (
    <div className="container xl:max-w-screen-xl">
      <div className="flex justify-center pt-10">
        <AuthContainer />
      </div>
    </div>
  );
}

export default Auth;

/// into the pages we do not put side effects and just put components that are placed in feature folder.
/// containg SendOTPForm and CheckOTPForm
/// step1: get OTP
/// step2: check OTP
