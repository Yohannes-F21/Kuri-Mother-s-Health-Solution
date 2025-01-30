import { useState, useEffect, useRef } from "react";
import { Button } from "@/components/ui/button";
import { Menu, X } from "lucide-react";
import { NavLink } from "react-router-dom";
import GoogleTranslate from "./GoogleTranslate";

const Navbar = () => {
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
    <nav className="fixed top-0 w-full bg-white/50 backdrop-blur-sm z-50 border-b shadow-sm">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-20">
          <div className="flex items-center space-x-2">
            {/* <div className="bg-[#FFD6E0] p-2 rounded-full">
              <Heart className="h-6 w-6 text-[#2D3748]" />
            </div> */}
            <div className="logo ">
              <img
                src="https://w7.pngwing.com/pngs/297/788/png-transparent-breastfeeding-infant-mother-illustration-linear-fashion-family-portrait-painting-material-woman-breastfeeding-illustration-watercolor-painting-child-fashion-girl.png"
                alt="logo"
                className="w-12 h-12 rounded-full object-fill"
              />
            </div>
            <div>
              <NavLink
                to="/"
                className="text-2xl font-semibold text-[#2D3748] tracking-tight hover:text-[#F43F5E] transition-colors duration-200"
              >
                Kuri
              </NavLink>
            </div>
          </div>
          <div className="hidden md:flex items-center space-x-1">
            {["About", "Our Products", "Blogs", "Contact Us"].map((item) => (
              <NavLink
                key={item}
                to={`/${item.toLowerCase().replace(/\s+/g, "-")}`}
                className={({ isActive }) =>
                  `px-4 py-2 text-sm font-medium rounded-lg transition-all duration-200 ${
                    isActive
                      ? "text-gray-900 bg-[#FFE5D9]"
                      : "text-gray-600 hover:text-gray-900 hover:bg-[#FFE5D9]/50"
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
            <GoogleTranslate></GoogleTranslate>
          </div>
          <div className="md:hidden">
            <button
              onClick={() => setIsMenuOpen(!isMenuOpen)}
              className="p-2 rounded-lg text-gray-600 hover:text-gray-900 hover:bg-gray-100 transition-colors duration-200"
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
          <div ref={menuRef} className="md:hidden pb-4 px-4">
            <div className="flex flex-col space-y-2">
              {["About", "Our Products", "Blogs", "Contact Us"].map((item) => (
                <button onClick={() => setIsMenuOpen(!isMenuOpen)}>
                  <NavLink
                    key={item}
                    to={`/${item.toLowerCase().replace(/\s+/g, "-")}`}
                    className={({ isActive }) =>
                      `px-4 py-2 text-sm font-medium rounded-lg transition-all duration-200 ${
                        isActive
                          ? "text-gray-900 bg-[#FFE5D9]/75"
                          : "text-gray-600 hover:text-gray-900 hover:bg-[#FFE5D9]/50"
                      }`
                    }
                  >
                    {item}
                  </NavLink>
                </button>
              ))}
              <Button className="mt-2 w-full bg-gradient-to-r from-[#FFD6E0] to-[#FFE5D9] text-gray-800 hover:opacity-90 transition-opacity duration-200">
                Join Community
              </Button>
            </div>
          </div>
        )}
      </div>
    </nav>
  );
};

export default Navbar;
