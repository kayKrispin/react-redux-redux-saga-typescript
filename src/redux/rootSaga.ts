import { all } from "redux-saga/effects";

import todosSaga from "../redux/sagas";

export default function *rootSaga() {
  yield all([
    todosSaga(),
  ]);
}
