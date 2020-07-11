import React from "react";
import { User } from "./User";
import userData from "./userData";

const style = {
  userList: {
    color: "white",
    padding: "16px",
    display: "flex",
    flexDirection: "row",
    flexWrap: "wrap",
    justifyContent: "flex-start",
    alignItems: "center",
  },
  user: {
    borderRadius: "8px",
    marginBottom: "8px",
    padding: "8px",
  },
};

const UserList = () => {
  return (
    <div style={style.userList}>
      {userData.map((user) => {
        return (
          <div style={style.user} key={user.id}>
            <User user={user} />
          </div>
        );
      })}
    </div>
  );
};
export { UserList };
