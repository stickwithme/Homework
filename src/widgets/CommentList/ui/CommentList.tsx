import type { FC } from 'react'
import { useState, useCallback, memo } from 'react'

interface Comment {
  id: number
  text: string
}

interface CommentListProps {
  comments: Comment[]
}

const CommentList: FC<CommentListProps> = ({ comments }) => {
  const [collapsed, setCollapsed] = useState<boolean>(false)

  const toggleComments = useCallback(() => {
    setCollapsed((prev) => !prev)
  }, [])

  return (
    <div>
      <button onClick={toggleComments}>
        {collapsed ? 'Показать комментарии' : 'Свернуть комментарии'}
      </button>

      {!collapsed && (
        <ul>
          {comments.map((comment) => (
            <li key={comment.id}>{comment.text}</li>
          ))}
        </ul>
      )}
    </div>
  )
}

export default memo(CommentList)
