import React from 'react'
import { useDispatch } from 'react-redux'
import { useAppSelector } from '../../app/hooks'
import { login, register, selectLoginError, selectRegisterError } from './authSlice'

type FormProps = {
  type: 'login' | 'register'
}

export default function Form({ type }: FormProps) {
  const dispatch = useDispatch()

  const loginError = useAppSelector(selectLoginError)
  const registerError = useAppSelector(selectRegisterError)

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
        <EmailError error={type === 'login' ? loginError : registerError} />
      </div>
      <div className='mb-3'>
        <label htmlFor='exampleInputPassword1' className='form-label'>
          Password
        </label>
        <input type='password' className='form-control' id='exampleInputPassword1' value={password} onChange={e => setPassword(e.target.value)} />
        <PasswordError error={type === 'login' ? loginError : registerError} />
      </div>

      <button type='submit' className='btn btn-primary'>
        Submit
      </button>
      <GlobalError error={type === 'login' ? loginError : registerError} />
    </form>
  )
}

type ErrorProps = {
  error: string | null | undefined
}

const EmailError = ({ error }: ErrorProps) => {
  return error?.includes('email') ? <div className='form-text text-danger'>{error}</div> : <div className='form-text'>Please enter email</div>
}

const PasswordError = ({ error }: ErrorProps) => {
  return error?.includes('password') ? <div className='form-text text-danger'>{error}</div> : <div className='form-text'>Please enter password</div>
}

const GlobalError = ({ error }: ErrorProps) => {
  return error?.indexOf('email') === -1 && error?.indexOf('password') === -1 ? <div className='form-text text-danger mb-2'>{error}</div> : null
}
