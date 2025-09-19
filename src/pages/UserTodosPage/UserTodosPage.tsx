import type { FC } from 'react'
import { useParams } from 'react-router-dom'
import UserTabs from '../../widgets/UserTabs/UserTabs'

const UserTodosPage: FC = () => {
  const { id } = useParams()
  const userId = Number(id) || 0
  return (
    <div>
      <UserTabs userId={userId} />
      <h2>Задачи пользователя #{userId}</h2>
    </div>
  )
}

export default UserTodosPage
