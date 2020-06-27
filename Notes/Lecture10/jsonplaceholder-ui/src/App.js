import React from "react";
import { UserList } from "./components/User/UserList";
import "./App.css";

const App = () => {
  return (
    <div className="App">
      <header>
        <div className="header">Welcome to Jsonplaceholder UI</div>
      </header>
      <div className="content">
        <UserList />
      </div>
    </div>
  );
};

export default App;
