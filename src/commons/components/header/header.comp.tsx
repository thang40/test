import React from "react";
import { Link } from "react-router-dom";
import { ROUTES } from "../../consts";
import { IAuthProps } from "../../types/propType";

interface HeaderProps extends IAuthProps {}

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
          <li>
            <Link to={ROUTES.LOGIN_ROUTE}>Login</Link>
          </li>
        )}
      </ul>
    </header>
  );
};
