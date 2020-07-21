import { all, put, takeLatest } from "redux-saga/effects";
import * as types from "../actionTypes";
import { TodosActions } from "../../types/actions";


function *todosSaga (params: TodosActions) {
  
  try {
    // eslint-disable-next-line no-undef
    yield put({ type: typeof types.ADD_TODO, payload: params });
  } catch (error) {
    console.warn(error)
  }
}

export default function *() {
  yield all([
    yield takeLatest(types.ADD_TODO, todosSaga),
  ])
}
