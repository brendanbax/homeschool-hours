import React from 'react'
import { Nav } from './Nav'

export const Layout = ({ children }) => {
  return (
    <div className='flex flex-col md:flex-row'>
      <Nav className='md:h-dvh sticky top-0' />
      <main className='p-4 overflow-y-auto w-full'>
        {/* TODO: Remove this h-1200 when real content is rendered */}
        <div className='h-[1200px]'>{children}</div>
      </main>
    </div>
  )
}
