import { all, fork, takeEvery, put, call } from "redux-saga/effects";
import { GET_USERS } from "./actionTypes";
import { setUsers } from "./actions";

function fetchUsers() {
  return fetch("https://jsonplaceholder.typicode.com/users").then((response) =>
    response.json()
  );
}

// calling api and then w8 until that finishes secondary put data to the redux store
function* workGetUsersFetch() {
  const users = yield call(fetchUsers);
  yield put(setUsers(users));
}

// on every call of this action trigger workerFunction
function* watchGetUserSaga() {
  yield takeEvery(GET_USERS, workGetUsersFetch);
}

function* UserSaga() {
  yield all([fork(watchGetUserSaga)]);
}

export default UserSaga;
