import { useDispatch, useSelector } from 'react-redux'
import { getUsers } from "./store/users/actions";
import { getPosts } from "./store/posts/actions";

function App() {
  const dispatch = useDispatch();
  const users = useSelector((state) => state.users.users);
  const posts = useSelector((state) => state.posts.posts);
  return (
    <>
      <div>
        <h1>Users names</h1>
        <button onClick={() => dispatch(getUsers())}>Fetch users</button>
        {users?.map((user, index) => <div key={index}>{user.name}</div>)}
      </div>
      <div>
        <h1>Posts title</h1>
        <button onClick={() => dispatch(getPosts())}>Fetch posts</button>
        {posts?.map((post, index) => <div key={index}>{post.title}</div>)}
      </div>
    </>
  );
}

export default App;
