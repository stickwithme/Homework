import type { FC } from 'react'
import { useMemo, useState, useCallback } from 'react'
import { PostCard } from '../../entities/post/ui/PostCard/PostCard'
import { withLoading } from '../../shared/lib/hoc/withLoading'
import { PostLengthFilter } from '../../features/PostLengthFilter/ui/PostLengthFilter'
import { filterByLength } from '../../features/PostLengthFilter/lib/filterByLength'
import { Button } from '../../shared/ui/Button/Button'
import { CommentList } from '../../widgets/CommentList/ui/CommentList'
import '../../shared/styles/mobile.css'
import { useGetCommentsByPostQuery } from '../../entities/comment/api/commentsApi'
import { mockPosts } from '../../lib/mocks/posts.mock'

const PostListBase: FC<{ isLoading?: boolean; userId?: number }> = ({ userId }) => {
  // длина заголовка
  const [minLength, setMinLength] = useState<number>(0)
  // поиск по заголовку
  const [q, setQ] = useState<string>('')
  // раскрытые комментарии по id поста
  const [open, setOpen] = useState<Record<number, boolean>>({})

  const onFilterChange = useCallback((value: number) => setMinLength(value), [])
  const onQueryChange = useCallback((value: string) => setQ(value), [])
  const toggleComments = useCallback((id: number) => {
    setOpen(prev => ({ ...prev, [id]: !prev[id] }))
  }, [])

  const filtered = useMemo(() => {
    const byUser = userId ? mockPosts.filter(p => p.userId === userId) : mockPosts
    const byLen = filterByLength(byUser, minLength)
    const s = q.trim().toLowerCase()
    return s ? byLen.filter(p => p.title.toLowerCase().includes(s)) : byLen
}, [userId, minLength, q])

  return (
    <div className="container">
      <div className="filterBar">
        <PostLengthFilter minLength={minLength} setMinLength={onFilterChange} />
        {!userId && (
          <label style={{ marginLeft: 8 }}>
            Поиск: <input value={q} onChange={(e) => onQueryChange((e.target as HTMLInputElement).value)} placeholder="по заголовку" />
          </label>
        )}
      </div>

      <section id="mockPosts" className="section">
        {filtered.map((post) => (
          <div key={post.id} style={{ marginBottom: 16 }}>
            <PostCard post={post} />
            <div style={{ marginTop: 8 }}>
              <Button onClick={() => toggleComments(post.id)}>
                {open[post.id] ? 'Скрыть комментарии' : 'Комментарии'}
              </Button>
            </div>
            {open[post.id] && (
              <div style={{ marginTop: 8 }}>
                <CommentList
                  comments={[
                    { id: 1, text: `Комментарий к посту #${post.id}: спасибо!` },
                    { id: 2, text: `Полезно про: ${post.title.slice(0, 10)}...` },
                  ]}
                />
              </div>
            )}
          </div>
        ))}
      </section>
    </div>
  )
}

export default withLoading(PostListBase)


// Обёртка для загрузки комментариев поста
const CommentsWrapper: FC<{ postId: number }> = ({ postId }) => {
  const { data = [], isFetching } = useGetCommentsByPostQuery(postId)
  if (isFetching) return <p>Загрузка комментариев…</p>
  return <CommentList comments={data.map(c => ({ id: c.id, text: c.body }))} />
}