import React from 'react'
import PostCard from '../../entities/post/ui/PostCard/PostCard'
import { mockPosts } from '../../lib/mocks/posts.mock'

const PostList: React.FC = () => {
  return (
    <div className="post-list">
      <div className="container">
        <h2>Последние посты</h2>
        <div className="posts-container">
          {mockPosts.map((post) => (
            <PostCard key={post.id} post={post} />
          ))}
        </div>
      </div>
    </div>
  )
}

export default PostList
