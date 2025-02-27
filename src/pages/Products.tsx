import { Leaf } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";
import { useTranslation } from "react-i18next";
import "../i18n";
import BannerCarousel from "@/components/ProductsPage/BannerCarousel";
import teaImg from "../Assets/Screenshot 2025-02-07 at 9.20.33 PM.png";
import supplementImg from "../Assets/supplement.png";

interface Product {
  name: string;
  description: string;
  image: string;
  benefits: string[]; // Ensure benefits is typed as an array of strings
}

const Products = () => {
  const { t } = useTranslation();
  const products: Product[] = [
    {
      name: t("anise_title"),
      description: t("anise_description"),
      image: teaImg,
      benefits: t("anise_features", { returnObjects: true }) as string[],
    },
    {
      name: t("mint_title"),
      description: t("mint_description"),
      image:
        "https://assets.clevelandclinic.org/transform/11a964aa-8c62-441a-acbd-7b5b49358203/Milk-Supply-Supplements-869682138-967x544-1_jpg",
      benefits: t("mint_features", { returnObjects: true }) as string[],
    },
    {
      name: t("fenugreek_title"),
      description: t("fenugreek_description"),
      image:
        "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQDpWUDiCw3DqxKn_6B6WKsAOh001ymKb5E4Q&s",
      benefits: t("fenugreek_features", { returnObjects: true }) as string[],
    },
    {
      name: t("cookies_title"),
      description: t("cookies_description"),
      image: "https://images.unsplash.com/photo-1499636136210-6f4ee915583e",
      benefits: t("cookies_features", { returnObjects: true }) as string[],
    },
    {
      name: t("supplements_title"),
      description: t("supplements_description"),
      image: supplementImg,
      benefits: t("supplements_features", { returnObjects: true }) as string[],
    },
  ];
  return (
    <div className="w-full">
      {/* Hero Section */}

      <BannerCarousel></BannerCarousel>
      {/* Products Grid */}
      <section className="max-w-7xl mx-auto px-4 py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {products.map((product) => (
            <div
              key={product.name}
              className="bg-white rounded-2xl overflow-hidden shadow-sm hover:shadow-md transition-shadow"
            >
              <img
                src={product.image}
                alt={product.name}
                className="w-full h-48 object-cover"
              />
              <div className="p-6">
                <h3 className="text-xl font-semibold mb-2">{product.name}</h3>
                <p className="text-gray-600 mb-4">{product.description}</p>
                <ul className="space-y-2 mb-6">
                  {product.benefits.map((benefit, index: number) => (
                    <li key={index} className="flex items-center text-gray-600">
                      <Leaf className="w-4 h-4 mr-2 text-green-500" />
                      {benefit}
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          ))}
        </div>
      </section>
      {/* CTA Section */}
      <section className="bg-[#FFFAF0] py-16">
        <div className="max-w-7xl mx-auto px-4 text-center">
          <h2 className="text-3xl font-semibold mb-6">{t("cta_title")}</h2>
          <Link to={"/contact-us"}>
            <Button className="bg-[#104a52] text-white hover:bg-[#2D3648] px-8 py-6 text-lg">
              {t("cta_button")}
            </Button>
          </Link>
        </div>
      </section>
    </div>
  );
};
export default Products;
