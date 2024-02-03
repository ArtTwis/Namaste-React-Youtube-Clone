import React from 'react'
import MemoHook from './MemoHook';
import RefHook from './RefHook';
import CallbackHook from './CallbackHook';

const Hook = () => {
  return (
    <div className='flex flex-row'>
        <MemoHook />
        <RefHook />
        <CallbackHook />
    </div>
  )
}

export default Hook;