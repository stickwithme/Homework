import type { FC } from 'react'
import { useMemo, useState } from 'react'
import type { Post } from '../../entities/post/model/types'
import { PostCard } from '../../entities/post/ui/PostCard/PostCard'
import { PostLengthFilter } from '../../features/PostLengthFilter/ui/PostLengthFilter'
import { filterByLength } from '../../features/PostLengthFilter/lib/filterByLength'
import { withLoading } from '../../shared/lib/hoc/withLoading'
import '../../shared/styles/mobile.css'

interface PostListProps {
  isLoading?: boolean
  posts: Post[]
}

const PostListBase: FC<PostListProps> = ({ posts }) => {
  const [minLength, setMinLength] = useState<number>(0)
  const [query, setQuery] = useState<string>('')

  const filtered = useMemo(() => {
    const byLen = filterByLength(posts, minLength)
    const s = query.trim().toLowerCase()
    return s ? byLen.filter(p => p.title.toLowerCase().includes(s)) : byLen
  }, [posts, minLength, query])

  const handleQueryChange = (value: string) => setQuery(value)
  const handleMinLengthChange = (value: number) => setMinLength(value)

  return (
    <div className="container">
      <div className="filterBar">
        <PostLengthFilter minLength={minLength} setMinLength={handleMinLengthChange} />
        <label style={{ marginLeft: 8 }}>
          Поиск: <input value={query} onChange={(e) => handleQueryChange((e.target as HTMLInputElement).value)} placeholder="по заголовку" />
        </label>
      </div>

      <section id="posts" className="section">
        {filtered.map((post) => (
          <div key={post.id} style={{ marginBottom: 16 }}>
            <PostCard post={post} />
          </div>
        ))}
      </section>
    </div>
  )
}

export default withLoading(PostListBase)
