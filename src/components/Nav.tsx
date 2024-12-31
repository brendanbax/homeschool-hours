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
    <nav className='bg-gray-900 text-white flex items-center'>
      {authed && (
        <>
          <ul>
            <li>
              <Link to='/current'>Current Term</Link>
            </li>
            <li>
              <Link to='/terms'>All Terms</Link>
            </li>
            <li>
              <Link to='/settings'>Settings</Link>
            </li>
            <li>
              <Link to='/log-in'>Login (dupe)</Link>
            </li>
          </ul>
          <button onClick={handleLogout}>Logout</button>
        </>
      )}
    </nav>
  )
}
