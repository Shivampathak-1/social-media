import { useNavigate } from "react-router-dom";

const Default = () => {
  const navigate = useNavigate();
  const handleViewPosts = () => {
    navigate("/home");
  };
  return (
    <div className="flex flex-col items-center justify-center min-h-[70vh] px-4 sm:px-6 lg:px-8">
      {/* Heading */}
      <h1 className="text-3xl sm:text-4xl md:text-5xl font-bold text-gray-900 text-center mb-4">
        All Posts
      </h1>

      {/* Subheading / Description */}
      <p className="text-gray-600 text-center text-sm sm:text-base md:text-lg max-w-2xl">
        Explore the latest posts from our community. Engage, react, and stay
        updated with the content that matters to you.
      </p>

      {/* Optional call-to-action button */}
      <button
        onClick={handleViewPosts}
        className="mt-6 bg-amber-400 hover:bg-amber-500 text-white font-medium py-2 px-6 rounded-lg shadow transition duration-200"
      >
        View Posts
      </button>
    </div>
  );
};

export default Default;
