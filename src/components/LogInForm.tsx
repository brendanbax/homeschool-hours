import React from 'react'
import { useLocation, useNavigate } from 'react-router-dom'

export const LogInForm = () => {
  const navigate = useNavigate()
  const { state } = useLocation()

  const handleLogin = () => {
    // TODO: put this behind a real API call then resolve onSuccess()
    // logIn()
    //   .then(() => {
    //     navigate(state?.path || '/welcome')
    //   })
    //   .catch((e) => {
    //     console.log(e)
    //   })
  }

  return (
    <form onSubmit={handleLogin}>
      <h1>Log in form</h1>
      <button>Log In</button>
    </form>
  )
}
