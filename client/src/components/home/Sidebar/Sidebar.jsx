import React from 'react'
import SearchSection from './SearchSection'
import ConversationsBox from './ConversationsBox'
import Logout from './Logout'

const Sidebar = () => {
  return (
    <div className='border-r border-gray-500 p-4 flex flex-col'>
        <SearchSection/>
        <hr className="my-5 h-px border-t-0 bg-white bg-gradient-to-r from-transparent via-neutral-500 to-transparent opacity-25 dark:via-neutral-400" />
        <ConversationsBox/>
        <Logout/>
    </div>
  )
}

export default Sidebar