import { useReducer } from "react";
import type { PropsWithChildren } from "react";
import type { Post } from "../types/Post.type";
import { useEffect } from "react";
import { PostsContext } from "./PostsContext";

const postReducer = (currPostList: Post[], action: any): Post[] => {
  switch (action.type) {
    case "DELETE_POST":
      return currPostList.filter((post) => post.id !== action.payload.id);
    case "ADD_POST":
      return [action.payload.newPost, ...currPostList];
    case "ADD_INITIAL_POST":
      return action.payload.posts;
    default:
      return currPostList;
  }
};

export const PostsProvider = ({ children }: PropsWithChildren) => {
  const [postList, dispatchPostList] = useReducer(postReducer, []);

  const fetchPosts = async () => {
    const response = await fetch("https://dummyjson.com/posts");
    const data = await response.json();
    addInitialPost(data.posts);
  };

  useEffect(() => {
    fetchPosts();
  }, []);

  const addPost = (newPost: object) => {
    dispatchPostList({
      type: "ADD_POST",
      payload: { newPost },
    });
  };
  const addInitialPost = (posts: Post[]) => {
    dispatchPostList({
      type: "ADD_INITIAL_POST",
      payload: { posts },
    });
  };
  const deletePost = (id: number) => {
    dispatchPostList({
      type: "DELETE_POST",
      payload: { id },
    });
  };
  return (
    <PostsContext.Provider value={{ postList, addPost, deletePost }}>
      {children}
    </PostsContext.Provider>
  );
};

export default { PostsContext, PostsProvider };
