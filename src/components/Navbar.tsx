import { useState, useEffect, useRef } from "react";
// import { Button } from "@/components/ui/button";
import { Menu, X } from "lucide-react";
import { NavLink } from "react-router-dom";
// import GoogleTranslate from "./GoogleTranslate";
import logo from "../Assets/k-logo1.png";
import LanguageSwitcher from "./LanguageSwitcher";
import { useTranslation } from "react-i18next";
import "../i18n";

const Navbar = () => {
  const { t } = useTranslation();

  const navbarContent = [
    { name: t("home"), path: "/" },
    { name: t("about_us"), path: "/about-us" },
    { name: t("products_title"), path: "/our-products" },
    { name: t("services_title"), path: "/our-Services" },
    { name: t("blog"), path: "/blogs" },
    { name: t("contact_us"), path: "/contact-us" },
  ];
  console.log(navbarContent);

  // the following code is for the google translator

  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const menuRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (menuRef.current && !menuRef.current.contains(event.target as Node)) {
        setIsMenuOpen(false);
      }
    };

    document.addEventListener("mousedown", handleClickOutside);
    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, [menuRef]);

  return (
    <nav className="fixed top-0 w-full bg-[#104A52] backdrop-blur-sm z-50  shadow-sm ">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-20">
          <div className="logo w-[60%] md:w-[30%] ">
            <NavLink to={"/"}>
              <img
                src={logo}
                alt="Kuri Social Media Profile"
                className="w-[30%] h-[30%] object-fill"
              />
            </NavLink>
          </div>

          <div className="hidden lg:flex items-center space-x-1">
            {navbarContent.map((item) => (
              <NavLink
                key={item.name}
                to={item.path}
                className={({ isActive }) =>
                  `px-4 py-2 text-sm font-semibold rounded-lg transition-all duration-200 ${
                    isActive
                      ? "bg-[#faaf18] text-[#104A52]  "
                      : "text-white hover:text-[#faaf18] "
                  }`
                }
              >
                {item.name}
              </NavLink>
            ))}

            {/* <GoogleTranslate></GoogleTranslate> */}
            <LanguageSwitcher />
          </div>
          <div className="lg:hidden">
            <LanguageSwitcher />
          </div>

          <div className="lg:hidden">
            <button
              onClick={() => setIsMenuOpen(!isMenuOpen)}
              className="p-2 rounded-lg text-white hover:text-gray-900 hover:bg-gray-100 transition-colors duration-200"
            >
              {isMenuOpen ? (
                <X className="h-6 w-6" />
              ) : (
                <Menu className="h-6 w-6" />
              )}
            </button>
          </div>
        </div>
        {isMenuOpen && (
          <div ref={menuRef} className="lg:hidden pb-4 px-4">
            <div className="flex flex-col space-y-2 items-center">
              {navbarContent.map((item) => (
                <button onClick={() => setIsMenuOpen(!isMenuOpen)}>
                  <NavLink
                    key={item.name}
                    to={item.path}
                    className={({ isActive }) =>
                      `px-4 py-2 text-sm font-medium rounded-lg transition-all duration-200 ${
                        isActive
                          ? "text-[#faaf18]  "
                          : "text-white hover:text-[#faaf18] hover:underline"
                      }`
                    }
                  >
                    {item.name}
                  </NavLink>
                </button>
              ))}
            </div>
          </div>
        )}
      </div>
    </nav>
  );
};

export default Navbar;
