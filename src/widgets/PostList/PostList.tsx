import React from 'react'
import PostCard from '../../entities/post/ui/PostCard'
import type { Post } from '../../entities/post/ui/PostCard'
import { mockPosts } from '../../lib/mocks/posts.mock'

const __deprecatedLocalMockPosts: Post[] = [
  {
    id: 1,
    title: 'Введение в React',
    body: 'React - это библиотека JavaScript для создания пользовательских интерфейсов. В этой статье мы рассмотрим основы работы с React.',
    userId: 1,
  },
  {
    id: 2,
    title: 'TypeScript: лучшие практики',
    body: 'TypeScript добавляет статическую типизацию в JavaScript. Узнайте, как правильно использовать TypeScript в ваших проектах.',
    userId: 2,
  },
  {
    id: 3,
    title: 'Архитектура современных веб-приложений',
    body: 'Современные веб-приложения требуют продуманной архитектуры. Рассмотрим различные подходы к организации кода.',
    userId: 3,
  },
  {
    id: 4,
    title: 'CSS Modules и стилизация компонентов',
    body: 'CSS Modules позволяют изолировать стили компонентов и избежать конфликтов имен классов.',
    userId: 1,
  },
  {
    id: 5,
    title: 'React Hooks: useState и useEffect',
    body: 'Хуки позволяют использовать состояние и другие возможности React без написания классов.',
    userId: 2,
  },
]

const PostList: React.FC = () => {
  return (
    <div className="post-list">
      <div className="container">
        <h2>Последние посты</h2>
        <div className="posts-container">
          {/* Удален пустой тег {} */}
          {mockPosts.map((post) => (
            <PostCard key={post.id} post={post} />
          ))}
        </div>
      </div>
    </div>
  )
}

export default PostList
