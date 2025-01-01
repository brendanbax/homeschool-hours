import React from 'react'
import { Layout } from '../components/Layout'

export const WelcomeView = () => {
  return (
    <Layout>
      <h1>Welcome View</h1>
      <section className='section'>
        <p className='section-title'>Welcome View</p>
        <p className='section-body'>Stepper for all the below...</p>
      </section>
      <ol>
        <li>Create student(s)</li>
        <li>Create subject(s) - or use predefined ones</li>
        <li>Create a term</li>
      </ol>
    </Layout>
  )
}
