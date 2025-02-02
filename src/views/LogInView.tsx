import React, { useEffect } from 'react'
import { LogInForm } from '../components/LogInForm'
import useAuth from '../hooks/useAuth'
import { useNavigate } from 'react-router-dom'

export const LogInView = () => {
  const navigate = useNavigate()
  const { authed } = useAuth()

  useEffect(() => {
    if (authed) {
      navigate('/current')
    }
  }, [])

  return (
    <div className='min-h-screen flex flex-col items-center justify-center bg-gray-200'>
      <div className='bg-white rounded-lg p-4 shadow-lg w-full max-w-sm'>
        <h1>Homeschool Hours</h1>
        <LogInForm />
        <p className='text-sm mt-2'>Create account (link)</p>
      </div>
    </div>
  )
}
