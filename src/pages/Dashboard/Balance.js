import { doc, getDoc, getFirestore } from 'firebase/firestore'
import React, { useEffect, useState } from 'react'
import { useNavigate } from 'react-router-dom'
import { useAuthContext } from '../../hooks/useAuthContext'
import './Balance.css'

export default function Balance() {
    const { user } = useAuthContext()
    const navigate = useNavigate()
    const [balance, setBalance] = useState(null)

    useEffect(() => {
        const getBalance = async () => {
            const db = getFirestore()
            const docRef = doc(db, 'users', user.uid)
            const document = await getDoc(docRef)

            if (document) {
                setBalance(document.data().balance)
            } else {
                setBalance('no balance found!')
            }
        }

        getBalance()
    })

const handleClick = () => {navigate('/transactions')}

  return (
    <div 
        className='balance-card'
        onClick={handleClick} 
       >
    
      <h2 style={{whiteSpace: 'pre-line'}}>
        Current Balance: 
      </h2>
     <h2 style={{fontSize: 'xxx-large'}}>${balance}</h2>
    </div>
  )
}
