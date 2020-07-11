import React from "react";

const useStyles = () => ({
  root: {},
});

const UserDetail = ({ user }) => {
  const styles = useStyles();
  return (
    <div style={styles.root}>User detail of user {user.id} would go there</div>
  );
};
export { UserDetail };
