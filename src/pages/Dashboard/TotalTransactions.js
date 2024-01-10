import React, { useEffect, useState } from 'react'
import { useAuthContext } from '../../hooks/useAuthContext'
import { useNavigate } from 'react-router-dom'
import { getFirestore, doc, getDoc } from 'firebase/firestore'
import './TotalTransactions.css'

export default function TotalTransactions() {
    const { user } = useAuthContext()
    const [totalTransactions, setTotalTransactions] = useState(null)
    const navigate = useNavigate()
    const handleClick = () => {navigate('/transactions')}

    useEffect(() => {
        const getTotalTransactions = async () => {
            const db = getFirestore()
            const docRef = doc(db, 'users', user.uid)
            const document = await getDoc(docRef)

            if (document) {
                setTotalTransactions(document.data().totalTransactions)
            } else {
                setTotalTransactions('no transactions found!')
            }
        }

        getTotalTransactions()
    })
  return (
    <div className='total-transactions-card' onClick={handleClick} >
      <h2 style={{whiteSpace: 'pre-line'}}> Total transactions: 

      </h2>
      <h2 style={{fontSize: 'xxx-large'}}>${totalTransactions}</h2>
    </div>
  )
}
