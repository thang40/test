import React, { ComponentType } from "react";
import { useAuthStatus } from "../hooks/authHooks";
import { IAuthProps } from "../commons/types/propType";

export const withAuth = (
  Comp: ComponentType<IAuthProps>,
  expectedStatus?: Boolean
) => {
  return React.forwardRef((props, ref) => {
    const isAuth = useAuthStatus(expectedStatus || false);
    return <Comp isAuth={isAuth} {...props} ref={ref} />;
  });
};
