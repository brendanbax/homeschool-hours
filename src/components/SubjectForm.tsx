import React from "react"
import { v4 as uuidv4 } from "uuid"

export interface Subject {
  id: string
  label: string
  color: string
  isCore: boolean
}

export const SubjectForm = () => {
  const sampleSubjectPayload: Subject = {
    id: uuidv4(),
    label: "foo",
    color: "bar",
    isCore: false,
  }

  console.log(sampleSubjectPayload)

  return (
    <form>
      <p>Form to create and edit a subject...</p>
    </form>
  )
}
