import type { FC } from 'react'
import { Outlet, useParams } from 'react-router-dom'
import UserTabs from '../../widgets/UserTabs/UserTabs'

const UserPage: FC = () => {
  const { id } = useParams()
  const userId = Number(id) || 0
  return (
    <div>
      <UserTabs userId={userId} />
      <Outlet />
    </div>
  )
}

export default UserPage
