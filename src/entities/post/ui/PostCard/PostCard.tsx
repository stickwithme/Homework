import type { FC } from 'react'
import styles from './PostCard.module.css'
import type { Post } from '../../model/types'

export const PostCard: FC<{ post: Post }> = ({ post }) => {
  const { title, body, userId } = post
  return (
    <article className={styles.card}>
      <h3 className={styles.title}>{title}</h3>
      <p className={styles.body}>{body}</p>
      <div className={styles.meta}>User ID: {userId}</div>
    </article>
  )
}
