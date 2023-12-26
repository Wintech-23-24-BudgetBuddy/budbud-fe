import { projectAuth } from "../firebase/config"
import { signOut } from "firebase/auth"
import { useEffect, useState } from 'react'
import { useAuthContext } from "./useAuthContext"

export const useLogout = () => {
    const [isCancelled, setIsCancelled] = useState(false)
    const [error, setError] = useState(null)
    const [isPending, setIsPending] = useState(false)
    const { dispatch } = useAuthContext()

    const logout = () => {
        setError(null)
        setIsPending(true)
        signOut(projectAuth)
            .then(() => {
                dispatch({ type: 'LOGOUT'})
                if (!isCancelled) {
                    setIsPending(false)
                    setError(null)
                } 
            })
            .catch((err) => {
                if (!isCancelled) {
                    setIsPending(false)
                    setError(err.message)
                }
            })
    }

    useEffect(() => {
        return () => setIsCancelled(true)
      }, [])
    
    return { logout, error, isPending }
}