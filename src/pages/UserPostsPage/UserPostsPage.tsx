import type { FC } from 'react'
import { useParams } from 'react-router-dom'
import PostList from '../../widgets/PostList/PostList'
import UserTabs from '../../widgets/UserTabs/UserTabs'
import { usePosts } from '../../features/PostList/model/hooks/usePosts'

export const UserPostsPage: FC = () => {
  const { id } = useParams()
  const userId = Number(id) || 0
  const { loading } = usePosts({ userId })

  return (
    <div>
      <UserTabs userId={userId} />
      <PostList userId={userId} isLoading={loading} />
    </div>
  )
}

export default UserPostsPage
