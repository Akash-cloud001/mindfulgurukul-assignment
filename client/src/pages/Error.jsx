import React from 'react'
import dataNotFound from '../assets/dataNotFound.jpg';

const Error = () => {
  return (
    <div>
        <img src={dataNotFound} alt='data not found' className='absolute w-4/6 sm:w-1/2 md:w-1/3 aspect-auto top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2' />
    </div>
  )
}

export default Error