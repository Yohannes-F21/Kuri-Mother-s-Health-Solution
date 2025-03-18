import { Heart, Leaf, Users, MessageCircle, ArrowRight } from "lucide-react";
import { Button } from "@/components/ui/button";
// import Hero from "@/components/AboutPage/Hero";
import image from "../Assets/kuri-about.jpg";
import { Link } from "react-router-dom";
import { useTranslation } from "react-i18next";
import "../i18n";
import i18next from "i18next";

const About = () => {
  const { t } = useTranslation();
  const currentLanguage = i18next.language;

  const features = [
    {
      icon: <Leaf className="w-6 h-6 text-[#104a52]" />,
      title: t("natural_products"),
      description: t("natural_products_description"),
    },
    {
      icon: <Heart className="w-6 h-6 text-[#104a52]" />,
      title: t("peer_support"),
      description: t("peer_support_description"),
    },
    {
      icon: <Users className="w-6 h-6 text-[#104a52]" />,
      title: t("expert_guidance"),
      description: t("expert_guidance_description"),
    },
    {
      icon: <MessageCircle className="w-6 h-6 text-[#104a52]" />,
      title: t("trusted_community"),
      description: t("trusted_community_description"),
    },
  ];

  return (
    <div className="w-full min-h-screen bg-white">
      <section className="  w-full ">
        <div className="max-w-6xl mx-auto px-4">
          <div className="flex  md:flex-row items-center md:gap-12">
            <div className="flex-1">
              <h1
                className={`${
                  currentLanguage === "am"
                    ? "lg:text-4xl tracking-tight"
                    : "lg:text-5xl"
                } text-3xl md:text-4xl  font-semibold text-[#104a52] mb-6`}
              >
                {t("about_us_title")}
              </h1>
              <p className="text-lg text-gray-800 mb-8">
                {t("about_us_description")}
              </p>

              <Button className="bg-[#104a52] text-white hover:bg-[#2D3648] px-8 py-6 text-lg group">
                <a href="https://t.me/kurimother">{t("welcome_btn")}</a>
                <ArrowRight className="ml-2 h-5 w-5 transition-transform duration-200 group-hover:translate-x-2" />
              </Button>
            </div>
            <div className="flex-1 py-20 hidden md:flex">
              {/* <Hero /> */}
              <div>
                <img
                  src={image}
                  alt="about"
                  className="w-[450px] h-[500px] rounded-e-3xl object-cover "
                />
              </div>
            </div>
          </div>
        </div>
      </section>
      <section className="w-full py-20">
        <div className="max-w-6xl mx-auto px-4">
          <div className="grid md:grid-cols-2 gap-12">
            <div className="bg-[#FFFBEB] p-8 rounded-2xl">
              <h2 className="text-2xl font-semibold mb-4">{t("mission")}</h2>
              <p className="text-gray-600">{t("mission_description")}</p>
            </div>
            <div className="bg-[#ECFDF5] p-8 rounded-2xl">
              <h2 className="text-2xl font-semibold mb-4">{t("vision")}</h2>
              <p className="text-gray-600">{t("vision_description")}</p>
            </div>
          </div>
        </div>
      </section>
      <section className="w-full bg-[#faf7eb] py-20">
        <div className="max-w-6xl mx-auto px-4">
          <h2 className="text-3xl font-semibold text-center mb-12">
            {t("why_choose_kuri")}
          </h2>
          <div className="grid md:grid-cols-4 gap-8">
            {features.map((feature, index) => (
              <div key={index} className="text-center">
                <div className="w-12 h-12 mx-auto mb-4 bg-white rounded-full flex items-center justify-center">
                  {feature.icon}
                </div>
                <h3 className="font-semibold mb-2">{feature.title}</h3>
                <p className="text-gray-600 text-sm">{feature.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>
      {/* place for our team */}
      <section className="w-full  py-20">
        <div className="max-w-3xl mx-auto px-4 text-center">
          <div className="text-5xl text-[#faaf18] mb-6">"</div>
          <p className="text-xl text-gray-600 mb-8">{t(`testimonial_text`)}</p>
          <div className="flex items-center justify-center gap-4">
            <img
              src="https://images.unsplash.com/photo-1531123897727-8f129e1688ce?auto=format&fit=crop&q=80"
              alt="Sarah"
              className="w-12 h-12 rounded-full object-cover"
            />
            <div className="text-left">
              <p className="font-semibold">{t(`testimonial_author`)}</p>
              <p className="text-sm text-gray-600">
                {t(`testimonial_author_description`)}
              </p>
            </div>
          </div>
        </div>
      </section>
      <section className="w-full py-20 bg-[#faf7eb]">
        <div className="max-w-2xl mx-auto px-4 text-center">
          <h2 className="text-3xl font-semibold mb-6">
            {t("community_title")}
          </h2>
          <p className="text-gray-600 mb-8">{t("community_description")}</p>
          <Link to={"/our-services"}>
            <Button className="bg-[#104a52] text-white hover:bg-[#2D3648] px-8 py-6 text-lg">
              {t("community_button")}
            </Button>
          </Link>
        </div>
      </section>
    </div>
  );
};

export default About;
