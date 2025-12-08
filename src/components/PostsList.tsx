import { useContext } from "react";
import PostCard from "./PostCard";
import { PostsContext } from "../context/PostsContext";

const PostsList = () => {
  PostsContext;
  const { postList } = useContext(PostsContext);

  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 p-4">
      {postList.map((post) => (
        <PostCard key={post.id} post={post} />
      ))}
    </div>
  );
};

export default PostsList;
