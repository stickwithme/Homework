import { useEffect, useState } from 'react'
import { mockUsers } from '../../../../lib/mocks/users.mock'
import type { User } from '../../../../entities/user/model/types'

export function useUsers() {
  const [users, setUsers] = useState<User[]>([])
  const [loading, setLoading] = useState(true)

  useEffect(() => {
    const t = setTimeout(() => {
      setUsers(mockUsers)
      setLoading(false)
    }, 200)
    return () => clearTimeout(t)
  }, [])

  return { users, loading }
}
