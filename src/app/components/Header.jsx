import BottomThreeBars from '@/app/ui/svg/BottomThreeBars'
import React from 'react'
import PencilSquare from '../ui/svg/PencilSquare'
import ChatGPTLogo from '../ui/svg/ChatGPTLogo'

function Header() {
  return (
    <>
    <div className='w-full px-3 flex md:hidden justify-between items-center h-10 border-b-2 border-mainColor border-solid'>
        <BottomThreeBars/>
        <div> <span className='font-bold'>ChatGPT</span> <span className='text-mainColor'>3.5</span></div>
        <PencilSquare/>
    </div>

    <div className='hidden h-10 w-full gap-4  md:flex justify-start items-center my-2 px-4'>
      <div className='md:hidden border h-10 w-10 scale-[0.8] border-solid border-mainColor rounded-lg center-element cursor-pointer'>
        <PencilSquare/>
      </div>
      <div> <span className='font-bold'>ChatGPT</span> <span className='text-mainColor'>3.5</span></div>

    </div>
    </>
  )
}

export default Header