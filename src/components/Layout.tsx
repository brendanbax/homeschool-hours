import React from 'react'
import { Nav } from './Nav'

export const Layout = ({ children }) => {
  return (
    <div className='flex flex-col md:flex-row'>
      <Nav className='md:h-dvh sticky top-0' />
      <main className='p-4 overflow-y-auto'>
        <div className='h-[1200px]'>{children}</div>
      </main>
    </div>
  )
}
