import React from 'react'
import { useState } from 'react'
import { useLogin } from '../hooks/useLogin'

export default function Login() {
  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')
  const {login, error, isPending} = useLogin()

  const handleSubmit = (e) => {
    e.preventDefault()
    login(email, password)
  }

  return (
    <form onSubmit={handleSubmit} className='login-form'>
      <h2>
        Login
      </h2>
      <label>
        <span>
          Email: 
        </span>
        <input
          type='text'
          placeholder='Enter your email here'
          onChange={(e) => setEmail(e.target.value)}
          value={email}
        />
      </label>
      <label>
        <span>
          Password: 
        </span>
        <input
          type='text'
          placeholder='enter your password here'
          onChange={(e) => setPassword(e.target.value)}
          value={password}
        />
      </label>
      {!isPending && <button className='button'>Login</button>}
      {isPending && <button className='button' disabled>Loading...</button>}
      {error && <p>{error}</p>}
    </form>
  )
}
