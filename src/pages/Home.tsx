import { Button } from "@/components/ui/button";
import {
  Heart,
  Leaf,
  Users,
  MessageCircle,
  ShoppingBag,
  ArrowRight,
} from "lucide-react";
import supplementImg from "../Assets/supplement.png";
import teaImg from "../Assets/Screenshot 2025-02-07 at 9.20.33 PM.png";

import PartnerCarousel from "@/components/HomePage/PartnerCarousel";
import { useTranslation } from "react-i18next";
import "../i18n";
import i18next from "i18next";

import Testimonials from "@/components/Testimonials";

const Home = () => {
  const { t } = useTranslation();
  const currentLanguage = i18next.language;
  console.log(currentLanguage);

  return (
    <div className="w-full   ">
      <section className=" p-4 sm:px-6 lg:px-8 h-[calc(100vh-80px)] flex items-center justify-center">
        <div className="max-w-7xl mx-auto h-full flex items-center justify-center">
          <div className="flex flex-col lg:flex-row items-center justify-center gap-10 lg:gap-5">
            <div className="flex-1 space-y-8">
              <h1
                className={`${
                  currentLanguage === "am"
                    ? "lg:text-3xl tracking-tighter"
                    : "lg:text-4xl"
                } text-3xl md:text-5xl   font-bold text-[#104a52] leading-relaxed`}
              >
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
                title: t("lactation_title"),
                image: teaImg,
                description: t("lactation_description"),
                comingSoon: false,
              },
              {
                title: t("cookies_title"),
                image:
                  "https://images.unsplash.com/photo-1499636136210-6f4ee915583e",
                description: t("cookies_description"),
                comingSoon: true,
              },
              {
                title: t("supplements_title"),
                image: supplementImg,
                description: t("supplements_description"),
                comingSoon: true,
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
                    {product.comingSoon ? t("coming_soon") : t("shop_btn")}
                  </Button>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
      <Testimonials />
      <section className="">
        <PartnerCarousel />
      </section>
      <section className="py-16 px-4 sm:px-6 lg:px-8 bg-[#2D3748] text-white">
        <div className="max-w-4xl mx-auto text-center flex flex-col items-center justify-center">
          <h2 className="text-3xl font-semibold mb-6">{t("join_community")}</h2>
          <p className="text-lg mb-8">{t("join_description")}</p>
          <a href="https://t.me/kurimother">
            <Button className="bg-white text-gray-900 hover:bg-gray-100 px-8 py-6 text-lg flex items-center justify-center w-[90%] mx-auto">
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
