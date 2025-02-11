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
import { motion } from "framer-motion";
import PartnerCarousel from "@/components/HomePage/PartnerCarousel";
import { useTranslation } from "react-i18next";
import "../i18n";
import { t } from "i18next";

const testimonials = [
  {
    quote: t("quote_bet"),
    author: t("author_bet"),
    location: t("location_bet"),
  },
  {
    quote: t("quote_hel"),
    author: t("author_hel"),
    location: t("location_hel"),
  },
  {
    quote: t("quote_ami"),
    author: t("author_ami"),
    location: t("location_ami"),
  },
];
const Home = () => {
  const { t } = useTranslation();

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
  return (
    <div className="w-full   ">
      <section className=" p-4 sm:px-6 lg:px-8 h-[calc(100vh-80px)] flex items-center justify-center">
        <div className="max-w-7xl mx-auto h-full flex items-center justify-center">
          <div className="flex flex-col lg:flex-row items-center justify-center gap-10 lg:gap-5">
            <div className="flex-1 space-y-8">
              <h1 className="text-3xl md:text-5xl lg:text-4xl font-bold text-[#104a52] leading-tight">
                {t("welcome")}
              </h1>
              <p className="text-xl  ">{t("welcome_description")}</p>
              <Button className="bg-[#104a52] text-white hover:bg-[#2D3648] px-8 py-6 text-lg">
                <a href="https://t.me/kurimother">{t("welcome_btn")}</a>
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
      <section className="mb-10"></section>
      <section className="py-16 px-4 sm:px-6 lg:px-8 bg-[#FAF7EB]">
        <div className="max-w-7xl mx-auto">
          <h2 className="text-3xl font-semibold text-center mb-12">
            {t("key_features")}
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            <div className="text-center p-6 rounded-lg bg-white shadow-sm">
              <div className="inline-block p-3 bg-[#C7E8CA] rounded-full mb-4">
                <Leaf className="h-6 w-6 text-gray-700" />
              </div>
              <h3 className="font-semibold mb-2">{t("natural_products")}</h3>
              <p className="text-gray-600">
                {t("natural_products_description")}
              </p>
            </div>
            <div className="text-center p-6 rounded-lg bg-white shadow-sm">
              <div className="inline-block p-3 bg-[#C7E8CA] rounded-full mb-4">
                <Users className="h-6 w-6 text-gray-700" />
              </div>
              <h3 className="font-semibold mb-2">{t("peer_support")}</h3>
              <p className="text-gray-600">{t("peer_support_description")}</p>
            </div>
            <div className="text-center p-6 rounded-lg bg-white shadow-sm">
              <div className="inline-block p-3 bg-[#C7E8CA] rounded-full mb-4">
                <Heart className="h-6 w-6 text-gray-700" />
              </div>
              <h3 className="font-semibold mb-2">{t("expert_guidance")}</h3>
              <p className="text-gray-600">
                {t("expert_guidance_description")}
              </p>
            </div>
            <div className="text-center p-6 rounded-lg bg-white shadow-sm">
              <div className="inline-block p-3 bg-[#C7E8CA] rounded-full mb-4">
                <MessageCircle className="h-6 w-6 text-gray-700" />
              </div>
              <h3 className="font-semibold mb-2">{t("trusted_community")}</h3>
              <p className="text-gray-600">
                {t("trusted_community_description")}
              </p>
            </div>
          </div>
        </div>
      </section>
      <section className="py-16 px-4 sm:px-6 lg:px-8 bg-white">
        <div className="max-w-7xl mx-auto">
          <h2 className="text-3xl font-semibold text-center mb-12">
            {t("products_title")}
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {[
              {
                title: t("anise_title"),
                image:
                  "https://images.unsplash.com/photo-1544787219-7f47ccb76574",
                description: t("anise_description"),
              },
              {
                title: t("cookies_title"),
                image:
                  "https://images.unsplash.com/photo-1499636136210-6f4ee915583e",
                description: t("cookies_description"),
              },
              {
                title: t("supplements_title"),
                image:
                  "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQ7BrMTIziCyOA3LmJljUvMvldNju2F6FLHXg&s",
                description: t("supplements_description"),
              },
            ].map((product, index) => (
              <div
                key={index}
                className="bg-white rounded-lg overflow-hidden shadow-sm flex flex-col"
              >
                <img
                  src={product.image}
                  alt={product.title}
                  className="w-full h-48 object-cover"
                />
                <div className="p-6 flex flex-col flex-1">
                  <h3 className="font-semibold mb-2">{product.title}</h3>
                  <p className="text-gray-600 mb-4 flex-1">
                    {product.description}
                  </p>
                  <Button className="w-full bg-[#104a52] text-white hover:bg-[#2D3648]">
                    <ShoppingBag className="mr-2 h-4 w-4" />
                    {t("shop_btn")}
                  </Button>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
      <section className="py-16 px-4 sm:px-6 lg:px-8 bg-[#FAF7EB] flex gap-2 items-center justify-center">
        <button
          onClick={prevTestimonial}
          className="p-2 rounded-full bg-gray-200 hover:bg-gray-300 transition"
        >
          <ChevronLeft className="h-6 w-6 text-gray-700" />
        </button>
        <div className="max-w-3xl mx-auto text-center relative">
          {/* Testimonial Content */}

          <h2 className="text-3xl font-semibold mb-12">
            {t("testimonial_title")}
          </h2>
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
      <section className="">
        <PartnerCarousel />
      </section>
      <section className="py-16 px-4 sm:px-6 lg:px-8 bg-[#2D3748] text-white">
        <div className="max-w-4xl mx-auto text-center flex flex-col items-center justify-center">
          <h2 className="text-3xl font-semibold mb-6">{t("join_community")}</h2>
          <p className="text-lg mb-8">{t("join_description")}</p>
          <a href="https://t.me/kurimother">
            <Button className="bg-white text-gray-900 hover:bg-gray-100 px-8 py-6 text-lg flex items-center justify-center group">
              {t("join_telegram")}
              <ArrowRight className="ml-2 h-5 w-5 transition-transform duration-200 group-hover:translate-x-2" />
            </Button>
          </a>
        </div>
      </section>
    </div>
  );
};
export default Home;
