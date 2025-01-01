import React from 'react'
import { Layout } from '../components/Layout'
import { AppHeader } from '../components/AppHeader'
import { Button } from '../components/Button'
import { Table } from '../components/Table'

export const TermListView = () => {
  const mockTermData = [
    { foo: 'zip', bar: 'zap', baz: 'zop' },
    { foo: 'zip', bar: 'zap', baz: 'zop' },
    { foo: 'zip', bar: 'zap', baz: 'zop' },
    { foo: 'zip', bar: 'zap', baz: 'zop' },
  ]

  const tableConfig = {
    columns: [
      { key: 'foo', label: 'Foo' },
      { key: 'bar', label: 'Bar' },
      { key: 'baz', label: 'Baz' },
    ],
    tableData: mockTermData,
  }

  return (
    <Layout>
      <AppHeader title='All Terms'>
        <Button level='secondary'>New term</Button>
      </AppHeader>
      <section className='section'>
        <p className='section-title'>Term List View</p>
        <p className='section-body'>List terms that can be selcted to view details</p>
      </section>
      <Table key='terms' columns={tableConfig.columns} tableData={tableConfig.tableData} />
      {/* Supabase: https://supabase.com/database */}
      {/* Firebase: https://firebase.google.com/products/firestore */}
      {/* For attachments / upgraded storage: https://supabase.com/storage or https://firebase.google.com/docs/storage */}
    </Layout>
  )
}
