import { XMarkIcon } from '@heroicons/react/16/solid'
import React, { ReactNode } from 'react'

export const SlideOver = ({ title, onClose, position = 'left', className, children }: { title: string; onClose: () => void; position?: 'left' | 'right'; className?: string; children: ReactNode }) => {
  // TODO: when mounting lock page scroll....
  return (
    <div className={`${className} fixed inset-0`}>
      <div className='fixed inset-0 bg-gray-900 bg-opacity-80 z-0' onClick={onClose} />
      <div
        className={`${position === 'left' ? 'animate-slide-right rounded-r-2xl' : 'animate-slide-left rounded-l-2xl'} absolute top-0 bottom-0 w-full h-full flex flex-col max-w-sm p-4 bg-white z-10 shadow-lg`}
      >
        <div className='flex items-center justify-between mb-2'>
          <h2 className='text-lg font-semibold text-gray-900'>{title}</h2>
          {/* TODO: replace me with an icon button */}
          <button onClick={onClose} className='p-2 border border-gray-200 rounded-lg'>
            <XMarkIcon className='w-4 h-4 text-gray-700' />
          </button>
        </div>
        {children}
      </div>
    </div>
  )
}
