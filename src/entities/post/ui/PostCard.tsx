import React from 'react'

export interface Post {
  id: number
  title: string
  body: string
  userId: number
}

interface PostCardProps {
  post: Post
}

const PostCard: React.FC<PostCardProps> = ({ post }) => {
  return (
    <article className="post-card">
      <h3>{post.title}</h3>
      <p>{post.body}</p>
      <div className="post-meta">
        <span>User ID: {post.userId}</span>
      </div>
    </article>
  )
}

export default PostCard
