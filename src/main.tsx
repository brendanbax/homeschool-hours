import './index.css'
import React, { StrictMode } from 'react'
import { Container, createRoot } from 'react-dom/client'
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import { App } from './App'
import { LogInView } from './views/LogInView'
import { SettingsView } from './views/SettingsView'
import { TermView } from './views/TermView'
import { TermListView } from './views/TermListView'
import { WelcomeView } from './views/WelcomeView'

createRoot(document.getElementById('root') as Container).render(
  <StrictMode>
    <BrowserRouter>
      {/* 
      <Route index element={<Home />} />
      <Route path="about" element={<About />} />

      TODO: understand this more b/c I don't really get it...
      <Route element={<AuthLayout />}>
        <Route path="login" element={<Login />} />
        <Route path="register" element={<Register />} />
      </Route>

      Read more here... https://reactrouter.com/start/library/routing#configuring-routes
      <Route path="concerts">
        <Route index element={<ConcertsHome />} />
        <Route path=":city" element={<City />} />
        <Route path="trending" element={<Trending />} />
      </Route>
      */}
      <Routes>
        {/* Public routes */}
        <Route path='/' element={<App />} />
        <Route path='/log-in' element={<LogInView />} />
        {/* Protected routes */}
        <Route path='/welcome' element={<WelcomeView />} />
        <Route path='/settings' element={<SettingsView />} />
        <Route path='/terms' element={<TermListView />} />
        <Route path='/terms/:id' element={<TermView />} />
      </Routes>
    </BrowserRouter>
  </StrictMode>,
)
