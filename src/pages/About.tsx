const About = () => {
  return (
    <div className="max-w-4xl mx-auto p-6 mt-10 bg-white rounded-xl shadow-md">
      <h1 className="text-3xl font-bold text-gray-800 mb-4">About MyApp</h1>

      <p className="text-gray-700 leading-relaxed mb-4">
        Welcome to <span className="font-semibold">MyApp</span>, your go-to
        platform for sharing posts, engaging with a community, and staying
        connected with the latest trends.
      </p>

      <p className="text-gray-700 leading-relaxed mb-4">
        Our mission is to provide a clean, fast, and responsive experience for
        creators and readers alike. Whether you're sharing knowledge, stories,
        or just connecting with friends, MyApp is designed to make it easy and
        enjoyable.
      </p>

      <h2 className="text-2xl font-semibold text-gray-800 mt-6 mb-3">
        Features
      </h2>
      <ul className="list-disc list-inside text-gray-700 space-y-2">
        <li>Responsive and modern design</li>
        <li>Create, like, and delete posts easily</li>
        <li>Tag posts for better organization</li>
        <li>Track reactions and engagement</li>
      </ul>

      <h2 className="text-2xl font-semibold text-gray-800 mt-6 mb-3">
        Contact Us
      </h2>
      <p className="text-gray-700">
        Have questions or feedback? Reach out to us at{" "}
        <span className="text-blue-500 font-medium">support@myapp.com</span>.
      </p>
    </div>
  );
};

export default About;
