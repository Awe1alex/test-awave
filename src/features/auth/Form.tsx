import React from 'react'
import { useDispatch } from 'react-redux'
import { login, register } from './authSlice'

type FormProps = {
  type: 'login' | 'register'
}

export default function Form({ type }: FormProps) {
  const dispatch = useDispatch()

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault()
    if (type === 'login') {
      // login
      dispatch(login({ password, email }))
    } else {
      // register
      dispatch(register({ password, email }))
    }
  }

  const [email, setEmail] = React.useState('')
  const [password, setPassword] = React.useState('')

  return (
    <form onSubmit={handleSubmit}>
      <div className='mb-3'>
        <label htmlFor='exampleInputEmail1' className='form-label'>
          Email address
        </label>
        <input
          type='email'
          className='form-control'
          id='exampleInputEmail1'
          aria-describedby='emailHelp'
          value={email}
          onChange={e => setEmail(e.target.value)}
        />
        <div id='emailHelp' className='form-text'>
          We'll never share your email with anyone else.
        </div>
      </div>
      <div className='mb-3'>
        <label htmlFor='exampleInputPassword1' className='form-label'>
          Password
        </label>
        <input type='password' className='form-control' id='exampleInputPassword1' value={password} onChange={e => setPassword(e.target.value)} />
      </div>

      <button type='submit' className='btn btn-primary'>
        Submit
      </button>
    </form>
  )
}
