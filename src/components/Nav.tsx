import React, { ReactNode, useState } from 'react'
import { Link, useNavigate } from 'react-router-dom'
import useAuth from '../hooks/useAuth'
import { AcademicCapIcon, ArrowLeftStartOnRectangleIcon, Cog6ToothIcon, ExclamationTriangleIcon, ListBulletIcon } from '@heroicons/react/16/solid'
import { SlideOver } from './SlideOver'

export const Nav = ({ className }: { className?: string }) => {
  const [mobileNavIsOpen, setMobileNavIsOpen] = useState(false)

  const NavLinkList = ({ className }: { className?: string; onNavigate?: () => void }) => {
    const { logout } = useAuth()
    const navigate = useNavigate()

    const handleLogout = () => {
      logout()
      setMobileNavIsOpen(false)
      navigate('/log-in')
    }

    return (
      <ul className={`${className} w-full h-full flex-col items-stretch gap-4`}>
        <NavItem to='/current' label='CurrentTerm' icon={<AcademicCapIcon />} />
        <NavItem to='/terms' label='All Terms' icon={<ListBulletIcon />} />
        <NavItem to='/settings' label='Settings' icon={<Cog6ToothIcon />} />
        <NavItem to='/log-in' label='Login(test)' icon={<ExclamationTriangleIcon />} />
        <div className='mt-auto'>
          <NavItem onClick={handleLogout} label='Log Out' icon={<ArrowLeftStartOnRectangleIcon />} />
        </div>
      </ul>
    )
  }

  const NavItem = ({ to, onClick, label, icon, onNavigate }: { to?: string; onClick?: () => void; label: string; icon: ReactNode; onNavigate?: () => void }) => {
    const navItemClassList = `
w-full flex
px-4 py-2 gap-4
rounded-md
text-xs text-left
bg-gray-400 bg-opacity-5 hover:bg-opacity-25 focus:bg-opacity-25
text-gray-300 hover:text-white focus:text-white
border border-transparent hover:border-gray-500 focus:border-gray-500 focus:outline-none
transition-all
`

    const navItemIconClass = 'w-4 h-4 flex-shrink-0'

    if (onClick) {
      return (
        <button className={navItemClassList} onClick={onClick}>
          <span className={navItemIconClass}>{icon}</span>
          <span>{label}</span>
        </button>
      )
    }

    if (to) {
      return (
        <li>
          <Link className={navItemClassList} to={to} onClick={() => setMobileNavIsOpen(false)}>
            <span className={navItemIconClass}>{icon}</span>
            <span>{label}</span>
          </Link>
        </li>
      )
    }

    return null
  }

  return (
    <nav className={`${className} bg-gray-900 flex md:flex-col items-center justify-between p-4`}>
      {/* NOTE: Mobile navigation trigger */}
      <button className='flex md:hidden flex-col gap-y-1' onClick={() => setMobileNavIsOpen(true)}>
        <span className='w-4 h-0.5 rounded-full bg-white' />
        <span className='w-4 h-0.5 rounded-full bg-white' />
        <span className='w-4 h-0.5 rounded-full bg-white' />
      </button>
      {/* NOTE: Mobile navigation drawer */}
      {mobileNavIsOpen && (
        <SlideOver title='Menu' className='md:hidden' onClose={() => setMobileNavIsOpen(false)}>
          <NavLinkList className='flex md:hidden invert' onNavigate={() => setMobileNavIsOpen(false)} />
        </SlideOver>
      )}
      <NavLinkList className='hidden md:flex' />
    </nav>
  )
}
