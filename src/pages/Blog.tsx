import { useState } from "react";
import { Search } from "lucide-react";
import Modal from "../components/Modal";
const sampleArticle = {
  featured: {
    title: "Is Breastfeeding Still the Best Choice?",
    content: `Recent scientific studies continue to support what generations of mothers have known: breastfeeding provides optimal nutrition for infants while creating a unique bond between mother and child.
Research published in the Journal of Maternal Health shows that breast milk adapts its immunological composition based on environmental pathogens that the mother and baby are exposed to, providing custom-made protection for the infant.
Additionally, breastfeeding has been linked to numerous health benefits for mothers, including reduced risk of breast cancer, ovarian cancer, and type 2 diabetes. The hormones released during breastfeeding also promote emotional well-being and can help reduce the risk of postpartum depression.
However, it's important to acknowledge that every mother's journey is unique, and various factors can influence feeding choices. The key is to make an informed decision based on individual circumstances while ensuring proper support and guidance.
This article explores the latest research, practical considerations, and support systems available to help mothers make the best choice for themselves and their babies.`,
    date: "January 24, 2025",
  },
  regular: {
    title: "Natural Ways to Increase Milk Supply",
    content: `Understanding and managing milk supply is a common concern for breastfeeding mothers. This comprehensive guide explores evidence-based methods to naturally enhance milk production.
Key strategies include:
- Frequent nursing or pumping sessions
- Proper lactation nutrition
- Adequate hydration
- Rest and stress management
- Herbal supplements (under professional guidance)
We'll explore each of these methods in detail, providing practical tips and scientific backing for their effectiveness. Remember that every mother's body responds differently, and what works for one may not work for another.
Our expert lactation consultants recommend starting with the basics: ensuring proper latch, feeding on demand, and maintaining a comfortable, stress-free environment for nursing.`,
    date: "January 20, 2025",
  },
};
const Blog = () => {
  const [modalContent, setModalContent] = useState<{
    isOpen: boolean;
    title: string;
    content: string;
    date: string;
  }>({
    isOpen: false,
    title: "",
    content: "",
    date: "",
  });
  const openModal = (article: typeof sampleArticle.featured) => {
    setModalContent({
      isOpen: true,
      title: article.title,
      content: article.content,
      date: article.date,
    });
  };
  const closeModal = () => {
    setModalContent((prev) => ({
      ...prev,
      isOpen: false,
    }));
  };
  return (
    <div className="w-full min-h-screen bg-white">
      <div className=" pt-24 w-full bg-[#FDF6F8] relative overflow-hidden">
        <div className="absolute inset-0 bg-[url('https://images.unsplash.com/photo-1555252333-9f8e92e65df9')] opacity-5" />
        <div className="max-w-7xl mx-auto px-4 py-16 relative">
          <h1 className="text-4xl md:text-5xl font-semibold text-center text-[#2D3648] mb-4">
            Kuri Blog: Latest Insights on Breastfeeding and Motherhood
          </h1>
          <p className="text-xl text-center text-gray-600 mb-8">
            Empowering mothers with knowledge, one article at a time.
          </p>
          <div className="max-w-2xl mx-auto relative">
            <input
              type="text"
              placeholder="Search articles by topic, keyword, or date..."
              className="w-full px-6 py-4 rounded-full border border-gray-200 shadow-sm focus:outline-none focus:ring-2 focus:ring-[#F4C5D3] pl-14"
            />
            <Search className="absolute left-5 top-1/2 transform -translate-y-1/2 text-gray-400" />
          </div>
        </div>
      </div>
      <div className="max-w-7xl mx-auto px-4 py-12">
        <div className="bg-white rounded-2xl overflow-hidden shadow-lg">
          <div className="md:flex">
            <div className="md:w-1/2">
              <img
                src="https://images.unsplash.com/photo-1555252333-9f8e92e65df9"
                alt="Mother breastfeeding baby"
                className="w-full h-[400px] object-cover"
              />
            </div>
            <div className="md:w-1/2 p-8">
              <span className="text-[#F4C5D3] font-medium">
                Featured Article
              </span>
              <h2 className="text-2xl font-semibold mt-2 mb-4">
                {sampleArticle.featured.title}
              </h2>
              <p className="text-gray-600 mb-6">
                Discover the latest research and evidence-based insights about
                the benefits of breastfeeding for both mother and child. We
                explore the scientific backing behind this natural nurturing
                process...
              </p>
              <div className="flex items-center justify-between">
                <span className="text-gray-500">
                  {sampleArticle.featured.date}
                </span>
                <button
                  onClick={() => openModal(sampleArticle.featured)}
                  className=" text-white px-6 py-2 rounded-full bg-[#F43F5E] hover:bg-[#E11D48] transition-colors"
                >
                  Read More
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="max-w-7xl mx-auto px-4 py-12">
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {[1, 2, 3, 4, 5, 6].map((item) => (
            <div
              key={item}
              className="bg-white rounded-xl overflow-hidden shadow-md hover:shadow-lg transition-shadow"
            >
              <img
                src={`https://images.unsplash.com/photo-${
                  item === 1
                    ? "1516627145497-ae6968895b74"
                    : item === 2
                    ? "1543396436-8633f99c8813"
                    : "1555252333-9f8e92e65df9"
                }`}
                alt="Blog post image"
                className="w-full h-48 object-cover"
              />
              <div className="p-6">
                <h3 className="text-xl font-semibold mb-2">
                  {sampleArticle.regular.title}
                </h3>
                <p className="text-gray-600 mb-4">
                  Learn about effective natural methods to boost your milk
                  production and ensure your baby gets the nutrition they
                  need...
                </p>
                <div className="flex items-center justify-between">
                  <span className="text-gray-500">
                    {sampleArticle.regular.date}
                  </span>
                  <button
                    onClick={() => openModal(sampleArticle.regular)}
                    className="text-[#F4C5D3] hover:text-[#E4B5C3] font-medium"
                  >
                    Read More →
                  </button>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
      <div className="bg-[#FDF6F8] w-full py-12">
        <div className="max-w-3xl mx-auto text-center px-4">
          <h3 className="text-2xl font-semibold mb-4">
            Looking for more tips?
          </h3>
          <p className="text-gray-600 mb-6">
            Join the Kuri Community for exclusive insights and support.
          </p>
          <button className=" text-white px-8 py-3 rounded-full bg-[#F43F5E] hover:bg-[#E11D48] transition-colors">
            Join Our Community
          </button>
        </div>
      </div>

      <Modal
        isOpen={modalContent.isOpen}
        onClose={closeModal}
        title={modalContent.title}
        content={modalContent.content}
        date={modalContent.date}
      />
    </div>
  );
};
export default Blog;
