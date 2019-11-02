import React from "react";
import { ILoginViewType } from "../../types";

interface RegisterFormProps {
  form?: any;
  handleRegister: Function;
  validateEmail: Function;
  validateUsername: Function;
}

export const RegisterForm = ({
  form = {},
  handleRegister,
  validateEmail,
  validateUsername
}: RegisterFormProps) => {
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
    handleRegister(data, setErrorFromServer);
  };

  return (
    <form onSubmit={handleSubmit(onSubmit)}>
      <div>
        <label>username</label>
        <input
          type="text"
          name="username"
          ref={register({
            required: "required",
            validate: async (value: string) => {
              const valid = await new Promise(resolve =>
                resolve(value === "thang")
              );
              return valid || "Username is already used";
            }
          })}
        />
        {errors.username && errors.username.message}
      </div>
      <div>
        <label>password</label>
        <input
          type="password"
          name="password"
          ref={register({ required: true })}
        />
        {errors.password && <span>This field is required</span>}
      </div>
      <div>
        <label>email</label>
        <input
          type="text"
          name="email"
          ref={register({
            required: true,
            pattern: {
              value: /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i,
              message: "invalid email address"
            }
          })}
        />
        {errors.email && errors.email.message}
      </div>
      <div>
        <label>phone number</label>
        <input
          type="text"
          name="phoneNumber"
          ref={register({ required: true })}
        />
        {errors.phoneNumber && <span>This field is required</span>}
      </div>
      <input type="submit" />
      {errors.server && errors.server.message}
    </form>
  );
};
