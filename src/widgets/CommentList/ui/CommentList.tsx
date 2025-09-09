import type { FC } from 'react'
import { useState, useCallback, memo } from 'react'
import styles from './CommentList.module.css'

interface Comment {
  id: number
  text: string
}

interface CommentListProps {
  comments: Comment[]
  title?: string
}

const CommentList: FC<CommentListProps> = ({ comments, title = 'Комментарии' }) => {
  const [collapsed, setCollapsed] = useState<boolean>(false)

  const toggleComments = useCallback(() => {
    setCollapsed((prev) => !prev)
  }, [])

  return (
    <section className={styles.wrapper} aria-label="Список комментариев">
      <div className={styles.header}>
        <span className={styles.title}>{title} ({comments.length})</span>
        <button
          type="button"
          className={`${styles.toggle} btn`}
          onClick={toggleComments}
          aria-expanded={!collapsed}
          aria-controls="comments-content"
        >
          {collapsed ? 'Показать' : 'Свернуть'}
        </button>
      </div>

      <div
        id="comments-content"
        className={[styles.collapse, collapsed ? styles.hidden : ''].join(' ')}
      >
        <ul className={styles.list + ' ' + styles.inner}>
          {comments.map((comment) => (
            <li key={comment.id} className={styles.item}>
              {comment.text}
            </li>
          ))}
        </ul>
      </div>
    </section>
  )
}

export default memo(CommentList)
