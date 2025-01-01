import React, { ButtonHTMLAttributes, ReactElement } from 'react'

interface ButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
  children: string
  level?: 'primary' | 'secondary' | 'tertiary' | 'icon'
  icon?: ReactElement
}

export const Button = ({ children, level = 'primary', icon, ...props }: ButtonProps) => {
  if (level === 'icon' && !icon) {
    throw new Error('<Button />: An icon is required when using a button level of icon.')
  }

  const base = 'flex items-center gap-2 rounded-md text-xs font-medium border transition-colors'
  const padding = level === 'icon' ? 'p-2' : icon ? 'py-1.5 pl-2 pr-3' : 'py-1.5 px-3 '
  const levels = {
    primary: {
      shape: 'bg-blue-600 hover:bg-blue-700 border-transparent',
      text: 'text-white',
      icon: 'text-white',
    },
    secondary: {
      shape: 'bg-white hover:bg-gray-100 border-gray-300',
      text: 'text-gray-600',
      icon: 'text-gray-400',
    },
    tertiary: {
      shape: 'bg-white hover:bg-blue-50 border-transparent shadow-none',
      text: 'text-blue-600',
      icon: 'text-blue-500',
    },
    icon: {
      shape: 'bg-white hover:bg-gray-100 border-gray-400',
      text: '',
      icon: 'text-gray-500',
    },
  }

  return (
    <button className={`${base} ${padding} ${levels[level].shape}`} {...props}>
      {icon && <span className={`${levels[level].icon} w-4 h-4`}>{icon}</span>}
      {level !== 'icon' && <span className={levels[level].text}>{children}</span>}
    </button>
  )
}
