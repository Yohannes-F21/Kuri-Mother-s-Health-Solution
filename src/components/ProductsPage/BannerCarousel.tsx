import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay, Navigation, Pagination } from "swiper/modules";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import "../../i18n";
import { t } from "i18next";

// Import banner images
import banner1 from "../../Assets/Kuri Packaging_3 Box_Mockup.jpg";
import banner2 from "../../Assets/Screenshot 2025-02-07 at 9.20.33 PM.png";
import banner3 from "../../Assets/supplement.png";

const BannerCarousel = () => {
  const banners = [banner1, banner2, banner3]; // Add your banner images here

  return (
    <section className="relative h-[calc(100vh-80px)] w-full overflow-hidden">
      <Swiper
        modules={[Autoplay, Navigation, Pagination]}
        autoplay={{ delay: 3000, disableOnInteraction: false }}
        loop={true}
        navigation
        pagination={{ clickable: true }}
        className="w-full h-full"
      >
        {banners.map((banner, index) => (
          <SwiperSlide key={index} className="relative">
            <img
              src={banner}
              alt={`Banner ${index + 1}`}
              className="absolute inset-0 w-full h-full object-fill"
            />
            <div className="absolute inset-0 bg-black/30" />
            <div className="relative max-w-7xl mx-auto px-4 h-full flex flex-col justify-center items-center">
              <h1 className="text-2xl md:text-5xl font-bold text-white mb-4 text-center">
                {t("product_description")}
              </h1>
              <p className="text-lg md:text-xl text-white/90 text-center">
                {t("product_details")}
              </p>
            </div>
          </SwiperSlide>
        ))}
      </Swiper>
    </section>
  );
};

export default BannerCarousel;
