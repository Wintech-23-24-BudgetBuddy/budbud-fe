import React, { useEffect, useState } from 'react'
import { useAuthContext } from '../../hooks/useAuthContext'
import { useNavigate } from 'react-router-dom'
import { getFirestore, doc, getDoc } from 'firebase/firestore'
import './TotalIncome.css'

export default function TotalIncome() {
    const { user } = useAuthContext()
    const [totalIncome, setTotalIncome] = useState(null)
    const navigate = useNavigate()
    const handleClick = () => {navigate('/transactions')}

    useEffect(() => {
        const getTotalIncome = async () => {
            const db = getFirestore()
            const docRef = doc(db, 'users', user.uid)
            const document = await getDoc(docRef)

            if (document) {
                setTotalIncome(document.data().totalIncome)
            } else {
                setTotalIncome('no Income found!')
            }
        }

        getTotalIncome()
    })

  return (
    <div 
        className='total-income-card' 
        onClick={handleClick}>
      <h2 style={{whiteSpace: 'pre-line'}}> Total income: 

      </h2>
      <h2 style={{fontSize: 'xxx-large'}}>${totalIncome}</h2>
    </div>
  )
}
