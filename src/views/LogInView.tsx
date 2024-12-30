import React from 'react'
import { Layout } from '../components/Layout'
import { LogInForm } from '../components/LogInForm'

export const LogInView = () => {
  return (
    <Layout>
      <h1>Log In</h1>
      <LogInForm />
    </Layout>
  )
}
