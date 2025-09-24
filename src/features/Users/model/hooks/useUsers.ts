import { useEffect, useState } from 'react'
import type { User } from '../../../../entities/user/model/types'

export function useUsers() {
  const [users, setUsers] = useState<User[]>([])
  const [loading, setLoading] = useState(true)

  useEffect(() => {
    let ignore = false
    async function load() {
      try {
        const res = await fetch('https://jsonplaceholder.typicode.com/users')
        const data = await res.json()
        if (!ignore) setUsers(data)
      } finally {
        if (!ignore) setLoading(false)
      }
    }
    load()
    return () => { ignore = true }
  }, [])

  return { users, loading }
}
