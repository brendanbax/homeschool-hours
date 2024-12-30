import React, { StrictMode } from 'react'
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import { AuthProvider } from './hooks/useAuth'
import { LogInView } from './views/LogInView'
import { WelcomeView } from './views/WelcomeView'
import { SettingsView } from './views/SettingsView'
import { TermListView } from './views/TermListView'
import { TermView } from './views/TermView'
import { RequireAuth } from './components/RequireAuth'

export const App = () => {
  return (
    <StrictMode>
      <AuthProvider>
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
            <Route
              path='/welcome'
              element={
                <RequireAuth>
                  <WelcomeView />
                </RequireAuth>
              }
            />
            <Route
              path='/settings'
              element={
                <RequireAuth>
                  <SettingsView />
                </RequireAuth>
              }
            />
            <Route
              path='/terms'
              element={
                <RequireAuth>
                  <TermListView />
                </RequireAuth>
              }
            />
            <Route
              path='/terms/:id'
              element={
                <RequireAuth>
                  <TermView />
                </RequireAuth>
              }
            />
          </Routes>
        </BrowserRouter>
      </AuthProvider>
    </StrictMode>
  )
}
