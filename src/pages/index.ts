import { lazy } from "react";

const delayTime = 1000;

export const Page404Page = lazy(() => {
  return Promise.all([
    import("./404/404.route"),
    new Promise(resolve => setTimeout(resolve, delayTime))
  ]).then(([moduleExports]) => moduleExports);
});

export const HomePage = lazy(() => {
  return Promise.all([
    import("./home/home.page"),
    new Promise(resolve => setTimeout(resolve, delayTime))
  ]).then(([moduleExports]) => moduleExports);
});

export const LoginPage = lazy(() => {
  return Promise.all([
    import("./login/login.page"),
    new Promise(resolve => setTimeout(resolve, delayTime))
  ]).then(([moduleExports]) => moduleExports);
});

export const UserPage = lazy(() => {
  return Promise.all([
    import("./user/user.page"),
    new Promise(resolve => setTimeout(resolve, delayTime))
  ]).then(([moduleExports]) => moduleExports);
});
