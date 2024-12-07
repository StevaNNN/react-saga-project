import { all } from 'redux-saga/effects'
import UserSaga from './users/saga';
import PostsSaga from './posts/saga';

export default function* rootSaga() {
  yield all([
    UserSaga(),
    PostsSaga()
  ])
}
