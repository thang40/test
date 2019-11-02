import React from "react";
import useForm from "react-hook-form";
import { RegisterForm } from "../../commons/components";
import { IRegisterType } from "../../commons/types";
import { useAuthStatus } from "../../hooks/authHooks";

const RegisterPage = () => {
  const isAuth = useAuthStatus(false);
  const form = useForm<IRegisterType>();
  const onRegister = (registerValue: IRegisterType, setError: Function) => {
    console.log(registerValue);
    // validate username
  };
  const validateUsername = () => {
    console.log("validate username");
  };
  const validateEmail = () => {
    console.log("validate email");
  };
  return (
    <div>
      {isAuth ? (
        <div>
          <span>you are already logged in</span>
        </div>
      ) : (
        <RegisterForm
          form={form}
          handleRegister={onRegister}
          validateEmail={validateEmail}
          validateUsername={validateUsername}
        />
      )}
    </div>
  );
};

export default RegisterPage;
