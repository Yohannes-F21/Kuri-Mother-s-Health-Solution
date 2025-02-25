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
    t("about_us"),
    t("products_title"),
    t("services_title"),
    t("blog"),
    t("contact_us"),
  ];
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
            <NavLink
              to={"/"}
              className={({ isActive }) =>
                `px-4 py-2 text-sm font-semibold rounded-lg transition-all duration-200 ${
                  isActive
                    ? "text-[#faaf18] font-bold "
                    : "text-white  hover:text-[#faaf18] hover:underline"
                }`
              }
            >
              {t("home")}
            </NavLink>
            {navbarContent.map((item) => (
              <NavLink
                key={item}
                to={`/${item.toLowerCase().replace(/\s+/g, "-")}`}
                className={({ isActive }) =>
                  `px-4 py-2 text-sm font-semibold rounded-lg transition-all duration-200 ${
                    isActive
                      ? "text-[#faaf18] font-bold  "
                      : "text-white hover:text-[#faaf18] hover:underline"
                  }`
                }
              >
                {item}
              </NavLink>
            ))}
            {/* <NavLink to={''}>About</NavLink> */}
            {/* <Button className="ml-4 bg-gradient-to-r from-[#FFD6E0] to-[#FFE5D9] text-gray-800 hover:opacity-90 transition-opacity duration-200 shadow-sm">
              Join Community
            </Button> */}
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
              <NavLink
                to={"/"}
                className={({ isActive }) =>
                  `px-4 py-2 text-sm font-medium rounded-lg transition-all duration-200 ${
                    isActive
                      ? "text-[#faaf18]  "
                      : "text-white hover:text-[#faaf18] hover:underline"
                  }`
                }
              >
                {t("home")}
              </NavLink>
              {navbarContent.map((item) => (
                <button onClick={() => setIsMenuOpen(!isMenuOpen)}>
                  <NavLink
                    key={item}
                    to={`/${item.toLowerCase().replace(/\s+/g, "-")}`}
                    className={({ isActive }) =>
                      `px-4 py-2 text-sm font-medium rounded-lg transition-all duration-200 ${
                        isActive
                          ? "text-[#faaf18]  "
                          : "text-white hover:text-[#faaf18] hover:underline"
                      }`
                    }
                  >
                    {item}
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
