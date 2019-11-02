import React from "react";
import { ILoginViewType } from "../../types";

interface LoginFormProps {
  form?: any;
  handleLogin: Function;
}

export const LoginForm = ({ form = {}, handleLogin }: LoginFormProps) => {
  const {
    register = () => {},
    handleSubmit = () => {},
    setError = () => {},
    errors = {}
  } = form;
  const setErrorFromServer = (message: string) => {
    setError("server", "server", message);
  };
  const onSubmit = (data: ILoginViewType, e: Event) => {
    e.preventDefault();
    handleLogin(data, setErrorFromServer);
  };

  return (
    <form onSubmit={handleSubmit(onSubmit)}>
      <input type="text" name="username" ref={register} />
      <input
        type="password"
        name="password"
        ref={register({ required: true })}
      />
      {errors.password && <span>This field is required</span>}
      <input type="submit" />
      {errors.server && errors.server.message}
    </form>
  );
};
