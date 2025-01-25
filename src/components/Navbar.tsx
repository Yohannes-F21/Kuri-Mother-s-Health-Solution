import React, { useState } from "react";
import { Button } from "@/components/ui/button";
import { Heart, Menu, X } from "lucide-react";
import { Link } from "react-router-dom";

const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    <nav className="fixed top-0 w-full bg-white/95 backdrop-blur-sm z-50 border-b shadow-sm">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-20">
          <div className="flex items-center space-x-2">
            <div className="bg-[#FFD6E0] p-2 rounded-full">
              <Heart className="h-6 w-6 text-[#2D3748]" />
            </div>
            <div className="text-2xl font-semibold text-[#2D3748] tracking-tight hover:text-[#FFD6E0] transition-colors duration-200">
              <Link
                to="/"
                className="text-2xl font-semibold text-[#2D3748] tracking-tight hover:text-[#FFD6E0] transition-colors duration-200"
              >
                Kuri
              </Link>
            </div>
          </div>
          <div className="hidden md:flex items-center space-x-1">
            {["About", "Our Products", "Blogs", "Contact"].map((item) => (
              <Link
                key={item}
                to={`/${item.toLowerCase()}`}
                className="px-4 py-2 text-gray-600 hover:text-gray-900 rounded-full hover:bg-[#FFE5D9]/50 transition-all duration-200 text-sm font-medium"
              >
                {item}
              </Link>
            ))}
            <Button className="ml-4 bg-gradient-to-r from-[#FFD6E0] to-[#FFE5D9] text-gray-800 hover:opacity-90 transition-opacity duration-200 shadow-sm">
              Join Community
            </Button>
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
          <div className="md:hidden pb-4 px-4">
            <div className="flex flex-col space-y-2">
              {["About", "Our Products", "Blogs", "Contact"].map((item) => (
                <Link
                  key={item}
                  to={`/${item.toLowerCase()}`}
                  className="px-4 py-2 text-gray-600 hover:text-gray-900 rounded-lg hover:bg-[#FFE5D9]/50 transition-all duration-200"
                >
                  {item}
                </Link>
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
