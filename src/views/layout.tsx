import { Outlet } from "react-router-dom";

export default function Layout() {
  return (
    <div className="flex w-screen h-screen items-center justify-center">
      <Outlet />
    </div>
  );
}
