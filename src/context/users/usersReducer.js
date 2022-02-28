import { FETCH_USERS, LOADING_USERS } from "../../types";

function UsersReducers(state, action) {
  switch (action.type) {
    case LOADING_USERS:
      return {
        ...state,
        isLoading: true,
      };
    case FETCH_USERS:
      return {
        ...state,
        users: action.payload,
        isLoading: false,
      };

    default:
      return state;
  }
}

export default UsersReducers;
