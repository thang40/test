import createSagaMiddleware from "redux-saga";
import { combineReducers, createStore, applyMiddleware, compose } from "redux";
import { HomeReducer, AuthReducer, AuthSaga } from "./ducks";
import { all } from "redux-saga/effects";

const RootReducer = combineReducers({
  AuthReducer,
  HomeReducer
});
let sagaMiddleware;
const isProd = process.env.NODE_ENV === "production";

function* rootSaga() {
  yield all([...AuthSaga]);
}
export const initStore = () => {
  const composeEnhancers =
    window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;

  sagaMiddleware = createSagaMiddleware({
    onError: error => {
      if (!isProd) {
        console.log(error);
      }
    }
  });
  const store = createStore(
    RootReducer,
    isProd
      ? applyMiddleware(sagaMiddleware)
      : composeEnhancers(applyMiddleware(sagaMiddleware))
  );

  sagaMiddleware.run(rootSaga);

  return store;
};
