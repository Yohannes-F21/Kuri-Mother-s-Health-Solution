import { useEffect, useState } from "react";
import { ChevronLeft, ChevronRight } from "lucide-react";
import { motion } from "framer-motion";

import "../i18n";
import { useTranslation } from "react-i18next";

const Testimonials = () => {
  const { t } = useTranslation();
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
          <p className="font-semibold">{testimonials[currentIndex].author}, </p>
        </motion.div>
      </div>
      <button
        onClick={nextTestimonial}
        className="p-2 rounded-full bg-gray-200 hover:bg-gray-300 transition"
      >
        <ChevronRight className="h-6 w-6 text-gray-700" />
      </button>
    </section>
  );
};

export default Testimonials;
