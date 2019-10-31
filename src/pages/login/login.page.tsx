import React from "react";
import { LoginForm } from "../../commons/components";
import useForm from "react-hook-form";
import { ILoginModel } from "../../commons/types/models/viewModels/login.model";
import { connect } from "react-redux";
import { loginAction, logoutAction } from "../../ducks";
import { useAuthStatus } from "../../hooks/authHooks";

interface ILoginPageProps {
  handleLogin: Function;
  handleLogout: Function;
}

export const LoginPage = ({ handleLogin, handleLogout }: ILoginPageProps) => {
  const isAuth = useAuthStatus(false);
  const form = useForm<ILoginModel>();
  return (
    <div>
      {isAuth ? (
        <div>
          <span>you are already logged in</span>
          <button onClick={() => handleLogout()}>logout</button>
        </div>
      ) : (
        <LoginForm form={form} handleLogin={handleLogin} />
      )}
    </div>
  );
};

export default connect(
  state => state,
  { handleLogin: loginAction, handleLogout: logoutAction }
)(LoginPage);
