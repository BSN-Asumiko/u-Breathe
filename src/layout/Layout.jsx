import Navbar from "../components/navbar/Navbar";
import { Outlet } from "react-router-dom";

const Layout = () => {
  return (
    <div>
      <div>
        <Navbar />
      </div>
      <main>
        <Outlet />
      </main>
    </div>
  );
};

export default Layout;
