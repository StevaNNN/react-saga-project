import { SET_POSTS } from "./actionTypes";

const initialState = {
  posts: []
}

export const contracts = (state = initialState, action) => {
  switch (action.type) {
    case SET_POSTS:
      return (
        {
          ...state,
          posts: action.posts
        }
      )
    default:
      return state;
  }
}

export default contracts;
