import React from 'react'
import { BsSend } from "react-icons/bs";


const MessageInputBox = () => {
  return (
    <div>
        <form className='px-4 my-3'>
            <div className='w-full flex gap-2'>
                <input type='text' className='border text-sm rounded-lg block w-full p-2.5 bg-gray-700 border-gray-600 text-white' placeholder='Send a message'/>
                <div className='bg-purple-400 flex items-center justify-center p-2 rounded-lg'>
                    <button type='submit' className=' end-0 flex items-center pe-3 text-white'>
                        <BsSend/>
                    </button>
                </div>
            </div>
        </form>
    </div>
  )
}

export default MessageInputBox