import axios from "axios";
import React from "react";
import { FETCH_POSTS } from "../../types";
import PostsContext from "./postsContext";
import postsReducer from "./postsReducer";

function PostsState(props) {
  const initialState = {
    posts: []
  };

  const [state, dispatch] = React.useReducer(postsReducer, initialState);

  // Action
  const fetchPost = async () => {
    const res = await axios.get("https://jsonplaceholder.typicode.com/posts");
    dispatch({
      type: FETCH_POSTS,
      payload: res?.data,
    });
  };
  return (
    <PostsContext.Provider
      value={{
        Posts: state.posts,
        fetchPost,
      }}
    >
      {props.children}
    </PostsContext.Provider>
  );
}

export default PostsState;
