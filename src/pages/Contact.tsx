import { useState } from "react";
import { Phone, Mail, MessageCircle } from "lucide-react";
import axios from "axios";
import "../i18n";
import { useTranslation } from "react-i18next";
// import banner3 from "../assets/kuri-banner-3.jpg";
import banImg from "../Assets/kuri-banner-3.jpg";

const Contact = () => {
  const { t } = useTranslation();
  // Form state
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    subject: "",
    message: "",
  });

  const [status, setStatus] = useState({ success: false, message: "" });

  // Handle input changes
  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  // Handle form submission
  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setStatus({ success: false, message: "Sending..." });

    try {
      await axios.post(
        "https://kuri-backend-ub77.onrender.com/contact-us",
        formData
      ); // Replace with your API
      setStatus({ success: true, message: t("success_message") });
      setFormData({ name: "", email: "", subject: "", message: "" }); // Clear form
    } catch (error) {
      console.error("Error sending message:", error);
      setStatus({
        success: false,
        message: t("error_message"),
      });
    }
  };

  return (
    <div className="w-full">
      {/* Hero Section */}
      <section className="relative  h-[calc(100vh-80px)] w-full overflow-hidden">
        <img
          src={banImg}
          alt="Mother and baby"
          className="absolute inset-0 w-full h-full object-fill"
        />
        <div className="absolute pt-2 inset-0 bg-black/30" />
        <div className="relative max-w-7xl mx-auto px-4 h-full flex flex-col justify-center">
          <h1 className="text-5xl font-bold text-white mb-4 text-center">
            {t("hero_title")}
          </h1>
          <p className="text-xl text-white/90 text-center">
            {t("hero_subtitle")}
          </p>
        </div>
      </section>

      <div className="max-w-7xl mx-auto px-4 py-16">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16">
          {/* Contact Information */}
          <div>
            <h2 className="text-3xl font-semibold mb-8">{t("get_in_touch")}</h2>
            <div className="space-y-6">
              <div className="flex items-center">
                <Phone className="w-6 h-6 mr-4 text-gray-600" />
                <span className="text-lg">+251933935593</span>
              </div>
              <div className="flex items-center">
                <Mail className="w-6 h-6 mr-4 text-gray-600" />
                <span className="text-lg">support@kurimother.com</span>
              </div>
              <div className="flex items-center">
                <MessageCircle className="w-6 h-6 mr-4 text-gray-600" />
                <a href="https://t.me/kuri_mother">
                  <button className="bg-[#104a52] text-white px-6 py-2 rounded-lg hover:bg-[#2D3648] transition-colors">
                    {t("telegram_group")}
                  </button>
                </a>
              </div>
            </div>
          </div>

          {/* Contact Form */}
          <div className="bg-white p-8 rounded-2xl shadow-sm">
            <h2 className="text-2xl font-semibold mb-6">
              {t("contact_form_title")}
            </h2>
            <form onSubmit={handleSubmit} className="space-y-6">
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-1">
                  {t("name")}
                </label>
                <input
                  type="text"
                  name="name"
                  value={formData.name}
                  onChange={handleChange}
                  required
                  className="w-full px-4 py-2 rounded-lg border border-gray-300 focus:outline-none focus:ring-2 focus:ring-[#FFE5E5]"
                />
              </div>
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-1">
                  {t("email")}
                </label>
                <input
                  type="email"
                  name="email"
                  value={formData.email}
                  onChange={handleChange}
                  required
                  className="w-full px-4 py-2 rounded-lg border border-gray-300 focus:outline-none focus:ring-2 focus:ring-[#FFE5E5]"
                />
              </div>
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-1">
                  {t("subject")}
                </label>
                <input
                  type="text"
                  name="subject"
                  value={formData.subject}
                  onChange={handleChange}
                  required
                  className="w-full px-4 py-2 rounded-lg border border-gray-300 focus:outline-none focus:ring-2 focus:ring-[#FFE5E5]"
                />
              </div>
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-1">
                  {t("message")}
                </label>
                <textarea
                  name="message"
                  rows={4}
                  value={formData.message}
                  onChange={handleChange}
                  required
                  className="w-full px-4 py-2 rounded-lg border border-gray-300 focus:outline-none focus:ring-2 focus:ring-[#FFE5E5]"
                />
              </div>
              <button
                type="submit"
                className="w-full bg-[#104a52] text-white py-3 rounded-lg hover:bg-[#2D3648] transition-colors"
              >
                {t("send_message")}
              </button>
            </form>

            {/* Status Message */}
            {status.message && (
              <p
                className={`mt-4 text-center ${
                  status.success ? "text-green-600" : "text-red-600"
                }`}
              >
                {status.message}
              </p>
            )}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Contact;
