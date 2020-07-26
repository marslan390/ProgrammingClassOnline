import React, { useState, useEffect } from "react";

const useStyles = () => ({
  root: {},
  formControl: {
    margin: "8px",
  },
});

const UserDetail = ({ user, onUserSubmit }) => {
  const styles = useStyles();
  const [_user, setUser] = useState(user);
  useEffect(() => {
    console.log("Selected user has been changed!");
    setUser(user);
  }, [user]); // callback, list of dependencies

  const onUsernameChange = (e) => {
    const value = e.target.value;
    setUser((u) => ({ ...u, name: value }));
  };

  const onAddressStreetChange = (e) => {
    const value = e.target.value;
    setUser((u) => ({ ...u, address: { ...u.address, street: value } }));
  };

  const onSubmit = (e) => {
    e.stopPropagation();
    e.preventDefault();
    onUserSubmit(_user);
  };

  return (
    <div style={styles.root}>
      <form onSubmit={onSubmit}>
        <div style={styles.formControl}>
          <input
            placeholder="Name"
            value={_user.name}
            onChange={onUsernameChange}
          />
        </div>
        <div style={styles.formControl}>
          <input
            placeholder="Street Address"
            value={_user.address.street}
            onChange={onAddressStreetChange}
          />
        </div>
        <div style={styles.formControl}>
          <button type="submit">Save</button>
        </div>
      </form>
    </div>
  );
};
export { UserDetail };
