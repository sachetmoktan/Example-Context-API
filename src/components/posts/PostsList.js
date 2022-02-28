import React from "react";
import PostsContext from "../../context/posts/postsContext";

function PostsList() {
  const postData = React.useContext(PostsContext);
  const { Posts } = postData;

  return (
    <>
      <ul style={{ listStyle: "none" }}>
        {Posts && Posts.map((item) => <li key={item?.id}>{item?.title}</li>)}
      </ul>
    </>
  );
}

export default PostsList;
