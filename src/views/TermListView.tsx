import React from 'react'
import { Layout } from '../components/Layout'
import { AppHeader } from '../components/AppHeader'
import { Button } from '../components/Button'
import { Table, TableProps } from '../components/Table'

export const TermListView = () => {
  const mockTermData = [
    { foo: 'zip', bar: 'zap', baz: 'zop' },
    { foo: 'zip', bar: 'zap', baz: 'zop' },
    { foo: 'zip', bar: 'zap', baz: 'zop' },
    { foo: 'zip', bar: 'zap', baz: 'zop' },
  ]

  const tableConfig: TableProps = {
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
      <p className='py-4 text-gray-900'>List terms that can be selcted to view details</p>
      <Table columns={tableConfig.columns} tableData={tableConfig.tableData} />
      {/* Supabase: https://supabase.com/database */}
      {/* Firebase: https://firebase.google.com/products/firestore */}
      {/* For attachments / upgraded storage: https://supabase.com/storage or https://firebase.google.com/docs/storage */}
    </Layout>
  )
}
