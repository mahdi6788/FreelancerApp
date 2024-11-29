import React from 'react'
import UsersTable from '../feature/admin/users/UsersTable'

function Users() {
    return (
        <div className='font-black text-ssecondary-700 text-xl mb-8'>
        <h1>
            کاربران
        </h1>
        <UsersTable />
        </div>
      )
}

export default Users