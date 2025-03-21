import React from 'react'

function Tag(props) {
  return (
    <button className='text-[14px] font-[500] bg-gray-100 border-1 border-gray-100 rounded-[5px] py-[2px] px-[10px] cursor-pointer'>{ props.tag }</button>
  )
}

export default Tag