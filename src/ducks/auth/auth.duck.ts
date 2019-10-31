import { put, takeLatest, fork } from "redux-saga/effects";
import { clearAuthData, getAuthData } from "../../services/auth.service";
import { ILoginModel } from "../../commons/types/models/viewModels/login.model";
import { IActionModel } from "../../commons/types/models/systemModels/action.model";

const LOGIN_REQUEST = "@@Auth/LOGIN_REQUEST";
const LOGOUT_REQUEST = "@@Auth/LOGOUT_REQUEST";
const LOGIN_SUCCESS = "@@Auth/LOGIN_SUCCESS";
const LOGOUT_SUCCESS = "@@Auth/LOGOUT_SUCCESS";
const INIT_USERDATA = "@@Auth/INIT_USERDATA";

// action creator
export const loginAction = (loginValues: ILoginModel) => {
  return { type: LOGIN_REQUEST, payload: { loginValues } };
};
export const logoutAction = () => {
  return { type: LOGOUT_REQUEST };
};
// reducer
interface IInitialState {
  username: string;
  name: string;
  roles: string[];
}

const initialState: IInitialState = {
  username: "",
  name: "",
  roles: []
};

export const AuthReducer = (state = initialState, action: IActionModel) => {
  switch (action.type) {
    case LOGIN_SUCCESS: {
      return {
        ...state,
        ...action.payload
      };
    }
    case LOGOUT_SUCCESS: {
      return {
        ...state,
        username: null,
        name: null,
        roles: []
      };
    }
    case INIT_USERDATA: {
      const { username, name, roles } = action.payload;
      return {
        ...state,
        username,
        name,
        roles
      };
    }
    default: {
      return state;
    }
  }
};

// selector
export const selectUsername = (state: any) => state.AuthReducer.username;
export const selectUserRoles = (state: any) => state.AuthReducer.roles;
// side effect
function* watchLogin(action: IActionModel) {
  const adminUsername = process.env.REACT_APP_ADMIN_USERNAME;
  const adminPassword = process.env.REACT_APP_ADMIN_PASSWORD;
  const { loginValues } = action.payload;
  const { username, password } = loginValues;
  try {
    if (username === adminUsername && password === adminPassword) {
      const authValues = {
        apiToken: "Fake Token KEKW",
        name: "le van thang",
        username: username,
        roles: ["admin", "user", "VIP"]
      };
      localStorage.setItem("auth", JSON.stringify(authValues));

      yield put({
        type: LOGIN_SUCCESS,
        payload: authValues
      });
    } else {
      console.log("failed");
    }
  } catch (error) {
    console.log(error);
  }
}

function* watchLogout(action: IActionModel) {
  clearAuthData();
  yield put({
    type: LOGOUT_SUCCESS
  });
}

function* initUserData() {
  const userData = getAuthData();
  if (userData !== null) {
    yield put({
      type: INIT_USERDATA,
      payload: userData
    });
  }
}

export const AuthSaga = [
  takeLatest(LOGIN_REQUEST, watchLogin),
  takeLatest(LOGOUT_REQUEST, watchLogout),
  fork(initUserData)
];
