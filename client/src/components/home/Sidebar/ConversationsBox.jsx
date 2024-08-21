import React from 'react'
import Conversation from './Conversation'

const ConversationsBox = () => {
  return (
    <div className='py-2 flex flex-col overflow-auto'>
        <Conversation/>
        <Conversation/>
        <Conversation/>
        <Conversation/>
    </div>
  )
}

export default ConversationsBox