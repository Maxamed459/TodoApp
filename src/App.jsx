import React from 'react'
import Header from './components/Header'
import TaskColumn from './components/TaskColumn'
import todoIcon from './assets/direct-hit.png'
import doingIcon from './assets/glowing-star.png'
import doneIcon from './assets/check-mark-button.png'


const App = () => {
  return (
    <div className='grid grid-row-2'>
     <Header />
    <main className='flex items-center justify-evenly py-[20px] px-[8%]'>
      <TaskColumn title="To do" icon={todoIcon}/>
      <TaskColumn title="Doing" icon={doingIcon} />
      <TaskColumn title="Done" icon={doneIcon} />
    </main>
    </div>
  )
}

export default App