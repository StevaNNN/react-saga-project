import { SET_USERS } from "./actionTypes";

const initialState = {
  users: []
}

export const users = (state = initialState, action) => {
  switch (action.type) {
    case SET_USERS:
      return (
        {
          ...state,
          users: action.users
        }
      )
    default:
      return state;
  }
}

export default users;
