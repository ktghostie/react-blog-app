import React from 'react'
import { Link } from 'react-router'
import posts from '../data/posts'

function PostList() {
  return (
    <div>
      {posts.map((post) => (
        <div key={post.id}>
          <Link to={`/posts/${post.id}`}>
            {post.title}
          </Link>
        </div>
      ))}
    </div>
  );
}

export default PostList;