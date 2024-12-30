import React from "react"
import { UUIDTypes } from "uuid"
import { v4 as uuidv4 } from "uuid"
import { Subject } from "./SubjectForm"
import { Student } from "./StudentForm"

export interface HomeschoolEntry {
  id: UUIDTypes
  date: Date
  subjectId: Subject["id"]
  studentId: Student["id"]
  minutes: number
  isHome: boolean
  altLocation: string
  notes: string
}

export const EntryForm = () => {
  const sampleEntryPayload: HomeschoolEntry = {
    id: uuidv4(),
    date: new Date(),
    subjectId: uuidv4(),
    studentId: uuidv4(),
    minutes: 0,
    isHome: false,
    altLocation: "somewhere",
    notes: "some value",
  }

  console.log(sampleEntryPayload)

  return (
    <form>
      <p>Form to create and edit a subject...</p>
    </form>
  )
}
