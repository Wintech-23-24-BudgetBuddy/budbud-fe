import { Link } from '@mui/material'
import React from 'react'
import { useLogout } from '../../hooks/useLogout';
import { useAuthContext } from '../../hooks/useAuthContext';
import Balance from './Balance';
import TotalTransactions from './TotalTransactions';
import TotalIncome from './TotalIncome';
import './Dashboard.css';

export default function Dashboard() {
  const { user } = useAuthContext();
  const { logout } = useLogout();

  return (
    <div>
       {user && 
       <Link 
          sx={{textDecoration: 'none', 
              padding:'6px 12px',
              color: '#000000',
              fontWeight:'600',
              backgroundColor: 'rgb(227, 182, 227)', 
              border: '2px solid #000000',
              borderRadius: '5px',
              '&:hover': {
                backgroundColor: 'white'
              }}}
          onClick={logout}>
            Logout
        </Link>}
       <div className='user-info'
       >
        <Balance/>
        <TotalTransactions/>
        <TotalIncome/>
       </div>
    </div>
  )
}
