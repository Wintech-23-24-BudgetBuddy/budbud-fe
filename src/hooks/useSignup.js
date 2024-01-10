import { useState, useEffect } from "react";
import { createUserWithEmailAndPassword, updateProfile } from "firebase/auth";
import { projectAuth } from "../firebase/config";
import { useAuthContext } from "./useAuthContext";
import { doc, getFirestore, setDoc } from "firebase/firestore";

export const useSignup = () => {
    const [isCancelled, setIsCancelled] = useState(false)
    const [error, setError] = useState(null)
    const [isPending, setIsPending] = useState(false)
    const { dispatch } = useAuthContext()

    const signup = (email, password, displayName) => {
        setError(null)
        setIsPending(true)
        createUserWithEmailAndPassword(projectAuth, email, password)
            .then( async (userCredential) => {
                const user = userCredential.user;
                await updateProfile(user, { displayName })
                    .then((user) => {
                        dispatch({type: 'LOGIN', payload: user})
                    })
                const db = getFirestore()
                const docRef = doc(db, 'users', user.uid)
                await setDoc(docRef, {
                    likedPosts: [],
                    contacts: [],
                    userName: user.displayName,
                    uid: user.uid
                })
                if (!isCancelled) {
                    setIsPending(false)
                    setError(null)
                }          
            })
            .catch((err) => {
                if (!isCancelled) {
                    setError(err.message)
                    setIsPending(false)
                }
            })
    }

    useEffect(() => {
        return () => setIsCancelled(true)
    }, [])

    return { signup, error, isPending }
}