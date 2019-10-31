import { runSaga } from "redux-saga";

export async function recordSaga(saga: any, initialAction: any) {
  const dispatched: any[] = [];

  await runSaga(
    {
      dispatch: action => dispatched.push(action)
    },
    saga,
    initialAction
  ).toPromise();

  return dispatched;
}
