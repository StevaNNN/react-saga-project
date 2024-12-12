import React from 'react'
import { useDispatch, useSelector } from 'react-redux';
import { getPosts } from '../../store/posts/actions';

export const PostsPage = () => {
    const dispatch = useDispatch();
  const posts = useSelector((state) => state.posts.posts);
    return (
        <div>
        <h1>Posts title</h1>
        <button onClick={() => dispatch(getPosts())}>Fetch posts</button>
        <ul>
          {posts?.map((post, index) => (
            <li key={index}>{post.title}</li>
          ))}
        </ul>
      </div>
    )
}

export default PostsPage;