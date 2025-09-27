import { Outlet } from "react-router-dom";
import Header from "../Pages/Header/Header";
import Footer from "../Components/SharedComponents/Footer";
import { useLocation } from "react-router-dom";
const Layout = () => {
  const location = useLocation();
  const path = location.pathname;
  const noFooter = path === "/login" || path === "/register";

  console.log(path);
  return (
    <div>
      <Header></Header>
      <div className="min-h-screen">
        <Outlet></Outlet>
      </div>
      {noFooter ? "" : <Footer></Footer>}
    </div>
  );
};

export default Layout;
