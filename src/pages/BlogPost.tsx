import { useEffect, useState } from "react";
import { useParams, useNavigate } from "react-router-dom";
import axios from "axios";
import { useTranslation } from "react-i18next";
import { ArrowLeft, Calendar, User, Clock } from "lucide-react";
import type { Blog } from "../../types";

const BlogPost = () => {
  const { id } = useParams<{ id: string }>();
  const navigate = useNavigate();
  const { i18n, t } = useTranslation();
  const currentLang = i18n.language;
  const [blog, setBlog] = useState<Blog | null>(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    let isMounted = true;
    const fetchBlog = async () => {
      try {
        setLoading(true);
        // Using "blogs" for both since we don't have distinct endpoints confirmed or need to keep consistent
        // with the 'id' which likely comes from _id field.
        const response = await axios.get(
          `https://kuri-backend-ub77.onrender.com/blogs/${id}`,
        );
        // The API returns { blog: ... } or just { ... }?
        // Let's assume response.data might be the object directly if backend is standard restful
        // Or response.data.blog like the list endpoint
        if (isMounted) {
          setBlog(response.data.blog || response.data);
        }
      } catch (err) {
        console.error("Error fetching blog post:", err);
        if (isMounted) setError("Failed to load article.");
      } finally {
        if (isMounted) setLoading(false);
      }
    };

    if (id) {
      fetchBlog();
    }
    return () => {
      isMounted = false;
    };
  }, [id]);

  const formatDate = (isoString?: string) => {
    if (!isoString) return "";
    return new Intl.DateTimeFormat(currentLang === "en" ? "en-US" : "am-ET", {
      year: "numeric",
      month: "long",
      day: "numeric",
    }).format(new Date(isoString));
  };

  if (loading) {
    return (
      <div className="max-w-4xl mx-auto px-4 py-12 animate-pulse">
        <div className="h-8 w-32 bg-gray-200 rounded mb-8" />
        <div className="w-full h-[400px] bg-gray-200 rounded-2xl mb-8" />
        <div className="h-10 w-3/4 bg-gray-200 rounded mb-4" />
        <div className="h-4 w-1/4 bg-gray-200 rounded mb-8" />
        <div className="space-y-4">
          <div className="h-4 w-full bg-gray-200 rounded" />
          <div className="h-4 w-full bg-gray-200 rounded" />
          <div className="h-4 w-5/6 bg-gray-200 rounded" />
        </div>
      </div>
    );
  }

  if (error || !blog) {
    return (
      <div className="max-w-4xl mx-auto px-4 py-12 text-center">
        <h2 className="text-2xl font-bold text-gray-800 mb-4">
          {error || "Article not found"}
        </h2>
        <button
          onClick={() => navigate(-1)}
          className="text-[#FBC53F] hover:underline font-medium"
        >
          {t("back_to_list") || "Go Back"}
        </button>
      </div>
    );
  }

  const title =
    currentLang === "en" ? blog.lang.english.title : blog.lang.amharic.title;
  const content =
    currentLang === "en"
      ? blog.lang.english.content
      : blog.lang.amharic.content;

  return (
    <div className="min-h-screen bg-gray-50 pb-20">
      {/* Hero Image Section */}
      <div className="relative w-full h-[400px] md:h-[500px] lg:h-[600px]">
        <img
          src={
            blog.thumbnail ||
            "https://images.unsplash.com/photo-1555252333-9f8e92e65df9"
          }
          alt={title}
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/20 to-transparent" />

        <div className="absolute top-8 left-4 md:left-8 hidden md:block">
          <button
            onClick={() => navigate(-1)}
            className="flex items-center gap-2 px-4 py-2 bg-white/20 hover:bg-white/30 backdrop-blur-sm text-white rounded-full transition-all"
          >
            <ArrowLeft size={18} />
            <span>{t("back") || "Back"}</span>
          </button>
        </div>

        <div className="absolute bottom-0 left-0 w-full max-w-7xl mx-auto px-4 py-12 md:px-8">
          <div className="max-w-4xl">
            <span className="inline-block px-3 py-1 bg-[#FBC53F] text-black text-sm font-semibold rounded-full mb-4 capitalize">
              {blog.category}
            </span>
            <h1 className="text-3xl md:text-4xl lg:text-5xl font-bold text-white mb-6 leading-tight">
              {title}
            </h1>
            <div className="flex flex-wrap items-center gap-6 text-white/90">
              <div className="flex items-center gap-2">
                <User size={18} />
                <span>{blog.author?.name || "Kuri Team"}</span>
              </div>
              <div className="flex items-center gap-2">
                <Calendar size={18} />
                <span>{formatDate(blog.created || blog.updated)}</span>
              </div>
              {/* Optional: Read time calculation could go here */}
            </div>
          </div>
        </div>
      </div>

      {/* Content Section */}
      <article className="max-w-4xl mx-auto px-4 -mt-10 relative z-10">
        <div className="bg-white rounded-2xl shadow-xl p-6 md:p-12">
          <div
            className="prose prose-lg md:prose-xl max-w-none prose-headings:text-[#2D3648] prose-a:text-[#FBC53F] prose-img:rounded-xl"
            dangerouslySetInnerHTML={{ __html: content }}
          />
        </div>
      </article>

      {/* Share/Navigation Footer - Optional */}
      {/* <div className="max-w-4xl mx-auto px-4 mt-12 flex justify-between items-center">
          ... sharing buttons etc.
      </div> */}
    </div>
  );
};

export default BlogPost;
