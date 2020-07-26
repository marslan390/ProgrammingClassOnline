import React, { useState } from "react";
import { UserList } from "./components/User/UserList";
import { UserDetail } from "./components/User/UserDetail";
import "./App.css";
import userList from "./components/User/userData";

const useStyles = () => {
  return {
    heading: { color: "black", padding: "16px 0 0 16px" },
    newUser: { padding: "16px 0 0 16px" },
    content: {
      display: "flex",
      flexDirection: "row",
    },
    userList: {
      width: "25%",
    },
    userDetail: {
      width: "75%",
    },
  };
};

const newUser = {
  id: undefined,
  name: "",
  username: "",
  email: "",
  address: {
    street: "",
    suite: "",
    city: "",
    zipcode: "",
    geo: {
      lat: "",
      lng: "",
    },
  },
  phone: "",
  website: "",
  company: {
    name: "",
    catchPhrase: "",
    bs: "",
  },
};

const App = () => {
  const styles = useStyles();
  const [selectedUser, setSelectedUser] = useState(null);
  const [users, setUsers] = useState(userList);
  const selectUser = (userId) => {
    const user = userList.find((user) => user.id === userId);
    setSelectedUser(user);
  };
  const onUserSubmit = (user) => {
    setUsers((prevUsers) => {
      if (user.id) {
        // update existing user
        // TODO
        return [...prevUsers];
      } else {
        // new user
        return [...prevUsers, user];
      }
    });
  };

  const onNewUserClick = () => {
    setSelectedUser(newUser);
  };
  return (
    <div className="App">
      <header>
        <div className="header">Jsonplaceholder UI</div>
      </header>
      <div style={styles.content}>
        <div style={styles.userList}>
          <div style={styles.newUser}>
            <button onClick={onNewUserClick}>Add New User</button>
          </div>
          <h1 style={styles.heading}>Total Users: {userList.length}</h1>
          <UserList userList={users} onUserClick={selectUser} />
        </div>
        <div style={styles.userDetail}>
          {selectedUser && (
            <UserDetail user={selectedUser} onUserSubmit={onUserSubmit} />
          )}
        </div>
      </div>
    </div>
  );
};

export default App;
