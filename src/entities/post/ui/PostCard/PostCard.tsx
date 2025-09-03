import type { FC } from 'react'
import styles from './PostCard.module.css'
import type { Post } from '../../model/types'

const PostCard: FC<{ post: Post }> = ({ post }) => {
  return (
    <article className={styles.card}>
      <h3 className={styles.title}>{post.title}</h3>
      <p className={styles.body}>{post.body}</p>
      <div className={styles.meta}>User ID: {post.userId}</div>
    </article>
  )
}

export default PostCard
