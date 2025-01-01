import React, { ReactElement } from 'react'

export const AppHeader = ({ title, children }: { title: string; children?: ReactElement }) => {
  return (
    <div className='flex justify-between items-end border-b border-gray-200 pb-2 w-full'>
      <h1 className='text-2xl font-semibold'>{title}</h1>
      <div>{children}</div>
    </div>
  )
}
