import React from 'react'
import { Button } from '../ui/button'

const UserCard = () => {
  return (
    <>
    <div className='w-48 h-48 border border-dark-4 rounded-[20px] flex flex-col justify-center items-center bg-dark-2'>
        <img src="/assets/icons/profile-placeholder.svg" alt="" className='w-[54px] h-[54px]' />
        <h2 className="mt-2.5 small-semibold">John Doe</h2>
        <p className="tiny-medium mt-0.5 text-light-3 mb-3">Followed by jsmastery</p>
        <Button className='shad-button_primary py-1.5 px-[18px]'>Follow</Button>
    </div>
    </>
  )
}

export default UserCard