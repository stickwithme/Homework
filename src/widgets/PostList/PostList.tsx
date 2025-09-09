import type { FC } from 'react'
import { useMemo, useState, useCallback } from 'react'
import PostCard from '../../entities/post/ui/PostCard/PostCard'
import type { Post } from '../../entities/post/model/types'
import { mockPosts } from '../../lib/mocks/posts.mock'
import { withLoading } from '../../shared/lib/hoc/withLoading'
import { PostLengthFilter } from '../../features/PostLengthFilter/ui/PostLengthFilter'
import { filterByLength } from '../../features/PostLengthFilter/lib/filterByLength'
import { Modal, ModalHeader, ModalBody, ModalFooter } from '../../shared/ui/Modal/Modal'

const PostList: FC<{ isLoading?: boolean }> = () => {
  // длина заголовка
  const [minLength, setMinLength] = useState<number>(0)
  // модалка: выбранный пост
  const [selected, setSelected] = useState<Post | null>(null)

  // мемоизированный список постов после фильтра
  const filteredPosts = useMemo(() => {
    return filterByLength(mockPosts, minLength)
  }, [minLength])

  // колбэки
  const handleCardClick = useCallback((post: Post) => {
    setSelected(post)
  }, [])

  const closeModal = useCallback(() => setSelected(null), [])

  return (
    <div className="post-list">
      <div className="container">
        <h2>Последние посты</h2>

        <PostLengthFilter minLength={minLength} setMinLength={setMinLength} />

        <div className="posts-container">
          {filteredPosts.map((post) => (
            <div key={post.id} onClick={() => handleCardClick(post)} style={{ cursor: 'pointer' }}>
              <PostCard post={post} />
            </div>
          ))}
          {filteredPosts.length === 0 && <p>Нет постов с такой длиной заголовка.</p>}
        </div>
      </div>

      {/* Модальное окно c compound components */}
      <Modal isOpen={!!selected} onClose={closeModal}>
        <ModalHeader>{selected?.title}</ModalHeader>
        <ModalBody>
          <p>{selected?.body}</p>
          <p style={{ fontSize: 12, opacity: 0.7 }}>Автор: {selected?.userId}</p>
        </ModalBody>
        <ModalFooter>
          <button onClick={closeModal}>Закрыть</button>
        </ModalFooter>
      </Modal>
    </div>
  )
}

export default withLoading(PostList)
