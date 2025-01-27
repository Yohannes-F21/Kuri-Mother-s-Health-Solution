import { Leaf } from "lucide-react";
const Products = () => {
  const products = [
    {
      name: "Anise Lactation Tea",
      description:
        "Boost your milk supply naturally with this refreshing blend of anise.",
      image:
        "https://images.unsplash.com/photo-1564890369478-c89ca6d9cde9?auto=format&fit=crop&q=80&w=500",
      benefits: [
        "Natural ingredients",
        "Proven effectiveness",
        "Pleasant taste",
      ],
    },
    {
      name: "Mint Lactation Tea",
      description: "A soothing blend to support your breastfeeding journey.",
      image:
        "https://images.unsplash.com/photo-1564890369478-c89ca6d9cde9?auto=format&fit=crop&q=80&w=500",
      benefits: ["Refreshing flavor", "Digestive support", "Caffeine free"],
    },
    {
      name: "Fenugreek Blend",
      description: "Traditional herbs combined for maximum effectiveness.",
      image:
        "https://images.unsplash.com/photo-1564890369478-c89ca6d9cde9?auto=format&fit=crop&q=80&w=500",
      benefits: [
        "Enhanced milk production",
        "Rich in nutrients",
        "Time-tested formula",
      ],
    },
    {
      name: "Lactation Cookies",
      description: "Delicious cookies with galactagogues",
      image: "https://images.unsplash.com/photo-1499636136210-6f4ee915583e",
      benefits: [
        "Natural ingredients",
        "Proven effectiveness",
        "Pleasant taste",
      ],
    },
    {
      name: "Supplements",
      description: "Essential nutrients for nursing mothers",
      image: "https://images.unsplash.com/photo-1471864190281-a93a3070b6de",
      benefits: [
        "Enhanced milk production",
        "Rich in nutrients",
        "Time-tested formula",
      ],
    },
  ];
  return (
    <div className="w-full">
      {/* Hero Section */}
      <section className="relative h-[500px] w-full overflow-hidden">
        <img
          src="https://images.unsplash.com/photo-1555252333-9f8e92e65df9?auto=format&fit=crop&q=80&w=1440"
          alt="Mother and baby"
          className="absolute inset-0 w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-black/30" />
        <div className="relative max-w-7xl mx-auto px-4 h-full flex flex-col justify-center">
          <h1 className="text-5xl font-bold text-white mb-4">
            Enhance Your Breastfeeding Journey with Our Natural Products
          </h1>
          <p className="text-xl text-white/90">
            Carefully crafted with organic, research-backed ingredients for
            effective results
          </p>
        </div>
      </section>
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
                  {product.benefits.map((benefit) => (
                    <li
                      key={benefit}
                      className="flex items-center text-gray-600"
                    >
                      <Leaf className="w-4 h-4 mr-2 text-green-500" />
                      {benefit}
                    </li>
                  ))}
                </ul>
                <button className="w-full bg-[#FFE5E5] text-gray-800 py-2 rounded-lg hover:bg-[#FFD1D1] transition-colors">
                  Learn More
                </button>
              </div>
            </div>
          ))}
        </div>
      </section>
      {/* CTA Section */}
      <section className="bg-[#FFFAF0] py-16">
        <div className="max-w-7xl mx-auto px-4 text-center">
          <h2 className="text-3xl font-semibold mb-6">
            Ready to empower your breastfeeding journey?
          </h2>
          <button className="bg-[#FFE5E5] text-gray-800 px-8 py-3 rounded-lg hover:bg-[#FFD1D1] transition-colors text-lg">
            Start Shopping
          </button>
        </div>
      </section>
    </div>
  );
};
export default Products;
