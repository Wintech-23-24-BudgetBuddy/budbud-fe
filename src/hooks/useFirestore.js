import { useReducer, useEffect, useState } from "react"
import { projectFirestore, timestamp } from "../firebase/config"
import { collection, addDoc, deleteDoc, doc } from "firebase/firestore"


let initialState = {
    document: null, 
    error: null,
    success: null,
    isPending: false
}

const firestoreReducer = (state, action) => {
    switch (action.type) {
        case 'IS_PENDING':
            return {document: null, error: null, success: false, isPending: true}
        case 'ERROR':
            return {document: null, error: action.payload, success: false, isPending: false}
        case 'ADDED_DOCUMENT':
            return {document: action.payload, error: null, success: true, isPending: false}
        case 'DELETED_DOCUMENT':
            return {document: null, error: null, success: true, isPending: false}
        default:
            return state
    }
}

export const useFirestore = (c) => {
    const [state, dispatch] = useReducer(firestoreReducer, initialState)
    const [isCancelled, setIsCancelled] = useState(false)

    const ref = collection(projectFirestore, c)

    const notCancelledDispatch = (action) => {
        if (!isCancelled) {
            return dispatch(action)
        }
    }

    const addDocument = async (doc) => {
        dispatch({ type: 'IS_PENDING'})
        try {
            const createdAt = timestamp.fromDate(new Date())
            const added = await addDoc(ref, { ...doc, createdAt })
            notCancelledDispatch({ type: 'ADDED_DOCUMENT', payload: added})
        } catch (err) {
            notCancelledDispatch({ type: 'ERROR', payload: err.message })
        }
    }

    const deleteDocument = async (id) => {
        dispatch({ type: 'IS_PENDING'})
        try {
            await deleteDoc(doc(projectFirestore, 'jios', id))
            notCancelledDispatch({ type: 'DELETED_DOCUMENT' })
        } catch (err) {
            notCancelledDispatch({ type: 'ERROR', payload: err.message })
        }
    }

    useEffect(() => {
        return () => setIsCancelled(true)
      }, [])
    
      return { addDocument, deleteDocument, state }
}