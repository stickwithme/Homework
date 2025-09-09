import type { FC } from 'react'
import { useParams } from 'react-router-dom'
import UserTabs from '../../widgets/UserTabs/UserTabs'

const UserAlbumsPage: FC = () => {
  const { id } = useParams()
  const userId = Number(id) || 0
  return (
    <div>
      <UserTabs userId={userId} />
      <h2>Альбомы пользователя #{userId}</h2>
    </div>
  )
}

export default UserAlbumsPage
