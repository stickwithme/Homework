import type { FC } from 'react'
import { useMemo, useState, useCallback } from 'react'
import { PostCard } from '../../entities/post/ui/PostCard/PostCard'
import type { Post } from '../../entities/post/model/types'
import { mockPosts } from '../../lib/mocks/posts.mock'
import { withLoading } from '../../shared/lib/hoc/withLoading'
import { PostLengthFilter } from '../../features/PostLengthFilter/ui/PostLengthFilter'
import { filterByLength } from '../../features/PostLengthFilter/lib/filterByLength'
import { Modal, ModalHeader, ModalBody, ModalFooter } from '../../shared/ui/Modal/Modal'
import { Button } from '../../shared/ui/Button/Button'
import { CommentList, type Comment } from '../../widgets/CommentList/ui/CommentList'

const PostListBase: FC<{ isLoading?: boolean }> = () => {
  // длина заголовка
  const [minLength, setMinLength] = useState<number>(0)
  // модалка: выбранный пост
  const [selected, setSelected] = useState<Post | null>(null)

  const onFilterChange = useCallback((value: number) => setMinLength(value), [])

  const openModal = useCallback((post: Post) => {
    setSelected(post)
  }, [])

  const closeModal = useCallback(() => setSelected(null), [])

  const filtered = useMemo<Post[]>(() => {
    return filterByLength(mockPosts, minLength)
  }, [minLength])

  // примитивные комментарии по id поста (имитация)
  const commentsForSelected: Comment[] = useMemo(() => {
    if (!selected) return []
    return [
      { id: 1, text: `Комментарий к посту #${selected.id}: спасибо!` },
      { id: 2, text: `Полезно про: ${selected.title.slice(0, 10)}...` },
    ]
  }, [selected])

  return (
    <div>
      <PostLengthFilter minLength={minLength} setMinLength={onFilterChange} />

      <section id="posts" className="posts-container">
        {filtered.map((post) => (
          <div key={post.id} style={{ marginBottom: 16 }}>
            <PostCard post={post} />
            <div style={{ marginTop: 8 }}>
              <Button onClick={() => openModal(post)}>Подробнее</Button>
            </div>
          </div>
        ))}
      </section>

      <Modal isOpen={!!selected} onClose={closeModal}>
        <ModalHeader>{selected?.title}</ModalHeader>
        <ModalBody>
          <p>{selected?.body}</p>
          <p style={{ fontSize: 12, opacity: 0.7 }}>Автор: {selected?.userId}</p>
          <hr />
          <CommentList comments={commentsForSelected} />
        </ModalBody>
        <ModalFooter>
          <Button onClick={closeModal}>Закрыть</Button>
        </ModalFooter>
      </Modal>
    </div>
  )
}

export default withLoading(PostListBase)
