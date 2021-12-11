import React from 'react'
import { useAppDispatch, useAppSelector } from '../../app/hooks'
import { getUsers, selectCurrentUsers } from './usersSlice'

export default function Users() {
  const users = useAppSelector(selectCurrentUsers)
  const dispatch = useAppDispatch()

  const [page, setPage] = React.useState(1)

  React.useEffect(() => {
    dispatch(getUsers(page))
  }, [page, dispatch])

  return (
    <div>
      {users.total_pages && (
        <div className='d-flex align-items-center justify-content-center mt-3'>
          <button onClick={() => setPage(page - 1)} className='btn btn-primary mx-2' disabled={page <= 1}>
            Prev
          </button>
          <button onClick={() => setPage(page + 1)} className='btn btn-primary mx-2' disabled={page >= users.total_pages}>
            Next
          </button>
        </div>
      )}
      {users?.data?.map((user: any) => (
        <div className='card mt-3' key={user.id}>
          <div className='card-body d-flex align-items-center'>
            <img src={user.avatar} className='rounded d-block' alt={user.first_name} />
            <div className='flex-1 mx-5'>
              <h5 className='card-title'>
                {user.first_name} {user.last_name}
              </h5>
              <h6 className='card-text'>{user.email}</h6>
            </div>
          </div>
        </div>
      ))}
    </div>
  )
}
