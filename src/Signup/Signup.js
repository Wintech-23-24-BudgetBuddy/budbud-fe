import './Signup.css'
import { useState } from 'react'
import { useSignup } from '../hooks/useSignup'

export default function Signup() {
  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')
  const [name, setName] = useState('')
  const { signup, error } = useSignup()

  const handleSumbit = (e) => {
    e.preventDefault()
    signup(email, password, name)
    setEmail('')
    setPassword('')
    setName('')
  }

  return (
    <form onSubmit={handleSumbit} className='signup-form'>
      <h2>Sign Up</h2>
      <label>
        <span>Email:</span>
        <input
          type='text'
          onChange={(e) => setEmail(e.target.value)}
          value={email}
          required
        />
      </label>
      <label>
        <span>Password:</span>
        <input
          type='password'
          onChange={(e) => setPassword(e.target.value)}
          value={password}
          required
        />
      </label>
      <label>
        <span>Username:</span>
        <input
          type='text'
          onChange={(e) => setName(e.target.value)}
          value={name}
          required
        />
      </label>
      <button className='btn'>Sign Up</button>
      {error && <p>{error}</p>}
    </form>
  )
}