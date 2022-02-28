import React, { useContext } from "react";
import UsersContext from "../../context/users/usersContext";

function UserList(props) {
  const UsersContextData = useContext(UsersContext);
  const { users, isLoading } = UsersContextData;
  return (
    <>
      {isLoading === true ? (
        <h2>Loading...</h2>
      ) : (
        <ul style={{ listStyle: "none" }}>
          {users &&
            users.map((item) => {
              return <li key={item?.id}>{item.name}</li>;
            })}
        </ul>
      )}
    </>
  );
}

export default UserList;
