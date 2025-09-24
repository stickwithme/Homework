import type { FC } from 'react'

export type Comment = { id: number; text: string }

interface CommentListProps {
  comments: Comment[]
}

export const CommentList: FC<CommentListProps> = ({ comments }) => {
  return (
    <ul>
      {comments.map(c => <li key={c.id}>{c.text}</li>)}
    </ul>
  )
}
