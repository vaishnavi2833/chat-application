import React from 'react'

const Conversation = () => {
  return (
    <div className='flex gap-2 items-center hover:bg-purple-500 rounded p-2 cursor-pointer'>
        <div className="flex items-center gap-4">
            <div className="relative">
                <img className="w-10 h-10 rounded-full" src="data:image/png;base64,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" alt=""/>
                <span className="top-0 left-7 absolute  w-3.5 h-3.5 bg-green-400 border-2 border-white dark:border-gray-800 rounded-full"></span>
            </div>
            <div className="font-medium dark:text-white">
                <div className='text-white'>Jese Leos</div>
            </div>
        </div>
    </div>
  )
}

export default Conversation