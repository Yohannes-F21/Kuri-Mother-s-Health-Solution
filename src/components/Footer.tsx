import { Facebook, Instagram, Linkedin } from "lucide-react";
import { MingcuteTelegramFill } from "./TelegramIcon";
import { Link } from "react-router-dom";
import { useTranslation } from "react-i18next";
import "../i18n";

const Footer = () => {
  const { t } = useTranslation();

  return (
    <footer className="bg-white border-t ">
      <div className=" px-4 sm:px-6 lg:px-8 py-12 flex flex-col  items-center sm:flex-row sm:justify-center">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          <div>
            <h3 className="text-xl font-semibold mb-4 text-center sm:text-left">
              {t("brand_name")}
            </h3>
            <p className="text-gray-600 ">{t("brand_description")}</p>
          </div>
          <div>
            <h4 className="font-semibold mb-4 text-center sm:text-left">
              {t("quick_links")}
            </h4>
            <ul className="space-y-2 text-center sm:text-left">
              <li>
                <Link
                  to="/about-us"
                  className="text-gray-600 hover:text-gray-900"
                >
                  {t("about_us")}
                </Link>
              </li>
              <li>
                <Link
                  to="/our-products"
                  className="text-gray-600 hover:text-gray-900"
                >
                  {t("products_title")}
                </Link>
              </li>
              <li>
                <Link to="/blogs" className="text-gray-600 hover:text-gray-900">
                  {t("blog")}
                </Link>
              </li>
              <li>
                <Link
                  to="/contact-us"
                  className="text-gray-600 hover:text-gray-900"
                >
                  {t("contact_us")}
                </Link>
              </li>
            </ul>
          </div>
          <div>
            <h4 className="font-semibold mb-4 text-center sm:text-left">
              {t("contact")}
            </h4>
            <ul className="space-y-2 text-center sm:text-left">
              <li className="text-gray-600">{t("address")}</li>
              <li className="text-gray-600">info@kurihealth.com</li>
              <li className="text-gray-600">+251 911 123 456</li>
            </ul>
          </div>
          <div>
            <h4 className="font-semibold mb-4 text-center sm:text-left">
              {t("follow_us")}
            </h4>
            <div className="flex space-x-4 justify-center sm:justify-start">
              <a
                href="https://t.me/kurimother"
                className="text-gray-600 hover:text-[#104a52] "
              >
                <MingcuteTelegramFill className="h-6 w-6" />
              </a>
              <a
                href="https://www.facebook.com/share/1AmEY4HXwZ/?mibextid=wwXIfr"
                className="text-gray-600 hover:text-[#104a52] "
              >
                <Facebook className="h-6 w-6 " />
              </a>
              <a
                href="https://www.instagram.com/kuri_mothers?igsh=MThzdzYzYTk3ZGJlbg%3D%3D&utm_source=qr"
                className="text-gray-600 hover:text-[#104a52]"
              >
                <Instagram className="h-6 w-6" />
              </a>
              <a
                href="https://www.linkedin.com/company/kuri-mothers-health-solution/"
                className="text-gray-600 hover:text-[#104a52]"
              >
                <Linkedin className="h-6 w-6" />
              </a>
            </div>
          </div>
        </div>
      </div>
      <div className="py-8 flex items-center justify-center border-t text-center text-gray-600  ">
        <p> {t("copyright")}</p>
      </div>
    </footer>
  );
};

export default Footer;
