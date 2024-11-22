import useUser from "./useUser"


function UserAvatar() {
  const { user, isLoading } = useUser()
  return (
    <div className="flex items-center gap-x-2 bg-secondary-200 rounded-lg p-1">
      <img
        src="/user.jpg"
        alt="user-account"
        className="w-7 h-7 rounded-full object-cover object-center"
      />
      <span className="text-secondary-900">{user?.name}</span>
    </div>
  );
}

export default UserAvatar;
