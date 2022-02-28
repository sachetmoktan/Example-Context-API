import React from "react";
import UsersReducers from "./usersReducer";
import { FETCH_USERS, LOADING_USERS } from "../../types";
import axios from "axios";
import UsersContext from "./usersContext";

function UsersState(props) {
  const initialState = {
    users: [],
    isLoading: false,
  };

  const [state, dispatch] = React.useReducer(UsersReducers, initialState);

  // Actions
  const userIsLoading = () => {
    dispatch({
      type: LOADING_USERS,
    });
  };

  const fetchUserLists = async () => {
    userIsLoading();
    const response = await axios.get(
      "https://jsonplaceholder.typicode.com/users"
    );
    dispatch({
      type: FETCH_USERS,
      payload: response.data,
    });
  };

  return (
    <UsersContext.Provider
      value={{
        users: state.users,
        isLoading: state.isLoading,
        userIsLoading,
        fetchUserLists,
      }}
    >
      {props.children}
    </UsersContext.Provider>
  );
}

export default UsersState;
