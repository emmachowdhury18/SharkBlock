import "./Layout.css";
import "@fontsource/bebas-neue";
import "@fontsource/lato";
import { Outlet } from "react-router";
import Header from "./components/Header";
import Footer from "./components/Footer";

function Layout() {
  return (
    <>
      <div className="background">
        <Header />
        <main className="main-content">
          <Outlet />
        </main>
        <Footer />
      </div>
    </>
  );
}

export default Layout;
