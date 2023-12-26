import { useState, useEffect } from 'react'
import { projectAuth } from '../firebase/config'
import { signInWithEmailAndPassword } from 'firebase/auth'
import { useAuthContext } from './useAuthContext' 

export const useLogin = () => {
    const [isCancelled, setIsCancelled] = useState(false)
    const [error, setError] = useState(null)
    const [isPending, setIsPending] = useState(false)
    const { dispatch } = useAuthContext()

    const login = (email, password) =>  {
        setError(null)
        setIsPending(true)
        signInWithEmailAndPassword(projectAuth, email, password)
          .then((userCredential) => {
              dispatch({ type: 'LOGIN', payload: userCredential.user })
              if (!isCancelled) {
                setIsPending(false)
                setError(null)
            } 
          }).catch((err) => {
            if (!isCancelled) {
              setIsPending(false)
              setError(err.message)
            } 
          })
    }

    useEffect(() => {
      return () => setIsCancelled(true)
    }, [])

    
    return { login, isPending, error }
}