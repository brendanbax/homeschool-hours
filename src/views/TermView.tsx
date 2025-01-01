import React from 'react'
import { Layout } from '../components/Layout'

export const TermView = () => {
  return (
    <Layout>
      <h1>Term View</h1>
      <section className='section'>
        <p className='section-title'>Current Term View</p>
        <p className='section-body'>List of students... action to create term, close term, view all terms</p>
      </section>
    </Layout>
  )
}
