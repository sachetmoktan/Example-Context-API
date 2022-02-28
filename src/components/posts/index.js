import React from "react";
import PostsContext from "../../context/posts/postsContext";
import PostsList from "./PostsList";

function PostsMain() {
  const postsData = React.useContext(PostsContext);
  const { fetchPost } = postsData;

  React.useEffect(() => {
    fetchPost();
  }, []);

  return <PostsList />;
}

export default PostsMain;
