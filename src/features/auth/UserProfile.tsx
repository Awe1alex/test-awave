import React from 'react'
import { useAppDispatch, useAppSelector } from '../../app/hooks'
import { selectUser, update } from './authSlice'

export default function UserProfile() {
  const user = useAppSelector(selectUser)
  const dispatch = useAppDispatch()

  const [email, setEmail] = React.useState('')
  const [firstName, setFirstName] = React.useState('')
  const [lastName, setLastName] = React.useState('')

  React.useEffect(() => {
    setEmail(user.email || '')
    setFirstName(user.first_name || '')
    setLastName(user.last_name || '')
  }, [user])

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault()

    // Id 1 is set because login users does not have an id
    dispatch(update({ email, firstName, lastName, id: user.id || 1 }))
  }

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
      </div>
      <div className='mb-3'>
        <label htmlFor='exampleInputPassword1' className='form-label'>
          First name
        </label>
        <input type='text' className='form-control' id='exampleInputPassword1' value={firstName} onChange={e => setFirstName(e.target.value)} />
      </div>
      <div className='mb-3'>
        <label htmlFor='exampleInputPassword1' className='form-label'>
          Last name
        </label>
        <input type='text' className='form-control' id='exampleInputPassword1' value={lastName} onChange={e => setLastName(e.target.value)} />
      </div>

      <button type='submit' className='btn btn-primary'>
        Submit
      </button>
    </form>
  )
}
