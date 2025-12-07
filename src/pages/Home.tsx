import PostsList from "../components/PostsList";
import { useContext, useEffect } from "react";
import { PostsContext } from "../context/PostsContext";
import Default from "./Default";

const Home = () => {
  const { postList, addInitialPost } = useContext(PostsContext);
  const fetchPosts = async () => {
    const response = await fetch("https://dummyjson.com/posts");
    const data = await response.json();
    addInitialPost(data.posts);
  };
  useEffect(() => {
    fetchPosts();
  }, []);

  return <>{postList.length === 0 ? <Default /> : <PostsList />}</>;
};

export default Home;
