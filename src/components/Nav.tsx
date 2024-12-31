import React from 'react'
import { Link, useNavigate } from 'react-router-dom'
import useAuth from '../hooks/useAuth'

const navItemClassList = `
md:w-full block
px-4 py-2
rounded-md
text-xs text-left
bg-gray-400 bg-opacity-5 hover:bg-opacity-25 focus:bg-opacity-25
text-gray-300 hover:text-white focus:text-white
border border-transparent hover:border-gray-500 focus:border-gray-500 focus:outline-none
transition-all
`

export const Nav = ({ className }: { className?: string }) => {
  const { logout } = useAuth()
  const navigate = useNavigate()

  const handleLogout = () => {
    logout()
    navigate('/log-in')
  }

  return (
    <nav className={`${className} bg-gray-900 flex md:flex-col items-center justify-between p-4`}>
      {/* TODO: create a hamburger menu for small screens that opens via JS */}
      <div className='block xs:hidden'>HAMBURGER</div>
      <ul className='hidden xs:flex flex-row md:w-full md:flex-col items-center md:items-stretch md:justify-stretch gap-4'>
        <NavItem to='/current' label='CurrentTerm' />
        <NavItem to='/terms' label='All Terms' />
        <NavItem to='/settings' label='Settings' />
        <NavItem to='/log-in' label='Login(test)' />
      </ul>
      <button className={navItemClassList} onClick={handleLogout}>
        Logout
      </button>
    </nav>
  )
}

const NavItem = ({ to, label }: { to: string; label: string }) => {
  return (
    <li>
      <Link className={navItemClassList} to={to}>
        {label}
      </Link>
    </li>
  )
}
