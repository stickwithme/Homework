import type { FC } from 'react'
import { useState, useCallback, memo } from 'react'

export interface Comment {
  id: number
  text: string
}

interface CommentListProps {
  comments: Comment[]
}

const CommentListBase: FC<CommentListProps> = ({ comments }) => {
  const [collapsed, setCollapsed] = useState<boolean>(true)

  const toggleComments = useCallback(() => {
    setCollapsed((c) => !c)
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

export const CommentList = memo(CommentListBase)
