import { all, fork, takeEvery, put, call } from 'redux-saga/effects';
import { GET_USERS, SET_USERS } from "./actionTypes";

function fetchUsers() {
  return fetch('https://jsonplaceholder.typicode.com/users').then(response => response.json());
}

function* workGetUsersFetch() {
  const users = yield call(fetchUsers);
  yield put({ type: SET_USERS, users });
}

function* watchGetUserSaga() {
  yield takeEvery(GET_USERS, workGetUsersFetch)
}

function* UserSaga() {
  yield all([
    fork(watchGetUserSaga),
  ])
}

export default UserSaga;
