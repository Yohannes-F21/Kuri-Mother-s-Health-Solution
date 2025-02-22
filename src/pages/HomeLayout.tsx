import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { Outlet } from "react-router-dom";

const HomeLayout = () => {
  return (
    <>
      <Navbar />
      <main className="mt-20">
        <Outlet />
      </main>
      <Footer />
    </>
  );
};

export default HomeLayout;
