import { Heart, Users, ArrowRight } from "lucide-react";
import { RiGuideLine } from "../components/GuidanceIcon";
import { HugeiconsPeerToPeer02 } from "../components/PeerNetworkIcon";
import "../i18n";
import { useTranslation } from "react-i18next";
// import banner2 from "../Assets/kuri-banner-2.jpeg";
import doctorsImg from "../Assets/doctors.jpg";
import { NavLink } from "react-router-dom";
import Testimonials from "@/components/Testimonials";

function OurServices() {
  const { t } = useTranslation();
  return (
    <div className="w-full min-h-screen bg-white">
      <section className="relative  h-[calc(100vh-80px)] w-full overflow-hidden">
        <img
          src={doctorsImg}
          alt="Mother and baby"
          className="absolute inset-0 w-full h-full object-fill"
        />
        <div className="absolute inset-0 bg-black/30" />
        <div className="relative max-w-7xl mx-auto px-4 h-full flex flex-col justify-center items-center">
          <h1 className="text-3xl md:text-5xl font-bold text-white mb-4 text-center">
            {t("digital_platform_title")}
          </h1>
          <p className=" text-lg md:text-xl text-white/90 text-center">
            {t("digital_platform_description")}
          </p>
        </div>
      </section>
      <section className="py-20 px-4 bg-white">
        <div className="max-w-6xl mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <div className="p-8 rounded-2xl bg-[#FDF8F6] transition-transform hover:scale-[1.02]">
              <Heart className="w-12 h-12 text-[#E68EA3] mb-4" />
              <h3 className="text-2xl font-bold text-[#2D3648] mb-3">
                {t("expert_guidance_title")}
              </h3>
              <p className="text-[#4A5568] mb-6">
                {t("expert_guidance_description2")}
              </p>
              <NavLink to={"/contact-us"}>
                <button className="inline-flex items-center px-6 py-3 bg-[#E68EA3] text-white rounded-full hover:bg-[#d47a91] transition-colors">
                  {t("book_btn")}

                  <ArrowRight className="ml-2 w-4 h-4" />
                </button>
              </NavLink>
            </div>
            <div className="p-8 rounded-2xl bg-[#F0F7FF] transition-transform hover:scale-[1.02]">
              <HugeiconsPeerToPeer02 className="w-12 h-12 text-[#7EB6FF] mb-4" />
              <h3 className="text-2xl font-bold text-[#2D3648] mb-3">
                {t("peer_support_title")}
              </h3>
              <p className="text-[#4A5568] mb-6">
                {t("peer_support_description2")}
              </p>
              <a href="https://t.me/kurimother">
                <button className="inline-flex items-center px-6 py-3 bg-[#7EB6FF] text-white rounded-full hover:bg-[#6da1f1] transition-colors">
                  {t("join_community")}
                  <ArrowRight className="ml-2 w-4 h-4" />
                </button>
              </a>
            </div>
            <div className="p-8 rounded-2xl bg-[#F5F8F2] transition-transform hover:scale-[1.02]">
              <RiGuideLine className="w-12 h-12 text-[#8BC34A] mb-4" />
              <h3 className="text-2xl font-bold text-[#2D3648] mb-3">
                {t("breastfeeding_nutrition_guidance")}
              </h3>
              <p className="text-[#4A5568] mb-6">
                {t("breastfeeding_nutrition_description")}
              </p>
              <NavLink to="/blogs">
                <button className="inline-flex items-center px-6 py-3 bg-[#8BC34A] text-white rounded-full hover:bg-[#7baf3d] transition-colors">
                  {t("learn_more")}
                  <ArrowRight className="ml-2 w-4 h-4" />
                </button>
              </NavLink>
            </div>
            <div className="p-8 rounded-2xl bg-[#FFF5F5] transition-transform hover:scale-[1.02]">
              <Users className="w-12 h-12 text-[#FF8A80] mb-4" />
              <h3 className="text-2xl font-bold text-[#2D3648] mb-3">
                {t("trusted_community_title")}
              </h3>
              <p className="text-[#4A5568] mb-6">
                {t("trusted_community_description2")}
              </p>
              <a href="https://t.me/kurimother">
                <button className="inline-flex items-center px-6 py-3 bg-[#FF8A80] text-white rounded-full hover:bg-[#ff7567] transition-colors">
                  {t("join_community")}
                  <ArrowRight className="ml-2 w-4 h-4" />
                </button>
              </a>
            </div>
          </div>
        </div>
      </section>
      <Testimonials />
      <section className="py-20 bg-[#2D3648] text-white text-center">
        <div className="max-w-4xl mx-auto px-4">
          <h2 className="text-3xl font-bold mb-6">
            {t("start_motherhood_journey")}
          </h2>

          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <a href="https://t.me/kurimother">
              <button className="px-8 py-4 bg-white text-[#2D3648] rounded-full hover:bg-gray-100 transition-colors">
                {t("join_support_group")}
              </button>
            </a>
          </div>
        </div>
      </section>
    </div>
  );
}

export default OurServices;
