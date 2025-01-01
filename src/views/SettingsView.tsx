import React from 'react'
import { Layout } from '../components/Layout'
import { AppHeader } from '../components/AppHeader'
import { Button } from '../components/Button'

export const SettingsView = () => {
  return (
    <Layout>
      <AppHeader title='Settings'>
        <Button level='secondary'>Sample action</Button>
      </AppHeader>
      {/* TODO: list of students, list of subjects, user profile and billing content... */}
      {/* TODO: probably link this to tabs and subroutes for easy navigation... */}
      {/* Supabase and stripe: https://supabase.com/partners/integrations/supabase_wrapper_stripe */}
      {/* Firebase and stripe: https://extensions.dev/extensions/stripe/firestore-stripe-payments */}
      <p>list of students, list of subjects, user profile and billing content</p>
    </Layout>
  )
}
