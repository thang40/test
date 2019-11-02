import React from "react";
import { Link } from "react-router-dom";
import { ROUTES } from "../../consts";
import { IAuthPropsType } from "../../types";

interface HeaderProps extends IAuthPropsType {}

export const Header = ({ isAuth }: HeaderProps) => {
  return (
    <header>
      <ul>
        <li>
          <Link to={ROUTES.HOME_ROUTE}>Home</Link>
        </li>
        {isAuth ? (
          <li>
            <Link to={ROUTES.USER_ROUTE}>User</Link>
          </li>
        ) : (
          <React.Fragment>
            <li>
              <Link to={ROUTES.LOGIN_ROUTE}>Login</Link>
            </li>
            <li>
              <Link to={ROUTES.REGISTER_ROUTE}>Register</Link>
            </li>
          </React.Fragment>
        )}
      </ul>
    </header>
  );
};
