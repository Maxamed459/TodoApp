import React from 'react'
import Tag from './Tag'
import deleteIcon from '../assets/delete.png'

const TaskCard = () => {
  return (
    <article className='border-1 border-[#dcdcdc] rounded-[10px] w-full min-h-[100px] p-[15px] my-[15px] mx-0'>
        <p className='text-[18px] font-[600] mb-[15px]'>This is sample text.</p>

        <div className='flex justify-between items-center'>
            <div className='space-x-2'>
                <Tag tag="HTML"/>
                <Tag tag="CSS"/>
            </div>
            <div className='w-[35px] h-[35px] rounded-full flex items-center justify-center hover:bg-[#ebebeb] transition duration-300 ease-in-out'>
                <img src={ deleteIcon } alt="" className='w-[25px] opacity-[50%] hover:opacity-[80%] transition duration-300 ease-in-out' />
            </div>
        </div>
    </article>
  )
}

export default TaskCard