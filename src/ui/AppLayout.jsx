import { Outlet } from "react-router-dom";

function AppLayout() {
  return (
    <div className="grid grid-rows-[auto_1fr] grid-cols-[15rem_1fr] h-screen ">
      <div className="bg-secondary-0 py-4 px-8">header</div>
      <div className="bg-secondary-0 row-start-1 row-span-2 ">sidebar</div>
      <div className="bg-secondary-100 p-8 overflow-y-auto">
        <div className="mx-auto max-w-screen-md flex flex-col gap-y-12 bg-red-200">
        <Outlet />
        </div>
      </div>
    </div>
  );
}

export default AppLayout;
