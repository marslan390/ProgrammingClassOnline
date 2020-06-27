import React from "react";
const flexColumnCenter = {
  display: "flex",
  alignItems: "center",
  justifyContent: "center",
  flexDirection: "column",
};

const style = {
  user: {
    border: "1px solid grey",
    color: "grey",
    backgroundColor: "white",
    padding: "16px",
    maxWidth: "300px",
    borderRadius: "16px",
    minHeight: "200px",
    cursor: "pointer",
    ...flexColumnCenter,
  },
  header: {
    root: {
      ...flexColumnCenter,
    },
    img: {
      width: "70px",
      height: "70px",
      borderRadius: "50%",
      backgroundColor: "#80808030",
    },
    name: {
      fontSize: "16px",
      fontWeight: "bold",
    },
    username: {
      fontSize: "14px",
      color: "#bbafaf",
    },
  },
  userBody: {
    paddingTop: "16px",
  },
};

const UserDetail = ({ user }) => {
  const { company, address } = user;
  return (
    <div style={{ textAlign: "center" }}>
      I work in <b>{company.name}</b> with address{" "}
      {`${address.suite}, ${address.street}, ${address.city}`}
    </div>
  );
};

const User = ({ user }) => {
  const { name, username } = user;
  return (
    <div style={style.user}>
      <div style={style.header.root}>
        <div style={style.header.img}></div>
        <div style={style.header.name}>{name}</div>
        <div style={style.header.username}>{username}</div>
      </div>
      <div style={style.userBody}>
        <UserDetail user={user} />
      </div>
    </div>
  );
};
export { User };
