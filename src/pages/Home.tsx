import React, { useState } from "react";
import { Button } from "@/components/ui/button";
import {
  Heart,
  Leaf,
  Users,
  MessageCircle,
  ShoppingBag,
  ArrowRight,
} from "lucide-react";
const Home = () => {
  //   const [isMenuOpen, setIsMenuOpen] = useState(false);
  return (
    <div className="w-full min-h-screen bg-[#FFFAF6]">
      {/* <nav className="fixed top-0 w-full bg-white/95 backdrop-blur-sm z-50 border-b shadow-sm">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center h-20">
            <div className="flex items-center space-x-2">
              <div className="bg-[#FFD6E0] p-2 rounded-full">
                <Heart className="h-6 w-6 text-[#2D3748]" />
              </div>
              <div className="text-2xl font-semibold text-[#2D3748] tracking-tight hover:text-[#FFD6E0] transition-colors duration-200">
                Kuri
              </div>
            </div>
            <div className="hidden md:flex items-center space-x-1">
              {["About", "Products", "Community", "Contact"].map((item) => (
                <a
                  key={item}
                  href="#"
                  className="px-4 py-2 text-gray-600 hover:text-gray-900 rounded-full hover:bg-[#FFE5D9]/50 transition-all duration-200 text-sm font-medium"
                >
                  {item}
                </a>
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
                {["About", "Products", "Community", "Contact"].map((item) => (
                  <a
                    key={item}
                    href="#"
                    className="px-4 py-2 text-gray-600 hover:text-gray-900 rounded-lg hover:bg-[#FFE5D9]/50 transition-all duration-200"
                  >
                    {item}
                  </a>
                ))}
                <Button className="mt-2 w-full bg-gradient-to-r from-[#FFD6E0] to-[#FFE5D9] text-gray-800 hover:opacity-90 transition-opacity duration-200">
                  Join Community
                </Button>
              </div>
            </div>
          )}
        </div>
      </nav> */}
      <section className="pt-24 pb-16 px-4 sm:px-6 lg:px-8 bg-gradient-to-b from-[#FFE5D9] to-[#FFFAF6]">
        <div className="max-w-7xl mx-auto">
          <div className="flex flex-col md:flex-row items-center gap-8">
            <div className="flex-1 space-y-6">
              <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-gray-900 leading-tight">
                Welcome to Kuri Mother's Health Solution
              </h1>
              <p className="text-xl text-gray-700">
                The first lactation support platform in Ethiopia
              </p>
              <Button className="bg-[#2D3748] text-white hover:bg-gray-700 px-8 py-6 text-lg">
                Explore Our Solutions
                <ArrowRight className="ml-2 h-5 w-5" />
              </Button>
            </div>
            <div className="flex-1">
              <img
                src="https://images.unsplash.com/photo-1555252333-9f8e92e65df9"
                alt="Mother with baby"
                className="rounded-lg shadow-xl"
              />
            </div>
          </div>
        </div>
      </section>
      <section className="py-16 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <h2 className="text-3xl font-semibold text-center mb-12">
            Our Key Features
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            <div className="text-center p-6 rounded-lg bg-white shadow-sm">
              <div className="inline-block p-3 bg-[#FFE5D9] rounded-full mb-4">
                <Leaf className="h-6 w-6 text-gray-700" />
              </div>
              <h3 className="font-semibold mb-2">Natural Products</h3>
              <p className="text-gray-600">
                Organic lactation support products
              </p>
            </div>
            <div className="text-center p-6 rounded-lg bg-white shadow-sm">
              <div className="inline-block p-3 bg-[#FFD6E0] rounded-full mb-4">
                <Users className="h-6 w-6 text-gray-700" />
              </div>
              <h3 className="font-semibold mb-2">Peer Support</h3>
              <p className="text-gray-600">Connect with other mothers</p>
            </div>
            <div className="text-center p-6 rounded-lg bg-white shadow-sm">
              <div className="inline-block p-3 bg-[#C7E8CA] rounded-full mb-4">
                <Heart className="h-6 w-6 text-gray-700" />
              </div>
              <h3 className="font-semibold mb-2">Expert Guidance</h3>
              <p className="text-gray-600">
                Professional lactation consultants
              </p>
            </div>
            <div className="text-center p-6 rounded-lg bg-white shadow-sm">
              <div className="inline-block p-3 bg-[#FFE5D9] rounded-full mb-4">
                <MessageCircle className="h-6 w-6 text-gray-700" />
              </div>
              <h3 className="font-semibold mb-2">Trusted Community</h3>
              <p className="text-gray-600">Safe space for mothers</p>
            </div>
          </div>
        </div>
      </section>
      <section className="py-16 px-4 sm:px-6 lg:px-8 bg-white">
        <div className="max-w-7xl mx-auto">
          <h2 className="text-3xl font-semibold text-center mb-12">
            Our Products
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {[
              {
                title: "Lactation Tea",
                image:
                  "https://images.unsplash.com/photo-1544787219-7f47ccb76574",
                description: "Natural herbs to support milk production",
              },
              {
                title: "Lactation Cookies",
                image:
                  "https://images.unsplash.com/photo-1499636136210-6f4ee915583e",
                description: "Delicious cookies with galactagogues",
              },
              {
                title: "Supplements",
                image:
                  "https://images.unsplash.com/photo-1471864190281-a93a3070b6de",
                description: "Essential nutrients for nursing mothers",
              },
            ].map((product, index) => (
              <div
                key={index}
                className="bg-white rounded-lg overflow-hidden shadow-sm"
              >
                <img
                  src={product.image}
                  alt={product.title}
                  className="w-full h-48 object-cover"
                />
                <div className="p-6">
                  <h3 className="font-semibold mb-2">{product.title}</h3>
                  <p className="text-gray-600 mb-4">{product.description}</p>
                  <Button className="w-full bg-[#2D3748] text-white hover:bg-gray-700">
                    <ShoppingBag className="mr-2 h-4 w-4" />
                    Shop Now
                  </Button>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
      <section className="py-16 px-4 sm:px-6 lg:px-8 bg-[#FFE5D9]/20">
        <div className="max-w-3xl mx-auto text-center">
          <h2 className="text-3xl font-semibold mb-12">What Mothers Say</h2>
          <blockquote className="text-xl text-gray-700 italic mb-6">
            "Kuri's lactation tea has made a huge difference for me. My milk
            supply increased, and I felt more relaxed during feeding times."
          </blockquote>
          <p className="font-semibold">- Bethlehem T., Addis Ababa</p>
        </div>
      </section>
      <section className="py-16 px-4 sm:px-6 lg:px-8 bg-[#2D3748] text-white">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-3xl font-semibold mb-6">Join Our Community</h2>
          <p className="text-lg mb-8">
            At Kuri Mother's Health Solution, we're your partner in motherhood.
            Join our community and thrive in your breastfeeding journey!
          </p>
          <Button className="bg-white text-gray-900 hover:bg-gray-100 px-8 py-6 text-lg">
            Join the Conversation on Telegram
            <ArrowRight className="ml-2 h-5 w-5" />
          </Button>
        </div>
      </section>
      {/* <footer className="bg-white border-t">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
          <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
            <div>
              <h3 className="text-xl font-semibold mb-4">Kuri</h3>
              <p className="text-gray-600">
                Ethiopia's first lactation support platform
              </p>
            </div>
            <div>
              <h4 className="font-semibold mb-4">Quick Links</h4>
              <ul className="space-y-2">
                <li>
                  <a href="#" className="text-gray-600 hover:text-gray-900">
                    About Us
                  </a>
                </li>
                <li>
                  <a href="#" className="text-gray-600 hover:text-gray-900">
                    Products
                  </a>
                </li>
                <li>
                  <a href="#" className="text-gray-600 hover:text-gray-900">
                    Community
                  </a>
                </li>
                <li>
                  <a href="#" className="text-gray-600 hover:text-gray-900">
                    Contact
                  </a>
                </li>
              </ul>
            </div>
            <div>
              <h4 className="font-semibold mb-4">Contact</h4>
              <ul className="space-y-2">
                <li className="text-gray-600">Addis Ababa, Ethiopia</li>
                <li className="text-gray-600">info@kurihealth.com</li>
                <li className="text-gray-600">+251 911 123 456</li>
              </ul>
            </div>
            <div>
              <h4 className="font-semibold mb-4">Follow Us</h4>
              <div className="flex space-x-4">
                <a href="#" className="text-gray-600 hover:text-gray-900">
                  <Facebook className="h-6 w-6" />
                </a>
                <a href="#" className="text-gray-600 hover:text-gray-900">
                  <Instagram className="h-6 w-6" />
                </a>
                <a href="#" className="text-gray-600 hover:text-gray-900">
                  <Twitter className="h-6 w-6" />
                </a>
              </div>
            </div>
          </div>
          <div className="mt-8 pt-8 border-t text-center text-gray-600">
            <p>
              &copy; 2024 Kuri Mother's Health Solution. All rights reserved.
            </p>
          </div>
        </div>
      </footer> */}
    </div>
  );
};
export default Home;
