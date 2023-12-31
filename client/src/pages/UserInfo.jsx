import React from 'react'

const UserInfo = ({userData}) => {
  return (
    <div className='h-full w-full grid grid-cols-1 gap-4 grid-col-2 sm:grid-cols-3 md:grid-cols-4'>
        {userData?.map((user)=>{
            return(
                <div className='m-auto border bg-gray-900 h-max w-max px-4 py-4 backdrop-blur-sm' key={user.id}>
                    <div>
                        <p>
                           Name: {user.name}
                        </p>
                        <p>
                            Email: {user.email}
                        </p>
                        <p>
                            Phone: {user.phone}
                        </p>
                    </div>
                    <div className='flex justify-between mt-4'>
                        <button className='h-max w-max px-2 py-1 bg-blue-500 text-white rounded-sm'>
                                Edit
                        </button>
                        <button className='h-max w-max px-2 py-1 bg-red-500 text-white rounded-sm'>
                                Delete
                        </button>
                    </div>
                </div>
            )
        })}
    </div>
    
  )
}

export default UserInfo;