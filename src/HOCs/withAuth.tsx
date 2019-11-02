import React, { ComponentType } from "react";
import { useAuthStatus } from "../hooks/authHooks";
import { IAuthPropsType } from "../commons/types";

export const withAuth = (
  Comp: ComponentType<IAuthPropsType>,
  expectedStatus?: Boolean
) => {
  return React.forwardRef((props, ref) => {
    const isAuth = useAuthStatus(expectedStatus || false);
    return <Comp isAuth={isAuth} {...props} ref={ref} />;
  });
};
