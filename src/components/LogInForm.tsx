import React, { FormEvent } from 'react'
import { useLocation, useNavigate } from 'react-router-dom'
import useAuth from '../hooks/useAuth'

export const LogInForm = () => {
  const navigate = useNavigate()
  const { login } = useAuth()
  const { state } = useLocation()

  const handleLogin = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault()
    // TODO: put this behind a real API call then resolve onSuccess()
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
      <h1>Log in form</h1>
      <button>Log In</button>
    </form>
  )
}
