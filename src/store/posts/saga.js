import { all, fork, takeEvery, put, call } from "redux-saga/effects";
import { GET_POSTS } from "./actionTypes";
import { setPosts } from "./actions";

function fetchPosts() {
  return fetch("https://jsonplaceholder.typicode.com/posts").then((response) =>
    response.json()
  );
}

function* workGetPostsFetch() {
  const posts = yield call(fetchPosts);
  yield put(setPosts(posts));
}

/**
 * Fire get posts action on each use
 * */
function* watchGetPostSaga() {
  yield takeEvery(GET_POSTS, workGetPostsFetch);
}

function* PostSaga() {
  yield all([fork(watchGetPostSaga)]);
}

export default PostSaga;
