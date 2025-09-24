import type { FC } from 'react'
import { useParams } from 'react-router-dom'
import { useGetPostByIdQuery } from '../../entities/post/api/postsApi'
import { useGetCommentsByPostQuery } from '../../entities/comment/api/commentsApi'
import { CommentList } from '../../widgets/CommentList/ui/CommentList'

const PostDetailsPage: FC = () => {
  const { id } = useParams()
  const postId = Number(id) || 0
  const { data: post, isLoading: loadingPost } = useGetPostByIdQuery(postId)
  const { data: comments = [], isLoading: loadingComments } = useGetCommentsByPostQuery(postId)

  if (!post && (loadingPost || loadingComments)) return <p>Загрузка…</p>
  if (!post) return <p>Пост не найден</p>

  return (
    <article>
      <h2>{post.title}</h2>
      <p>{post.body}</p>
      <p style={{opacity:0.6}}>User ID: {post.userId}</p>
      <hr />
      <h3>Комментарии</h3>
      <CommentList comments={comments.map(c => ({ id: c.id, text: c.body }))} />
    </article>
  )
}

export { PostDetailsPage }
