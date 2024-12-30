import React from 'react'
import { Student } from './StudentForm'
import { Subject } from './SubjectForm'
import { HomeschoolEntry } from './EntryForm'

export interface Term {
  id: string
  startDate: Date
  endDate: Date
  activeStudents: Student[]
  activeSubjects: Subject[]
  files: File[]
  entries: HomeschoolEntry[]
}

export const TermForm = () => {
  return (
    <form>
      <p>Form to create and edit a term...</p>
    </form>
  )
}
