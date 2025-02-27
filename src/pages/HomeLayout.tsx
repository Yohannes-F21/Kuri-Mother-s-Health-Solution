import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { Outlet } from "react-router-dom";
import ScrollToTop from "@/components/ScrollToTop";

const HomeLayout = () => {
  return (
    <>
      <Navbar />
      <main className="mt-20">
        <ScrollToTop />

        <Outlet />
      </main>
      <Footer />
    </>
  );
};

export default HomeLayout;
