import React from "react"
import { Layout } from "../components/Layout"

export const WelcomeView = () => {
  return (
    <Layout>
      <h1>Welcome View</h1>
      <p>Stepper to onboard new users...</p>
      <ol>
        <li>Create student(s)</li>
        <li>Create subject(s) - or use predefined ones</li>
        <li>Create a term</li>
      </ol>
    </Layout>
  )
}
