import { useContext, useState } from "react";
import { PostsContext } from "../context/PostsContext";
import { useNavigate } from "react-router-dom";

const Upload = () => {
  const { addPost } = useContext(PostsContext);

  const [title, setTitle] = useState("");
  const [body, setBody] = useState("");
  const [tags, setTags] = useState("");
  const [likes, setLikes] = useState(0);
  const [views, setViews] = useState(0);
  const navigate = useNavigate();

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();

    const newPost = {
      id: Date.now(),
      title,
      body,
      tags: tags.split(",").map((tag) => tag.trim()),
      reactions: { likes },
      views,
    };

    console.log("New Post:", newPost);
    addPost(newPost);

    // Reset form
    setTitle("");
    setBody("");
    setTags("");
    setLikes(0);
    setViews(0);

    alert("Post uploaded successfully!");
    navigate("/home");
  };

  return (
    <div className="max-w-3xl mx-auto p-6 mt-10 bg-white rounded-xl shadow-lg">
      <h2 className="text-2xl font-bold mb-6 text-gray-800">Upload a Post</h2>

      <form onSubmit={handleSubmit} className="space-y-5">
        {/* TITLE */}
        <div>
          <label className="block text-gray-700 font-medium mb-2">Title</label>
          <input
            type="text"
            value={title}
            onChange={(e) => setTitle(e.target.value)}
            placeholder="Enter post title"
            className="w-full border border-gray-300 rounded-lg px-4 py-2 focus:outline-none focus:ring-2 focus:ring-amber-400"
            required
          />
        </div>

        {/* BODY */}
        <div>
          <label className="block text-gray-700 font-medium mb-2">Body</label>
          <textarea
            value={body}
            onChange={(e) => setBody(e.target.value)}
            placeholder="Enter post content"
            className="w-full border border-gray-300 rounded-lg px-4 py-2 h-40 resize-none focus:outline-none focus:ring-2 focus:ring-amber-400"
            required
          />
        </div>

        {/* TAGS */}
        <div>
          <label className="block text-gray-700 font-medium mb-2">
            Tags (comma separated)
          </label>
          <input
            type="text"
            value={tags}
            onChange={(e) => setTags(e.target.value)}
            placeholder="e.g. react, javascript, frontend"
            className="w-full border border-gray-300 rounded-lg px-4 py-2 focus:outline-none focus:ring-2 focus:ring-amber-400"
          />
        </div>

        {/* OPTIONAL: Likes / Views */}
        <div className="grid grid-cols-2 gap-4">
          <div>
            <label className="block text-gray-700 font-medium mb-2">
              Likes
            </label>
            <input
              type="number"
              value={likes}
              onChange={(e) => setLikes(parseInt(e.target.value))}
              className="w-full border border-gray-300 rounded-lg px-4 py-2 focus:outline-none focus:ring-2 focus:ring-amber-400"
            />
          </div>
          <div>
            <label className="block text-gray-700 font-medium mb-2">
              Views
            </label>
            <input
              type="number"
              value={views}
              onChange={(e) => setViews(parseInt(e.target.value))}
              className="w-full border border-gray-300 rounded-lg px-4 py-2 focus:outline-none focus:ring-2 focus:ring-amber-400"
            />
          </div>
        </div>

        {/* SUBMIT BUTTON */}
        <button
          type="submit"
          className="w-full bg-amber-400 text-white font-semibold px-6 py-3 rounded-lg hover:bg-amber-500 transition"
        >
          Upload Post
        </button>
      </form>
    </div>
  );
};

export default Upload;
