import React from "react"
import { v4 as uuidv4 } from 'uuid';

export interface Student {
    id: string,
    name: string,
    coreGoal: number,
    totalGoal: number,
    activeTimer?: number,
}

export const StudentForm = () => {
    const sampleStudentPayload: Student = {
        id: uuidv4(),
        name: 'foo',
        coreGoal: 0,
        totalGoal: 0,
        activeTimer: 0,
    }
    
    console.log(sampleStudentPayload)
    
    return (
        <form>
            <p>Form to create and edit a student...</p>
        </form>
    )
}