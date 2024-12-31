import React, { StrictMode } from 'react'
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import { AuthProvider } from './hooks/useAuth'
import { LogInView } from './views/LogInView'
import { WelcomeView } from './views/WelcomeView'
import { SettingsView } from './views/SettingsView'
import { TermListView } from './views/TermListView'
import { TermView } from './views/TermView'
import { ProtectedRoutes } from './components/ProtectedRoutes'
import { CurrentTermView } from './views/CurrentTermView'

export const App = () => {
  return (
    <StrictMode>
      <AuthProvider>
        <BrowserRouter>
          {/* 
            <Route index element={<Home />} />
            <Route path="about" element={<About />} />
            TODO: understand this more b/c I don't really get it...
            https://reactrouter.com/start/library/routing#configuring-routes
            <Route element={<AuthLayout />}>
              <Route path="login" element={<Login />} />
              <Route path="register" element={<Register />} />
            </Route>
          */}
          <Routes>
            {/* Public routes */}
            <Route path='/' element={<LogInView />} />
            <Route path='/log-in' element={<LogInView />} />
            {/* Protected routes */}
            <Route element={<ProtectedRoutes />}>
              <Route path='/current' element={<CurrentTermView />} />
              <Route path='/welcome' element={<WelcomeView />} />
              <Route path='/settings' element={<SettingsView />} />
              <Route path='/terms' element={<TermListView />} />
              <Route path='/terms/:id' element={<TermView />} />
            </Route>
          </Routes>
        </BrowserRouter>
      </AuthProvider>
    </StrictMode>
  )
}
