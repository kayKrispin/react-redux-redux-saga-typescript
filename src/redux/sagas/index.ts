import { all, put, takeLatest } from "redux-saga/effects";
import * as types from "../actionTypes";
import { ITodo } from "../../types";


function *todosSaga (params: ITodo) {

  try {
    // eslint-disable-next-line no-undef
    yield put({ type: types.ADD_TODO, payload: params });
  } catch (error) {
    console.warn(error)
  }
}

export default function *() {
  yield all([
    yield takeLatest(types.GET_FILMS_REQUEST, todosSaga),
  ])
}
