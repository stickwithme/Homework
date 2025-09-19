import type { FC } from 'react'
import { useParams } from 'react-router-dom'
import { mockPosts } from '../../lib/mocks/posts.mock'

const PostDetailsPage: FC = () => {
  const { id } = useParams()
  const postId = Number(id)
  const post = mockPosts.find(p => p.id === postId)

  if (!post) return <p>Пост не найден</p>

  return (
    <article>
      <h2>{post.title}</h2>
      <p>{post.body}</p>
      <p style={{opacity:0.6}}>User ID: {post.userId}</p>
    </article>
  )
}

export default PostDetailsPage
