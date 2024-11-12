import CompleteProfileForm from "../feature/authentication/CompleteProfileForm"

function CompleteProfile() {
  return (
    <div className="container xl:max-w-screen-xl">
      <CompleteProfileForm/>
    </div>
  )
}

export default CompleteProfile


/// note here is a page and we donot like to put side effects here, so make a component named CompleteProfileForm and put different functions there.