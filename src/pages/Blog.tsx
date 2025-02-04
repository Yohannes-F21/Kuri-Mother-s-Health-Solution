import { useState } from "react";
import { Search } from "lucide-react";
import Modal from "../components/Modal";
import { Link } from "react-router-dom";
import axios from "axios";
import type { Blog } from "../../types";
import { useLoaderData, useNavigate } from "react-router-dom";

export const loader = async (): Promise<{ blogs: Blog }> => {
  const response = await axios({
    baseURL: "https://kuri-backend-ub77.onrender.com",
    url: "/blogs",
    method: "GET",
  });
  console.log(response);
  const blogs = response.data.blogs;
  // console.log(blogs);

  return { blogs };
};
const Blog = () => {
  const { blogs } = useLoaderData();
  console.log(blogs);
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
      img: blog.thumbnail,
    });
  };
  const closeModal = () => {
    setModalContent((prev) => ({
      ...prev,
      isOpen: false,
    }));
  };
  const formatDate = (isoString: string): string => {
    const date = new Date(isoString);
    return new Intl.DateTimeFormat("en-US", {
      year: "numeric",
      month: "long",
      day: "numeric",
    }).format(date);
  };
  const image = (url: string): string => {
    if (url === null) {
      return "https://images.unsplash.com/photo-1555252333-9f8e92e65df9";
    }
    return "https://kuri-backend-ub77.onrender.com/" + url;
  };

  console.log(image("uploads/thumbnail-1738575007162.jpg"));

  const [searchTerm, setSearchTerm] = useState<string>("");
  const [isSearching, setIsSearching] = useState<boolean>(false);
  const handleSearch = (value: any) => {
    console.log(value);

    setIsSearching(value.trim() !== "");
    setSearchTerm(value);
  };
  // if (searchTerm === "") {
  //   setIsSearching(false);
  // }

  // Filter blogs based on the search term
  const filteredBlogs = blogs.filter((blog: Blog) =>
    blog.title.toLowerCase().includes(searchTerm.toLowerCase())
  );
  return (
    <div className="w-full min-h-screen bg-white">
      <div className=" pt-24 w-full bg-[#faf7eb] relative overflow-hidden">
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
              onChange={(e) => handleSearch(e.target.value)}
              className="w-full px-6 py-4 rounded-full border border-gray-200 shadow-sm focus:outline-none focus:ring-2 focus:ring-[#FBC53F] pl-14"
            />
            <Search className="absolute left-5 top-1/2 transform -translate-y-1/2 text-gray-400" />
          </div>
        </div>
      </div>
      {/* Featured Article */}
      <div className={isSearching ? "hidden" : "block"}>
        <div className="max-w-7xl mx-auto px-4 py-12 ">
          <div className="bg-white rounded-2xl overflow-hidden shadow-lg">
            <div className="md:flex">
              <div className="md:w-1/2">
                <img
                  src={image(blogs?.[0].thumbnail)}
                  alt="Mother breastfeeding baby"
                  className="w-full h-[400px] object-cover"
                />
              </div>
              <div className="md:w-1/2 p-8">
                <span className="text-[#FBC53F] font-medium">
                  Featured Article
                </span>
                <h2 className="text-2xl font-semibold mt-2 mb-4">
                  {blogs?.[0].title}
                </h2>
                <p className="text-gray-600 mb-6 ">
                  {/* {blogs?.[0].content.substring(0, 100)} */}
                  <div
                    dangerouslySetInnerHTML={{
                      __html: blogs?.[0].content.substring(0, 300),
                    }}
                  />
                  <span className="text-2xl tracking-widest">...</span>
                </p>
                <div className="flex items-center justify-between">
                  <span className="text-gray-500">
                    {formatDate(blogs?.[0].updated)}
                  </span>
                  <button
                    onClick={() => openModal(blogs?.[0])}
                    className=" text-white px-6 py-2 rounded-full bg-[#104a52] hover:bg-[#2D3648] transition-colors"
                  >
                    Read More
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="max-w-7xl mx-auto px-4 py-12">
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {filteredBlogs.length === 0 ? (
            <p className="text-gray-500  text-center text-xl col-span-3">
              No blogs found. Please try a different search term!!!!
            </p>
          ) : (
            filteredBlogs
              .filter((blog: Blog) => blog.isPublished)
              .map((blog: Blog, index: number) => (
                <div
                  key={index}
                  className="bg-white rounded-xl overflow-hidden shadow-md hover:shadow-lg transition-shadow"
                >
                  <img
                    src={image(blog.thumbnail)}
                    alt="Blog post image"
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
                        Read More →
                      </button>
                    </div>
                  </div>
                </div>
              ))
          )}
        </div>
      </div>
      <div className="bg-[#faf7eb] w-full py-12">
        <div className="max-w-3xl mx-auto text-center px-4">
          <h3 className="text-2xl font-semibold mb-4">
            Looking for more tips?
          </h3>
          <p className="text-gray-600 mb-6">
            Join the Kuri Community for exclusive insights and support.
          </p>
          <Link to={"/contact-us"}>
            <button className=" text-white px-8 py-3 rounded-full bg-[#104a52] hover:bg-[#2D3648] transition-colors">
              Join Our Community
            </button>
          </Link>
        </div>
      </div>

      <Modal
        isOpen={modalContent.isOpen}
        onClose={closeModal}
        title={modalContent.title}
        content={modalContent.content}
        created={modalContent.created}
        img={modalContent.img}
      />
    </div>
  );
};
export default Blog;
