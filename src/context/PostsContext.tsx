import { createContext, useReducer } from "react";
import type { PropsWithChildren } from "react";
import type { Post } from "../types/Post.type";

interface PostContextType {
  postList: Post[];
  addPost: (newPost: object) => void;
  addInitialPost: (initialPosts: Post[]) => void;
  deletePost: (id: number) => void;
}

export const PostsContext = createContext<PostContextType>({
  postList: [],
  addPost: () => {},
  addInitialPost: () => {},
  deletePost: () => {},
});

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
    <PostsContext.Provider
      value={{ postList, addPost, addInitialPost, deletePost }}
    >
      {children}
    </PostsContext.Provider>
  );
};

export default { PostsContext, PostsProvider };
