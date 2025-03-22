import React from 'react'
import TaskCard from './TaskCard'
// import Todo from '../assets/direct-hit.png'

const TaskColumn = ({icon, title}) => {
  return (
    <section className='w-[33.33%] m-[20px]'>
        
        <h1 className='flex items-center font-medium text-[20px]'>
        <img src={icon} alt="icon" className='w-[28px]' /> {title}
        </h1>

        <TaskCard />
    </section>
  )
}

export default TaskColumn