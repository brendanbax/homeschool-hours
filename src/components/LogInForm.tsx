import React, { FormEvent } from 'react'
import { useLocation, useNavigate } from 'react-router-dom'
import useAuth from '../hooks/useAuth'
import { Button } from './Button'

export const LogInForm = () => {
  const navigate = useNavigate()
  const { login } = useAuth()
  const { state } = useLocation()

  const handleLogin = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault()
    // TODO: put this behind a real API call then resolve onSuccess()
    // Supabase: https://supabase.com/auth
    // Firebase: https://firebase.google.com/docs/auth
    login()
      .then(() => {
        navigate(state?.path || '/welcome')
      })
      .catch((e) => {
        console.log(e)
      })
  }

  return (
    <form onSubmit={handleLogin}>
      {/* TODO: leverage react-hook-forms where possible */}
      {/* https://react-hook-form.com/ */}
      <p>Email address:</p>
      <p>Password:</p>
      <div className='flex gap-x-2'>
        <Button>Log in</Button>
        <Button
          level='secondary'
          onClick={(e) => {
            e.preventDefault()
            console.log('TODO: handle password reset')
          }}
        >
          Rest password
        </Button>
      </div>
    </form>
  )
}
