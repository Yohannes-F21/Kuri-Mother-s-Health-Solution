import { Button } from "@/components/ui/button";

import {
  Heart,
  Leaf,
  Users,
  MessageCircle,
  ShoppingBag,
  ArrowRight,
} from "lucide-react";
import { ChevronLeft, ChevronRight } from "lucide-react";
import { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import { motion } from "framer-motion";
import PartnerCarousel from "@/components/HomePage/PartnerCarousel";
const testimonials = [
  {
    quote:
      "Kuri's lactation tea has made a huge difference for me. My milk supply increased, and I felt more relaxed during feeding times.",
    author: "- Bethlehem T.",
    location: "Addis Ababa",
  },
  {
    quote:
      "I was struggling with low milk supply, but after using Kuri, I noticed a big improvement. Highly recommended!",
    author: "- Helen G.",
    location: "Nairobi",
  },
  {
    quote:
      "Amazing tea! It helped me feel more at ease during breastfeeding, and my baby seems happier too.",
    author: "- Amina K.",
    location: "Lagos",
  },
];
const Home = () => {
  const [currentIndex, setCurrentIndex] = useState(0);

  const prevTestimonial = () => {
    setCurrentIndex((prev: number) =>
      prev === 0 ? testimonials.length - 1 : prev - 1
    );
  };

  const nextTestimonial = () => {
    setCurrentIndex((prev: number) =>
      prev === testimonials.length - 1 ? 0 : prev + 1
    );
  };

  useEffect(() => {
    const interval = setInterval(nextTestimonial, 5000);
    return () => clearInterval(interval);
  }, []);
  //   const [isMenuOpen, setIsMenuOpen] = useState(false);
  return (
    <div className="w-full min-h-screen bg-[#FAF7EB]">
      <section className=" p-4 sm:px-6 lg:px-8 min-h-screen flex items-center justify-center">
        <div className="max-w-7xl mx-auto h-full flex items-center justify-center">
          <div className="flex flex-col md:flex-row items-center justify-center gap-5">
            <div className="flex-1 space-y-6">
              <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-[#104a52] leading-tight">
                Welcome to Kuri Mother's Health Solution
              </h1>
              <p className="text-xl font-semibold">
                The first lactation support platform in Ethiopia
              </p>
              <Button className="bg-[#104a52] text-white hover:bg-[#2D3648] px-8 py-6 text-lg">
                <Link to={"/our-products"}>Explore Our Solutions</Link>
                <ArrowRight className="ml-2 h-5 w-5" />
              </Button>
            </div>
            <div className="flex-1">
              <img
                src="https://www.parsipediatrics.com/wp-content/uploads/2021/12/breast-feeding.jpg"
                alt="Mother with baby"
                className="rounded-lg "
              />
            </div>
          </div>
        </div>
      </section>
      <section className="mb-10">
        <PartnerCarousel />
      </section>
      <section className="py-16 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <h2 className="text-3xl font-semibold text-center mb-12">
            Our Key Features
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            <div className="text-center p-6 rounded-lg bg-white shadow-sm">
              <div className="inline-block p-3 bg-[#C7E8CA] rounded-full mb-4">
                <Leaf className="h-6 w-6 text-gray-700" />
              </div>
              <h3 className="font-semibold mb-2">Natural Products</h3>
              <p className="text-gray-600">
                Organic lactation support products
              </p>
            </div>
            <div className="text-center p-6 rounded-lg bg-white shadow-sm">
              <div className="inline-block p-3 bg-[#C7E8CA] rounded-full mb-4">
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
              <div className="inline-block p-3 bg-[#C7E8CA] rounded-full mb-4">
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
                  <Button className="w-full bg-[#104a52] text-white hover:bg-[#2D3648]">
                    <ShoppingBag className="mr-2 h-4 w-4" />
                    Shop Now
                  </Button>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
      <section className="py-16 px-4 sm:px-6 lg:px-8 bg-[#FFE5D9]/20 flex gap-2 items-center justify-center">
        <button
          onClick={prevTestimonial}
          className="p-2 rounded-full bg-gray-200 hover:bg-gray-300 transition"
        >
          <ChevronLeft className="h-6 w-6 text-gray-700" />
        </button>
        <div className="max-w-3xl mx-auto text-center relative">
          {/* Testimonial Content */}

          <h2 className="text-3xl font-semibold mb-12">What Mothers Say</h2>
          <motion.div
            key={currentIndex} // Forces reanimation when index changes
            initial={{ opacity: 0, x: 100 }} // Start position
            animate={{ opacity: 1, x: 0 }} // End position
            exit={{ opacity: 0, x: -100 }} // Exit position
            transition={{ duration: 0.5, ease: "easeInOut" }} // Smooth animation
          >
            <blockquote
              className="text-xl text-gray-700 italic mb-6 transition-opacity duration-300"
              key={currentIndex}
            >
              "{testimonials[currentIndex].quote}"
            </blockquote>
            <p className="font-semibold">
              {testimonials[currentIndex].author},{" "}
              {testimonials[currentIndex].location}
            </p>
          </motion.div>
        </div>
        <button
          onClick={nextTestimonial}
          className="p-2 rounded-full bg-gray-200 hover:bg-gray-300 transition"
        >
          <ChevronRight className="h-6 w-6 text-gray-700" />
        </button>
      </section>
      <section className="py-16 px-4 sm:px-6 lg:px-8 bg-[#2D3748] text-white">
        <div className="max-w-4xl mx-auto text-center flex flex-col items-center justify-center">
          <h2 className="text-3xl font-semibold mb-6">Join Our Community</h2>
          <p className="text-lg mb-8">
            At Kuri Mother's Health Solution, we're your partner in motherhood.
            Join our community and thrive in your breastfeeding journey!
          </p>
          <a href="https://t.me/kurimother">
            <Button className="bg-white text-gray-900 hover:bg-gray-100 px-8 py-6 text-lg flex items-center justify-center group">
              Join the Conversation on Telegram
              <ArrowRight className="ml-2 h-5 w-5 transition-transform duration-200 group-hover:translate-x-2" />
            </Button>
          </a>
        </div>
      </section>
    </div>
  );
};
export default Home;
