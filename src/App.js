import { useDispatch, useSelector } from "react-redux";
import { getUsers } from "./store/users/actions";
import { getPosts } from "./store/posts/actions";
import Practice from "./Practise";
import Practice2 from "./Practise2";
import TodoApp from "./Practise3";

function App() {
  const dispatch = useDispatch();
  const users = useSelector((state) => state.users.users);
  const posts = useSelector((state) => state.posts.posts);
  return (
    <>
      <div>
        <h1>Users names</h1>
        <button onClick={() => dispatch(getUsers())}>Fetch users</button>
        <ul>
          {users?.map((user, index) => (
            <li key={index}>{user.name}</li>
          ))}
        </ul>
      </div>
      <div>
        <h1>Posts title</h1>
        <button onClick={() => dispatch(getPosts())}>Fetch posts</button>
        <ul>
          {posts?.map((post, index) => (
            <li key={index}>{post.title}</li>
          ))}
        </ul>
      </div>
      <Practice />
      <Practice2 />
      <TodoApp />
    </>
  );
}

export default App;
