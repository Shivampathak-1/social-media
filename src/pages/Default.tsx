const Default = () => {
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
    </div>
  );
};

export default Default;
