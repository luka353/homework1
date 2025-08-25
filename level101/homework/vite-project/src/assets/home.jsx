import { Outlet } from "react-router-dom";

export default function Home() {
  return (
    <div>
      <h1>Home Page</h1>
      <Outlet />
    </div>
  );
}
