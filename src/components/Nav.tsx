import React from 'react'
import { Link, useNavigate } from 'react-router-dom'
import useAuth from '../hooks/useAuth'

export const Nav = () => {
  const { authed, logout } = useAuth()
  const navigate = useNavigate()

  const handleLogout = () => {
    logout()
    navigate('/log-in')
  }

  return (
    <nav>
      {authed && (
        <>
          <ul>
            <li>
              <Link to='/welcome'>Welcome</Link>
            </li>
            <li>
              <Link to='/terms'>Terms</Link>
            </li>
            <li>
              <Link to='/settings'>Settings</Link>
            </li>
          </ul>
          <button onClick={handleLogout}>Logout</button>
        </>
      )}
    </nav>
  )
}
