import { useContext, useState } from "react";
import { FaTrash, FaHeart, FaEye } from "react-icons/fa";
import type { Post } from "../types/Post.type";
import { PostsContext } from "../context/PostsContext";

type PostCardProps = {
  post: Post;
};

const PostCard = ({ post }: PostCardProps) => {
  const [likes, setLikes] = useState(post.reactions.likes);
  const [liked, setLiked] = useState(false);

  const toggleLike = () => {
    if (liked) {
      setLikes(likes - 1);
      setLiked(false);
    } else {
      setLikes(likes + 1);
      setLiked(true);
    }
  };
  const { deletePost } = useContext(PostsContext);
  return (
    <div className="bg-white shadow-lg rounded-xl p-6 border border-gray-200 hover:shadow-2xl transition-all duration-300">
      {/* Header */}
      <div className="flex justify-between items-start">
        <h2 className="text-xl font-bold text-gray-800 leading-tight line-clamp-2 hover:line-clamp-none cursor-pointer">
          {post.title}
        </h2>

        <button className="text-red-500 hover:text-red-600 transition">
          <FaTrash onClick={() => deletePost(post.id)} size={18} />
        </button>
      </div>

      {/* Body */}
      <p className="text-gray-600 mt-3 leading-relaxed line-clamp-3 hover:line-clamp-none cursor-pointer ">
        {post.body}
      </p>

      {/* Tags */}
      <div className="flex flex-wrap gap-2 mt-4">
        {post.tags.map((tag, i) => (
          <span
            key={i}
            className="bg-blue-100 text-blue-700 text-sm px-3 py-1 rounded-full font-medium"
          >
            #{tag}
          </span>
        ))}
      </div>

      {/* Reactions */}
      <div className="mt-6 flex items-center justify-between">
        {/* Like */}
        <button
          onClick={toggleLike}
          className="flex items-center gap-2 bg-gray-100 px-4 py-2 rounded-full hover:bg-gray-200 active:scale-95 transition"
        >
          <FaHeart
            className={`text-xl transition ${
              liked ? "text-red-500 scale-110" : "text-gray-500"
            }`}
          />
          <span className="font-medium text-gray-700">{likes}</span>
        </button>

        {/* Views */}
        <div className="flex items-center gap-2 text-gray-600">
          <FaEye className="text-gray-500" />
          <span className="font-medium">{post.views}</span>
        </div>
      </div>
    </div>
  );
};

export default PostCard;
