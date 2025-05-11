const BlogSkeleton = () => {
  return (
    <div className="bg-white rounded-xl overflow-hidden shadow-md hover:shadow-lg transition-shadow animate-pulse">
      {/* Image skeleton */}
      <div className="w-full h-48 bg-gray-300"></div>

      {/* Text content skeleton */}
      <div className="p-6 space-y-4">
        <div className="h-6 w-3/4 bg-gray-300 rounded"></div> {/* Title */}
        <div className="space-y-2">
          <div className="h-4 w-full bg-gray-300 rounded"></div>
          <div className="h-4 w-5/6 bg-gray-300 rounded"></div>
        </div>
        {/* Bottom section: date + button */}
        <div className="flex items-center justify-between mt-6">
          <div className="h-4 w-20 bg-gray-300 rounded"></div> {/* Date */}
          <div className="h-6 w-16 bg-gray-300 rounded"></div> {/* Read more */}
        </div>
      </div>
    </div>
  );
};

export default BlogSkeleton;
