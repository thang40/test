import { HTTPTimeoutError, APIError } from "../commons/types/errorTypes";

export const axiosErrorHandler = (error: any) => {
  if (process.env.NODE_ENV !== "production") {
    if (error.response) {
      // The request was made and the server responded with a status code
      // that falls out of the range of 2xx
      console.group("error response");
      console.log(error.response.data);
      console.log(error.response.status);
      console.log(error.response.headers);
      console.groupEnd();
    } else if (error.request) {
      // The request was made but no response was received
      // `error.request` is an instance of XMLHttpRequest in the browser and an instance of
      // http.ClientRequest in node.js
      console.group("error request");
      console.log(error.request);
      console.log(error.message);
      console.groupEnd();
      if (error.message.indexOf("timeout") > -1) {
        throw new HTTPTimeoutError();
      }
    } else {
      // Something happened in setting up the request that triggered an Error
      console.group("Not a Http Error");
      console.log(error.message);
      console.groupEnd();
    }
  }
  throw new APIError();
};
