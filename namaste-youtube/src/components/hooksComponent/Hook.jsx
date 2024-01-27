import React from 'react'
import MemoHook from './MemoHook';
import RefHook from './RefHook';

const Hook = () => {
  return (
    <div className='flex flex-row'>
        <MemoHook />
        <RefHook />
    </div>
  )
}

export default Hook;