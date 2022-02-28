import React, { useContext } from "react";
import UserMidComp from "./UserMidComp";
import UsersContext from "../../context/users/usersContext";

function Users() {
  const UsersContextData = useContext(UsersContext);
  const { fetchUserLists } = UsersContextData;

  React.useEffect(() => {
    fetchUserLists();
  }, []);

  return <UserMidComp />;
}

export default Users;
