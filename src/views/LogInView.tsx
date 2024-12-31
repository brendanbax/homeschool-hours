import React, { useEffect } from 'react'
import { Layout } from '../components/Layout'
import { LogInForm } from '../components/LogInForm'
import useAuth from '../hooks/useAuth'
import { useNavigate } from 'react-router-dom'

export const LogInView = () => {
  let navigate = useNavigate()
  let auth = useAuth()

  useEffect(() => {
    if (auth) {
      navigate('/current')
    }
    return
  }, [])

  return (
    <Layout>
      <h1>Log In View</h1>
      <LogInForm />
    </Layout>
  )
}
