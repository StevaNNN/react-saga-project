import { combineReducers } from 'redux';
import Users from './users/reducer';
import Posts from './posts/reducer';

const rootReducer = combineReducers({
  users: Users,
  posts: Posts
})

export default rootReducer;
