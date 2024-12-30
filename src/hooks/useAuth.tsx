import React, { useContext } from 'react'

interface AuthContext {
  authed: boolean
  logout: () => Promise<unknown>
  login: () => Promise<unknown>
}

const authContext = React.createContext({} as AuthContext)

const useAuth = () => {
  const [authed, setAuthed] = React.useState(false)

  return {
    authed,
    login() {
      return new Promise<void>((res) => {
        setAuthed(true)
        res()
      })
    },
    logout() {
      return new Promise<void>((res) => {
        setAuthed(false)
        res()
      })
    },
  }
}

export const AuthProvider = ({ children }) => {
  const auth = useAuth()

  return <authContext.Provider value={auth}>{children}</authContext.Provider>
}

export default () => {
  return useContext(authContext)
}
