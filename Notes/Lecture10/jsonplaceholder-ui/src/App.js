import React, { useState, useEffect } from "react";
import { UserList } from "./components/User/UserList";
import { UserDetail } from "./components/User/UserDetail";
import "./App.css";
import userList from "./components/User/userData";
import axios from "axios";

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
  const [users, setUsers] = useState([]);
  // first param of useEffect is a callback
  // end param of useEffect is a dependency Array
  // if we want to run useEffect only once then pass and empty dependency array
  useEffect(() => {
    console.log("this would call only once due to empty dependency array");
    const getUsers = async () => {
      const response = await axios({
        method: "get",
        baseURL: "https://jsonplaceholder.typicode.com/",
        url: "users",
      });
      const { data, status } = response;
      if (status === 200) {
        // Status OK
        setUsers(data);
        //setTimeout(() => setUsers(data), 3000); // using timeout for artificial delay
      }
    };
    getUsers();
  }, []);
  useEffect(() => {
    console.log("calling on each render.");
  });
  const selectUser = (userId) => {
    const user = users.find((user) => user.id === userId);
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
      {users.length === 0 ? (
        <h2>Loading....</h2>
      ) : (
        <div style={styles.content}>
          <div style={styles.userList}>
            <div style={styles.newUser}>
              <button onClick={onNewUserClick}>Add New User</button>
            </div>
            <h1 style={styles.heading}>Total Users: {users.length}</h1>
            <UserList userList={users} onUserClick={selectUser} />
          </div>
          <div style={styles.userDetail}>
            {selectedUser && (
              <UserDetail user={selectedUser} onUserSubmit={onUserSubmit} />
            )}
          </div>
        </div>
      )}
    </div>
  );
};

export default App;
