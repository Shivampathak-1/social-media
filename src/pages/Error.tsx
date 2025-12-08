import { Link } from "react-router-dom";

const Error = () => {
  return (
    <div className="h-96 flex flex-col items-center justify-center px-4 mt-28">
      {/* Large 404 */}
      <h1 className="text-6xl sm:text-7xl md:text-8xl font-extrabold text-amber-400">
        404
      </h1>

      {/* Title */}
      <h2 className="mt-4 text-2xl sm:text-3xl font-semibold text-gray-800 text-center">
        Oops! Page Not Found
      </h2>

      {/* Subtitle */}
      <p className="mt-2 text-gray-600 text-center max-w-md">
        The page you're looking for doesn't exist or has been moved.
      </p>

      {/* CTA Button */}
      <Link
        to="/"
        className="mt-6 bg-amber-400 hover:bg-amber-500 text-white px-6 py-3 rounded-lg font-medium shadow-md transition"
      >
        Go Back Home
      </Link>
    </div>
  );
};

export default Error;
