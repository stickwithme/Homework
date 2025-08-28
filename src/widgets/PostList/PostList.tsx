import React from 'react'
import PostCard from '../../entities/post/ui/PostCard'
import type { Post } from '../../entities/post/ui/PostCard'

const mockPosts: Post[] = [
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
]

const PostList: React.FC = () => {
  return (
    <div className="post-list">
      <div className="container">
        <h2>Последние посты</h2>
        <div className="posts-container">
          {mockPosts.map((post) => (
            <PostCard key={post.id} post={post} />
          ))}
        </div>
      </div>
    </div>
  )
}

export default PostList
