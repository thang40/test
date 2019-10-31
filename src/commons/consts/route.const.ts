export const HOME_ROUTE = "/";
export const BLOG_ROUTE = "/blogs";
export const BLOG_DETAIL_ROUTE = "/blogs/:slugId";
export const USER_ROUTE = "/user";
export const LOGIN_ROUTE = "/login";
export const FUN_ROUTE = "/fun";
export const FUN_POKEDEX_ROUTE = `${FUN_ROUTE}/pokedex`;
export const FUN_AUTH_ROUTE = `${FUN_ROUTE}/auth`;
export const CONTACT_ROUTE = "/contact";
export const ADMIN_ROUTE = "/admin";
export const ROUTE_BASENAME =
  process.env.NODE_ENV === "production" ? "/my-personal-site" : "/";