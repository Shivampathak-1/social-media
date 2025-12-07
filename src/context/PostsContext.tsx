import { createContext, useReducer } from "react";
import type { PropsWithChildren } from "react";
import DummyPostList from "../assets/data";
import type { Post } from "../types/Post.type";

interface PostContextType {
  postList: Post[];
  addPost: (newPost: object) => void;
  deletePost: (id: number) => void;
}

export const PostsContext = createContext<PostContextType>({
  postList: [],
  addPost: () => {},
  deletePost: () => {},
});

const postReducer = (currPostList: Post[], action: any): Post[] => {
  switch (action.type) {
    case "DELETE_POST":
      return currPostList.filter((post) => post.id !== action.payload.id);
    case "ADD_POST":
      return [action.payload.newPost, ...currPostList];
    default:
      return currPostList;
  }
};

export const PostsProvider = ({ children }: PropsWithChildren) => {
  const [postList, dispatchPostList] = useReducer(postReducer, DummyPostList);

  const addPost = (newPost: object) => {
    dispatchPostList({
      type: "ADD_POST",
      payload: { newPost },
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
