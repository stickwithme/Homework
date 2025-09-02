import React from 'react'
import styles from './PostCard.module.css'

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
    <article className={styles.card}>
      <h3 className={styles.title}>{post.title}</h3>
      <p className={styles.body}>{post.body}</p>
      <div className={styles.meta}>
        <span>User ID: {post.userId}</span>
      </div>
    </article>
  )
}

export default PostCard
