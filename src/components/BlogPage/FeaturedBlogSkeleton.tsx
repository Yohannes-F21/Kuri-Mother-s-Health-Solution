const FeaturedBlogSkeleton = () => {
  return (
    <div className="max-w-7xl mx-auto px-4 py-12">
      <div className="bg-white rounded-2xl overflow-hidden shadow-lg animate-pulse">
        <div className="md:flex">
          {/* Image skeleton */}
          <div className="md:w-1/2">
            <div className="w-full h-[400px] bg-gray-300"></div>
          </div>

          {/* Text content skeleton */}
          <div className="md:w-1/2 p-8 relative space-y-6">
            <div className="h-4 w-32 bg-gray-300 rounded"></div>{" "}
            {/* Featured label */}
            <div className="h-8 w-3/4 bg-gray-300 rounded"></div> {/* Title */}
            <div className="space-y-2">
              <div className="h-3 w-full bg-gray-300 rounded"></div>
              <div className="h-3 w-full bg-gray-300 rounded"></div>
              <div className="h-3 w-5/6 bg-gray-300 rounded"></div>
            </div>
            {/* Bottom section */}
            <div className="absolute bottom-0 left-0 w-full px-4 pb-4">
              <div className="flex flex-col md:flex-row items-center md:justify-between gap-4">
                <div className="h-4 w-24 bg-gray-300 rounded"></div>{" "}
                {/* Date */}
                <div className="h-10 w-32 bg-gray-300 rounded-full"></div>{" "}
                {/* Button */}
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default FeaturedBlogSkeleton;
