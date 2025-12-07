const PostsShimmer = () => {
  const cards = new Array(12).fill(0);

  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6 m-4">
      {cards.map((_, idx) => (
        <div
          key={idx}
          className="bg-white shadow-lg rounded-xl p-6 border border-gray-200 animate-pulse"
        >
          {/* Header */}
          <div className="flex justify-between items-start">
            {/* Title shimmer (2 lines like real card) */}
            <div className="w-full">
              <div className="h-5 bg-gray-300 rounded w-3/4 mb-2"></div>
              <div className="h-5 bg-gray-200 rounded w-1/2"></div>
            </div>

            {/* Delete icon shimmer */}
            <div className="h-5 w-5 bg-gray-300 rounded ml-2"></div>
          </div>

          {/* Body shimmer (3 lines) */}
          <div className="mt-4 space-y-2">
            <div className="h-4 bg-gray-200 rounded w-full"></div>
            <div className="h-4 bg-gray-200 rounded w-5/6"></div>
            <div className="h-4 bg-gray-200 rounded w-4/6"></div>
          </div>

          {/* Tags shimmer */}
          <div className="flex flex-wrap gap-2 mt-4">
            <div className="h-6 bg-gray-200 rounded-full w-20"></div>
            <div className="h-6 bg-gray-200 rounded-full w-16"></div>
            <div className="h-6 bg-gray-200 rounded-full w-14"></div>
          </div>

          {/* Reactions shimmer */}
          <div className="mt-6 flex items-center justify-between">
            {/* Like button shimmer */}
            <div className="flex items-center gap-2 bg-gray-100 px-4 py-2 rounded-full">
              <div className="h-5 w-5 bg-gray-300 rounded-full"></div>
              <div className="h-4 bg-gray-300 rounded w-10"></div>
            </div>

            {/* Views shimmer */}
            <div className="flex items-center gap-2">
              <div className="h-4 w-4 bg-gray-300 rounded-full"></div>
              <div className="h-4 bg-gray-300 rounded w-8"></div>
            </div>
          </div>
        </div>
      ))}
    </div>
  );
};

export default PostsShimmer;
