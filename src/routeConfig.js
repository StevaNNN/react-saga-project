import { Navigate } from "react-router-dom";
import InputWithCustomFormating from "./components/Input/InputWithCustomFormating";
import FruitFinder from "./pages/FruitFinder";
import LoginPage from "./pages/Login";
import PostsPage from "./pages/Posts";
import TodoApp from "./pages/TodoApp";
import UsersPage from "./pages/Users";
import TanstackQuery from "./pages/TanstackQuery";

export const routes = [
  {
    path: "/login",
    text: "Login",
    element: <LoginPage />,
    index: true,
  },
  {
    path: "/users",
    text: "Users",
    element: <UsersPage />,
  },
  {
    path: "/posts",
    text: "Posts",
    element: <PostsPage />,
  },
  {
    path: "/fruit",
    text: "Fruits Input",
    element: <FruitFinder />,
  },
  {
    path: "/todo",
    text: "Todo",
    element: <TodoApp />,
  },
  {
    path: "/custom-input-formating",
    text: "Input With Formating",
    element: <InputWithCustomFormating />,
  },
  {
    path: "/tanstack-query",
    text: "Tanstack Query",
    element: <TanstackQuery />,
  },
  {
    path: "*",
    element: <Navigate to="/login" replace />,
  },
];
