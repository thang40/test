import React from "react";
import { connect } from "react-redux";
import { logoutAction } from "../../ducks";
import { useAuthStatus } from "../../hooks/authHooks";

interface UserPageProps {
  handleLogout: Function;
}

const UserPage = ({ handleLogout }: UserPageProps) => {
  const isAuth = useAuthStatus(true);
  return isAuth ? (
    <div>
      <h2>User</h2>
      <button onClick={() => handleLogout()}>Logout</button>
    </div>
  ) : (
    <div>You need to login</div>
  );
};

export default connect(
  state => state,
  { handleLogout: logoutAction }
)(UserPage);
