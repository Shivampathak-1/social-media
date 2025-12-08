import { createContext } from "react";
import type { Post } from "../types/Post.type";

interface PostContextType {
  postList: Post[];
  addPost: (newPost: object) => void;
  deletePost: (id: number) => void;
}

const PostsContext = createContext<PostContextType>({
  postList: [],
  addPost: () => {},
  deletePost: () => {},
});

export { PostsContext };
