import React from 'react'
import { Layout } from '../components/Layout'
import { AppHeader } from '../components/AppHeader'
import { Button } from '../components/Button'
import { Cog6ToothIcon } from '@heroicons/react/16/solid'

export const CurrentTermView = () => {
  return (
    <Layout>
      <AppHeader title='Current Term'>
        <Button level='secondary' icon={<Cog6ToothIcon />}>
          Sample action
        </Button>
      </AppHeader>
      <section className='section'>
        <p className='section-title'>Current Term View</p>
        <p className='section-body'>List of associated students w actions per child</p>
      </section>
    </Layout>
  )
}
