import React, {useState} from 'react'
import Tag from './Tag'

const Header = () => {
    // const [first, setfirst] = useState(second)
  return (
    <header className='w-full h-[150px] flex items-center justify-center border-b-1 border-solid border-gray-300'>
        <form className='w-[60%] space-y-5'>
            <input 
            type="text" 
            placeholder='Enter your task' 
            className='w-full px-[12px] py-[8px] text-[16px] font-[500] rounded-[5px] border-1 border-solid border-gray-300 placeholder-gray-400' 
            /> 
            <div className='flex items-center justify-between'>
                <div className='space-x-5'>
                    <Tag tag="HTML"/>
                    <Tag tag="CSS"/>
                    <Tag tag="JavaScript"/>
                    <Tag tag="React"/>
                </div>
                <div className='space-x-5'>
                    <select className='px-[5px] py-0 text-[16px] font-[500] rounded-[5px] border-1 border-solid border-gray-300 w-[120px] h-[40px]'>
                        <option value="to do">To do</option>
                        <option value="doing">Doing</option>
                        <option value="done">Done</option>

                    </select>
                    <button className='bg-blue-600 text-white text-[16px] font-[500] px-[13px] h-[40px] py-[3px] rounded-[5px] cursor-pointer'>
                        + Add Task
                    </button>
                </div>
            </div>
        </form>
    </header>
  )
}

export default Header