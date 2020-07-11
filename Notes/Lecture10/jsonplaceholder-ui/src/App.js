import React, { useState } from "react";
import { UserList } from "./components/User/UserList";
import { UserDetail } from "./components/User/UserDetail";
import "./App.css";
import userList from "./components/User/userData";

const useStyles = () => {
  return {
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

const App = () => {
  const styles = useStyles();
  const [selectedUser, setSelectedUser] = useState(null);
  const selectUser = (userId) => {
    const user = userList.find((user) => user.id === userId);
    setSelectedUser(user);
  };
  return (
    <div className="App">
      <header>
        <div className="header">Jsonplaceholder UI</div>
      </header>
      <div style={styles.content}>
        <div style={styles.userList}>
          <UserList userList={userList} onUserClick={selectUser} />
        </div>
        <div style={styles.userDetail}>
          {selectedUser && <UserDetail user={selectedUser} />}
        </div>
      </div>
    </div>
  );
};

export default App;
