import React from "react";
import { ILoginModel } from "../../types/models/viewModels/login.model";

interface LoginFormProps {
  form?: any;
  handleLogin: Function;
}

export const LoginForm = ({ form = {}, handleLogin }: LoginFormProps) => {
  const {
    register = () => null,
    handleSubmit = () => null,
    errors = {}
  } = form;
  const onSubmit = (data: ILoginModel, e: Event) => {
    e.preventDefault();
    handleLogin(data);
  };

  return (
    <form onSubmit={handleSubmit(onSubmit)}>
      <input type="text" name="username" defaultValue="test" ref={register} />
      <input
        type="password"
        name="password"
        ref={register({ required: true })}
      />
      {errors.exampleRequired && <span>This field is required</span>}
      <input type="submit" />
    </form>
  );
};
