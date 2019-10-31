const AUTH_STORAGE_KEY = "auth";
export const isLoggedIn = () => {
  const userData = localStorage.getItem(AUTH_STORAGE_KEY);
  return userData === null ? false : true;
};

export const clearAuthData = () => {
  localStorage.removeItem(AUTH_STORAGE_KEY);
};

export const getAuthData = () => {
  const authDataRaw = localStorage.getItem(AUTH_STORAGE_KEY);
  if (authDataRaw === null) {
    return null;
  }
  return JSON.parse(authDataRaw);
};
