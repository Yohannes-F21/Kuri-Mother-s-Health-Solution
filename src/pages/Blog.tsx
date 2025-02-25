import { useState } from "react";
import { Search } from "lucide-react";
import Modal from "../components/Modal";
import { useLoaderData } from "react-router-dom";
import axios from "axios";
import type { Blog } from "../../types";
import "../i18n";
import { useTranslation } from "react-i18next";

export const loader = async (): Promise<{ blogs: Blog[] }> => {
  try {
    const response = await axios.get(
      "https://kuri-backend-ub77.onrender.com/blogs"
    );
    return { blogs: response.data.blogs || [] };
  } catch (error) {
    console.error("Error fetching blogs:", error);
    return { blogs: [] }; // Return empty array in case of an error
  }
};

const Blog = () => {
  const { t } = useTranslation();
  const { blogs } = useLoaderData() as { blogs: Blog[] };
  // const [loading, setLoading] = useState(true);
  const [searchTerm, setSearchTerm] = useState("");
  const [modalContent, setModalContent] = useState<{
    isOpen: boolean;
    title: string;
    content: string;
    created: string;
    img: string;
  }>({
    isOpen: false,
    title: "",
    content: "",
    created: "",
    img: "",
  });

  const openModal = (blog: Blog) => {
    setModalContent({
      isOpen: true,
      title: blog.title,
      content: blog.content,
      created: blog.created,
      img:
        blog.thumbnail ||
        "https://images.unsplash.com/photo-1555252333-9f8e92e65df9",
    });
  };

  const closeModal = () => {
    setModalContent((prev) => ({ ...prev, isOpen: false }));
  };

  const formatDate = (isoString: string): string => {
    if (!isoString) return "Unknown date";
    return new Intl.DateTimeFormat("en-US", {
      year: "numeric",
      month: "long",
      day: "numeric",
    }).format(new Date(isoString));
  };

  const handleSearch = (value: string) => {
    setSearchTerm(value.trim());
  };

  // Filter only published blogs
  const filteredBlogs = blogs
    .filter((blog) => blog.isPublished)
    .filter((blog) =>
      blog.title.toLowerCase().includes(searchTerm.toLowerCase())
    );

  return (
    <div className="w-full min-h-screen bg-white">
      {/* Header & Search */}
      <div className="pt-24 w-full bg-[#faf7eb] relative overflow-hidden">
        <div className="absolute inset-0 bg-[url('https://images.unsplash.com/photo-1555252333-9f8e92e65df9')] opacity-5" />
        <div className="max-w-7xl mx-auto px-4 py-16 relative">
          <h1 className="text-3xl md:text-5xl font-semibold text-center text-[#2D3648] mb-4">
            {t("blog_title")}
          </h1>
          <p className="text-xl text-center text-gray-600 mb-8">
            {t("blog_description")}
          </p>
          <div className="max-w-2xl mx-auto relative">
            <input
              type="text"
              placeholder={t("search_placeholder")}
              onChange={(e) => handleSearch(e.target.value)}
              className="w-full px-6 py-4 rounded-full border border-gray-200 shadow-sm focus:outline-none focus:ring-2 focus:ring-[#FBC53F] pl-14"
            />
            <Search className="absolute left-5 top-1/2 transform -translate-y-1/2 text-gray-400" />
          </div>
        </div>
      </div>

      {/* Featured Article */}
      {!searchTerm && blogs.length > 0 && (
        <div className="max-w-7xl mx-auto px-4 py-12">
          <div className="bg-white rounded-2xl overflow-hidden shadow-lg">
            <div className="md:flex">
              <div className="md:w-1/2">
                <img
                  src={
                    blogs[0].thumbnail ||
                    "https://images.unsplash.com/photo-1555252333-9f8e92e65df9"
                  }
                  alt="Featured blog"
                  className="w-full h-[400px] object-cover"
                />
              </div>
              <div className="md:w-1/2 p-8">
                <span className="text-[#FBC53F] font-medium">
                  {t("featured_article")}
                </span>
                <h2 className="text-2xl font-semibold mt-2 mb-4">
                  {blogs[0].title}
                </h2>
                <p className="text-gray-600 mb-6">
                  <div
                    dangerouslySetInnerHTML={{
                      __html: blogs[0].content.substring(0, 600),
                    }}
                  />
                  <span className="text-2xl tracking-widest">...</span>
                </p>
                <div className="flex flex-col md:flex-row items-center md:justify-between gap-4">
                  <span className="text-gray-500">
                    {formatDate(blogs[0].updated)}
                  </span>
                  <button
                    onClick={() => openModal(blogs[0])}
                    className="text-white px-6 py-2 rounded-full bg-[#104a52] hover:bg-[#2D3648] transition-colors"
                  >
                    {t("read_more")}
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
      )}

      {/* Blog Grid */}
      <div className="max-w-7xl mx-auto px-4 py-12">
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {filteredBlogs.length === 0 ? (
            <p className="text-gray-500 text-center text-xl col-span-3">
              {t("no_blogs_found")}
            </p>
          ) : (
            filteredBlogs.map((blog, index) => (
              <div
                key={index}
                className="bg-white rounded-xl overflow-hidden shadow-md hover:shadow-lg transition-shadow"
              >
                <img
                  src={
                    blog.thumbnail ||
                    "https://images.unsplash.com/photo-1555252333-9f8e92e65df9"
                  }
                  alt="Blog post"
                  className="w-full h-48 object-cover"
                />
                <div className="p-6">
                  <h3 className="text-xl font-semibold mb-2">{blog.title}</h3>
                  <p className="text-gray-600 mb-4">
                    <div
                      dangerouslySetInnerHTML={{
                        __html: blog.content.substring(0, 100),
                      }}
                    />
                  </p>
                  <div className="flex items-center justify-between">
                    <span className="text-gray-500">
                      {formatDate(blog.updated)}
                    </span>
                    <button
                      onClick={() => openModal(blog)}
                      className="text-[#FBC53F] hover:text-[#faaf18] font-medium"
                    >
                      {t("read_more")} →
                    </button>
                  </div>
                </div>
              </div>
            ))
          )}
        </div>
      </div>

      <Modal {...modalContent} onClose={closeModal} />
    </div>
  );
};

export default Blog;
