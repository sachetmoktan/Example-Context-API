import { FETCH_POSTS } from "../../types";

function postsReducer(state, action) {
  switch (action.type) {
    case FETCH_POSTS:
      return {
        ...state,
        posts: action.payload,
      };
    default:
      return state;
  }
}

export default postsReducer;
