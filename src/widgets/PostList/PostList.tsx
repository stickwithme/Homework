import type { FC } from 'react'
import { useMemo, useState, useCallback } from 'react'
import PostCard from '../../entities/post/ui/PostCard/PostCard'
import type { Post } from '../../entities/post/model/types'
import { withLoading } from '../../shared/lib/hoc/withLoading'
import { PostLengthFilter } from '../../features/PostLengthFilter/ui/PostLengthFilter'
import { filterByLength } from '../../features/PostLengthFilter/lib/filterByLength'
import {
  Modal,
  ModalHeader,
  ModalBody,
  ModalFooter,
} from '../../shared/ui/Modal/Modal'
import { usePosts } from '../../features/PostList/model/hooks/usePosts'
import { Link } from 'react-router-dom'

const PostList: FC<{ isLoading?: boolean; userId?: number }> = ({ userId }) => {
  const { posts, loading } = usePosts({ userId })

  // длина заголовка
  const [minLength, setMinLength] = useState<number>(0)
  // модалка: выбранный пост
  const [selected, setSelected] = useState<Post | null>(null)

  // мемоизированный список постов после фильтра
  const filteredPosts = useMemo(() => {
    return filterByLength(posts, minLength)
  }, [posts, minLength])

  // колбэки
  const handleCardClick = useCallback((post: Post) => {
    setSelected(post)
  }, [])

  const closeModal = useCallback(() => setSelected(null), [])

  return (
    <div className="post-list">
      <div className="container">
        <div className="posts-wrap">
          <h2>Последние посты</h2>

          <PostLengthFilter minLength={minLength} setMinLength={setMinLength} />

          <div className="posts-container">
            {filteredPosts.map((post) => (
              <div
                key={post.id}
                onClick={() => handleCardClick(post)}
                style={{ cursor: 'pointer' }}
              >
                <Link
                  to={`/posts/${post.id}`}
                  style={{ textDecoration: 'none', color: 'inherit' }}
                >
                  <PostCard post={post} />
                </Link>
              </div>
            ))}
            {!loading && filteredPosts.length === 0 && (
              <p>Нет постов с такой длиной заголовка.</p>
            )}
          </div>
        </div>
      </div>

      <Modal isOpen={!!selected} onClose={closeModal}>
        <ModalHeader>{selected?.title}</ModalHeader>
        <ModalBody>
          <p>{selected?.body}</p>
          <p style={{ fontSize: 12, opacity: 0.7 }}>
            Автор: {selected?.userId}
          </p>
        </ModalBody>
        <ModalFooter>
          <button className="btn" onClick={closeModal}>
            Закрыть
          </button>
        </ModalFooter>
      </Modal>
    </div>
  )
}

export default withLoading(PostList)
