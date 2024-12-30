import React from 'react'
import { Link } from 'react-router-dom'

export const Nav = () => {
  return (
    <nav>
      <ul>
        <li>
          <Link to=''>Link 1</Link>
        </li>
        <li>
          <Link to=''>Link 2</Link>
        </li>
        <li>
          <Link to=''>Link 3</Link>
        </li>
      </ul>
    </nav>
  )
}
