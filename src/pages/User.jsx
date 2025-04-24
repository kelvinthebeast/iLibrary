import React, { useEffect, useState } from 'react'
import { getUsers } from '../services/userService'

export default function Users() {
  const [users, setUsers] = useState([])

  useEffect(() => {
    getUsers().then(setUsers).catch(err => console.error(err))
  }, [])

  return (
    <div>
      <h1>User List</h1>
      <ul>
        {users.map(user => (
          <li key={user.id}>{user.username} ({user.email})</li>
        ))}
      </ul>
    </div>
  )
}
