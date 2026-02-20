import { useEffect, useState } from "react";
import { Search } from "lucide-react";
import { useNavigate } from "react-router-dom";
import axios from "axios";
import type { Blog } from "../../types";
import "../i18n";
import { useTranslation } from "react-i18next";

const News = () => {
  const { i18n, t } = useTranslation();
  const currentLang = i18n.language;
  const navigate = useNavigate();
  console.log(currentLang);
  const [blogs, setBlogs] = useState<Blog[]>([]);
  const [loading, setLoading] = useState(true);
  const [fetchError, setFetchError] = useState<string | null>(null);
  const [searchTerm, setSearchTerm] = useState("");

  const navigateToNews = (id: string) => {
    navigate(`/news/${id}`);
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

  useEffect(() => {
    let isMounted = true;

    const fetchNews = async () => {
      setLoading(true);
      setFetchError(null);
      try {
        const response = await axios.get(
          "https://kuri-backend-ub77.onrender.com/blogs",
        );
        const list = response.data?.blogs || [];
        if (isMounted) setBlogs(list);
      } catch (error) {
        console.error("Error fetching news:", error);
        if (isMounted) {
          setBlogs([]);
          setFetchError("Failed to load news. Please try again.");
        }
      } finally {
        if (isMounted) setLoading(false);
      }
    };

    fetchNews();

    return () => {
      isMounted = false;
    };
  }, []);

  // Filter only published blogs
  const filteredBlogs = blogs
    .filter((blog) => blog.isPublished)
    .filter((blog) => blog.category === "news")
    .filter((blog) =>
      blog.lang.english.title.toLowerCase().includes(searchTerm.toLowerCase()),
    );

  const featuredNews = blogs.find((blog) => blog.category === "news");

  const FeaturedSkeleton = () => (
    <div className="max-w-7xl mx-auto px-4 animate-pulse">
      <div className="bg-white rounded-2xl overflow-hidden shadow-lg">
        <div className="md:flex">
          <div className="md:w-1/2">
            <div className="w-full min-h-[470px] bg-gray-200" />
          </div>
          <div className="md:w-1/2 p-8 relative">
            <div className="h-4 w-32 bg-gray-200 rounded" />
            <div className="mt-4 h-7 w-3/4 bg-gray-200 rounded" />
            <div className="mt-6 space-y-3">
              <div className="h-4 w-full bg-gray-200 rounded" />
              <div className="h-4 w-11/12 bg-gray-200 rounded" />
              <div className="h-4 w-10/12 bg-gray-200 rounded" />
              <div className="h-4 w-9/12 bg-gray-200 rounded" />
            </div>
            <div className="absolute bottom-0 left-0 w-full px-4 pb-4">
              <div className="flex flex-col md:flex-row items-center md:justify-between gap-4">
                <div className="h-4 w-32 bg-gray-200 rounded" />
                <div className="h-10 w-28 bg-gray-200 rounded-full" />
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );

  const CardSkeleton = ({ index }: { index: number }) => (
    <div
      key={index}
      className="bg-white rounded-xl overflow-hidden shadow-md flex flex-col h-full animate-pulse"
    >
      <div className="w-full h-48 bg-gray-200" />
      <div className="p-6 flex flex-col flex-grow">
        <div className="h-5 w-3/4 bg-gray-200 rounded" />
        <div className="mt-4 space-y-3 flex-grow">
          <div className="h-4 w-full bg-gray-200 rounded" />
          <div className="h-4 w-11/12 bg-gray-200 rounded" />
          <div className="h-4 w-10/12 bg-gray-200 rounded" />
        </div>
        <div className="flex items-center justify-between mt-4">
          <div className="h-4 w-24 bg-gray-200 rounded" />
          <div className="h-4 w-20 bg-gray-200 rounded" />
        </div>
      </div>
    </div>
  );

  return (
    <div className="w-full min-h-screen bg-white">
      {/* Header & Search */}
      <div className=" w-full  relative overflow-hidden">
        <div className="max-w-7xl mx-auto px-4 py-8 md:py-16 relative">
          {/* <h1 className="text-3xl md:text-5xl font-semibold text-center text-[#2D3648] mb-4">
            {t("blog_title")}
          </h1>
          <p className="text-xl text-center text-gray-600 mb-8">
            {t("blog_description")}
          </p> */}
          <div className="max-w-2xl mx-auto relative">
            <input
              type="text"
              placeholder={t("search_placeholder_news")}
              onChange={(e) => handleSearch(e.target.value)}
              className="w-full px-6 py-4 drop-shadow-xl rounded-full border border-gray-200 shadow-sm focus:outline-none focus:ring-2 focus:ring-[#FBC53F] pl-14"
            />
            <Search className="absolute left-5 top-1/2 transform -translate-y-1/2 text-gray-400" />
          </div>
        </div>
      </div>

      {/* Featured Article */}
      {!searchTerm && loading && <FeaturedSkeleton />}

      {!searchTerm && !loading && featuredNews && (
        <div className="max-w-7xl mx-auto px-4 ">
          <div className="bg-white rounded-2xl overflow-hidden shadow-lg">
            <div className="md:flex">
              <div className="md:w-1/2">
                <img
                  src={
                    featuredNews.thumbnail ||
                    "https://images.unsplash.com/photo-1555252333-9f8e92e65df9"
                  }
                  alt="Featured blog"
                  className="w-full h-full min-h-[470px] object-cover"
                />
              </div>
              <div className="md:w-1/2 p-8 relative">
                <span className="text-[#FBC53F] font-medium">
                  {t("featured_news")}
                </span>
                <h2 className="text-2xl font-semibold mt-2 mb-4">
                  {currentLang === "en"
                    ? featuredNews.lang.english.title
                    : featuredNews.lang.amharic.title}
                </h2>
                <div className="text-gray-600 mb-6">
                  <div
                    dangerouslySetInnerHTML={{
                      __html:
                        currentLang === "en"
                          ? featuredNews.lang.english.content.substring(0, 600)
                          : featuredNews.lang.amharic.content.substring(0, 600),
                    }}
                  />
                  <span className="text-2xl tracking-widest">...</span>
                </div>

                <div className="absolute bottom-0 left-0 w-full px-4 pb-4">
                  <div className="flex flex-col md:flex-row items-center md:justify-between gap-4">
                    <span className="text-gray-500">
                      {formatDate(featuredNews.updated)}
                    </span>
                    <button
                      onClick={() => navigateToNews(featuredNews._id)}
                      className="text-white px-6 py-2 rounded-full bg-[#104a52] hover:bg-[#2D3648] transition-colors"
                    >
                      {t("read_more")}
                    </button>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      )}

      {/* Blog Grid */}
      <div className="max-w-7xl mx-auto px-4 py-12">
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {loading ? (
            Array.from({ length: 6 }).map((_, index) => (
              <CardSkeleton key={index} index={index} />
            ))
          ) : fetchError ? (
            <p className="text-gray-500 text-center text-xl col-span-3">
              {fetchError}
            </p>
          ) : filteredBlogs.length === 0 ? (
            <p className="text-gray-500 text-center text-xl col-span-3">
              {t("no_news_found")}
            </p>
          ) : (
            filteredBlogs.map((blog, index) => (
              <div
                key={index}
                className="bg-white rounded-xl overflow-hidden shadow-md hover:shadow-lg transition-shadow flex flex-col h-full"
              >
                <img
                  src={
                    blog.thumbnail ||
                    "https://images.unsplash.com/photo-1555252333-9f8e92e65df9"
                  }
                  alt="Blog post"
                  className="w-full h-48 object-cover"
                />
                <div className="p-6 flex flex-col flex-grow">
                  <h3 className="text-xl font-semibold mb-2">
                    {currentLang === "en"
                      ? blog.lang.english.title
                      : blog.lang.amharic.title}
                  </h3>
                  <div className="text-gray-600 mb-4 flex-grow">
                    <div
                      dangerouslySetInnerHTML={{
                        __html:
                          currentLang === "en"
                            ? blog.lang.english.content.substring(0, 200)
                            : blog.lang.amharic.content.substring(0, 200),
                      }}
                    />
                  </div>
                  <div className="flex items-center justify-between mt-auto">
                    <span className="text-gray-500">
                      {formatDate(blog.updated)}
                    </span>
                    <button
                      onClick={() => navigateToNews(blog._id)}
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
    </div>
  );
};

export default News;
