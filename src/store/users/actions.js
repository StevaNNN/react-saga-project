import { SET_USERS, GET_USERS } from "./actionTypes";

export const getUsers = () => ({
  type: GET_USERS
})

export const setUsers = (users) => ({
  type: SET_USERS,
  users,
})
