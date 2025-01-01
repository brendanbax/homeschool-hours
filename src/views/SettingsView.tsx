import React from 'react'
import { Layout } from '../components/Layout'
import { AppHeader } from '../components/AppHeader'
import { Button } from '../components/Button'
import { Table } from '../components/Table'
import { Student } from '../components/StudentForm'
import { Subject } from '../components/SubjectForm'

export const SettingsView = () => {
  const mockStudentData: Student[] = [
    { name: 'Johnny', id: 'zipzap_000', coreGoal: 0, totalGoal: 0 },
    { name: 'Susie', id: 'zipzap_000', coreGoal: 0, totalGoal: 0 },
    { name: 'Kimber', id: 'zipzap_000', coreGoal: 0, totalGoal: 0 },
    { name: 'Zane', id: 'zipzap_000', coreGoal: 0, totalGoal: 0 },
  ]

  const studentTableConfig = {
    columns: [
      { key: 'name', label: 'Name' },
      { key: 'coreGoal', label: 'Core Goal' },
      { key: 'totalGoal', label: 'Total Goal' },
    ],
    tableData: mockStudentData,
  }

  const mockSubjectData: Subject[] = [
    { id: 'abc_123', label: 'Science', color: 'red', isCore: false },
    { id: 'abc_123', label: 'Math', color: 'blue', isCore: false },
    { id: 'abc_123', label: 'Language Arts', color: 'green', isCore: false },
  ]

  const subjectTableConfig = {
    columns: [
      { key: 'label', label: 'Subject' },
      { key: 'color', label: 'Color' },
      { key: 'isCore', label: 'Core' },
    ],
    tableData: mockSubjectData,
  }

  return (
    <Layout>
      <AppHeader title='Settings'>
        <Button level='secondary'>Sample action</Button>
      </AppHeader>
      {/* TODO: probably link this to tabs and subroutes for easy navigation... */}
      {/* Supabase and stripe: https://supabase.com/partners/integrations/supabase_wrapper_stripe */}
      {/* Firebase and stripe: https://extensions.dev/extensions/stripe/firestore-stripe-payments */}
      <section className='section'>
        <p className='section-title'>Students</p>
        <p className='section-body'>A list of all the students across all terms. Add and edit student details below.</p>
        <Table key='students' columns={studentTableConfig.columns} tableData={studentTableConfig.tableData} />
      </section>
      <section className='section'>
        <p className='section-title'>Subjects</p>
        <p className='section-body'>List of subjects available across all terms.</p>
        <Table key='subjects' columns={subjectTableConfig.columns} tableData={subjectTableConfig.tableData} />
      </section>
      <section className='section'>
        <p className='section-title'>Profile and Billing</p>
        <p className='section-body'>Manage your user profile and billing information</p>
      </section>
    </Layout>
  )
}
