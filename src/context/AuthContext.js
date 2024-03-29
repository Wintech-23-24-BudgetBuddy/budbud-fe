import React from 'react'
import { createContext, useReducer, useEffect } from 'react'
import { projectAuth } from '../firebase/config'
import { onAuthStateChanged } from 'firebase/auth'
import PropTypes from 'prop-types';

export const AuthContext = createContext()

export const authReducer = (state, action) => {
  switch (action.type) {
    case 'LOGIN':
      return { ...state, user: action.payload }
    case 'LOGOUT':
      return { ...state, user: null }
    case 'AUTH_IS_READY':
      return { user: action.payload, authIsReady: true }
    default:
      return state
  }
}

export const AuthContextProvider = ({ children }) => {
  const [state, dispatch] = useReducer(authReducer, { 
    user: null,
    //if the user is logged in or not
    authIsReady: false
  })

  useEffect(() => {
    const unsub = onAuthStateChanged(projectAuth, user => {
      dispatch({ type: 'AUTH_IS_READY', payload: user })
      unsub()
    })
  }, [])

  console.log('AuthContext state:', state)

  AuthContextProvider.propTypes = {
    children: PropTypes.node.isRequired,
  };
  
  return (
    <AuthContext.Provider value={{ ...state, dispatch }}>
      { children }
    </AuthContext.Provider>
  )

}