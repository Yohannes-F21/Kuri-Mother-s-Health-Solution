import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay, EffectFade, Navigation, Pagination } from "swiper/modules";
import "swiper/css";
import "swiper/css/effect-fade";
import "swiper/css/navigation";
import "swiper/css/pagination";
import { useTranslation } from "react-i18next";
import { motion } from "framer-motion";

// Import banner images
import banner1 from "../../Assets/WhatsApp Image1.jpeg";
import banner2 from "../../Assets/WhatsApp Image2.jpeg";
import banner3 from "../../Assets/WhatsApp Image 3.jpeg";

const BannerCarousel = () => {
  const { t } = useTranslation();
  const banners = [banner1, banner2, banner3]; // Add your banner images here

  return (
    <section className="relative h-[calc(100vh-80px)] w-full overflow-hidden bg-gray-900 group">
      <Swiper
        modules={[Autoplay, Navigation, Pagination, EffectFade]}
        effect="fade"
        speed={1000}
        autoplay={{ delay: 5000, disableOnInteraction: false }}
        loop={true}
        navigation={{
          nextEl: ".swiper-button-next-custom",
          prevEl: ".swiper-button-prev-custom",
        }}
        pagination={{
          clickable: true,
          el: ".swiper-pagination-custom",
          renderBullet: (_index, className) => {
            return '<span class="' + className + '"></span>';
          },
        }}
        className="w-full h-full relative"
      >
        {banners.map((banner, index) => (
          <SwiperSlide key={index} className="relative w-full h-full">
            {({ isActive }) => (
              <>
                <div className="absolute inset-0">
                  <motion.img
                    src={banner}
                    alt={`Banner ${index + 1}`}
                    className="w-full h-full object-fill"
                    initial={{ scale: 1.2 }}
                    animate={{ scale: isActive ? 1 : 1.2 }}
                    transition={{ duration: 6, ease: "easeOut" }}
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/40 to-transparent/30" />
                </div>

                <div className="relative z-10 w-full h-full flex items-center justify-center">
                  <div className="container mx-auto px-4 sm:px-6 lg:px-8 flex flex-col items-center text-center max-w-4xl">
                    {isActive && (
                      <>
                        <motion.div
                          initial={{ opacity: 0, y: 30 }}
                          animate={{ opacity: 1, y: 0 }}
                          transition={{
                            duration: 0.8,
                            delay: 0.3,
                            ease: "easeOut",
                          }}
                        >
                          <span className="inline-block py-1 px-4 mb-4 rounded-full bg-white/10 backdrop-blur-sm border border-white/20 text-white/90 text-sm md:text-base font-medium uppercase tracking-wider">
                            {t("featured_products") || "Our Products"}
                          </span>
                        </motion.div>

                        <motion.h1
                          initial={{ opacity: 0, y: 30 }}
                          animate={{ opacity: 1, y: 0 }}
                          transition={{
                            duration: 0.8,
                            delay: 0.5,
                            ease: "easeOut",
                          }}
                          className="text-4xl md:text-6xl lg:text-7xl font-bold text-white mb-6 leading-tight drop-shadow-lg"
                        >
                          {t("product_description")}
                        </motion.h1>

                        <motion.p
                          initial={{ opacity: 0, y: 30 }}
                          animate={{ opacity: 1, y: 0 }}
                          transition={{
                            duration: 0.8,
                            delay: 0.7,
                            ease: "easeOut",
                          }}
                          className="text-lg md:text-2xl text-gray-200 font-light max-w-2xl mx-auto leading-relaxed drop-shadow-md"
                        >
                          {t("product_details")}
                        </motion.p>
                      </>
                    )}
                  </div>
                </div>
              </>
            )}
          </SwiperSlide>
        ))}

        {/* Custom Navigation */}
        <div className="absolute inset-y-0 left-0 z-20 flex items-center pl-4 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
          <button className="swiper-button-prev-custom w-12 h-12 md:w-14 md:h-14 rounded-full bg-white/10 backdrop-blur-md border border-white/20 text-white flex items-center justify-center hover:bg-white/20 transition-all cursor-pointer">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              strokeWidth={2}
              stroke="currentColor"
              className="w-6 h-6 md:w-8 md:h-8"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M15.75 19.5L8.25 12l7.5-7.5"
              />
            </svg>
          </button>
        </div>
        <div className="absolute inset-y-0 right-0 z-20 flex items-center pr-4 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
          <button className="swiper-button-next-custom w-12 h-12 md:w-14 md:h-14 rounded-full bg-white/10 backdrop-blur-md border border-white/20 text-white flex items-center justify-center hover:bg-white/20 transition-all cursor-pointer">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              strokeWidth={2}
              stroke="currentColor"
              className="w-6 h-6 md:w-8 md:h-8"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M8.25 4.5l7.5 7.5-7.5 7.5"
              />
            </svg>
          </button>
        </div>

        {/* Custom Pagination */}
        <div className="swiper-pagination-custom absolute bottom-8 left-0 w-full flex justify-center z-20 gap-3"></div>

        {/* Pagination Styles */}
        <style>{`
            .swiper-pagination-custom .swiper-pagination-bullet {
                width: 10px;
                height: 10px;
                background-color: rgba(255, 255, 255, 0.4);
                border-radius: 50%;
                cursor: pointer;
                transition: all 0.3s ease;
            }
            .swiper-pagination-custom .swiper-pagination-bullet-active {
                background-color: white;
                transform: scale(1.3);
                width: 30px;
                border-radius: 5px;
            }
        `}</style>
      </Swiper>
    </section>
  );
};

export default BannerCarousel;
