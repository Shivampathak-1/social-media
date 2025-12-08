import PostsList from "../components/PostsList";
import { useContext } from "react";

import PostsShimmer from "../components/PostsShimmer";
import { PostsContext } from "../context/PostsContext";

const Home = () => {
  const { postList } = useContext(PostsContext);
  return <>{postList.length === 0 ? <PostsShimmer /> : <PostsList />}</>;
};

export default Home;
