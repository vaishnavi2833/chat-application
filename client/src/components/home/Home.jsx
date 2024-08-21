import React from 'react'
import Sidebar from './Sidebar/Sidebar'
import MessagesComponent from './Message Component/MessagesComponent'

const Home = () => {
  return (
    <div className='flex sm:h-[450px] md:h-[550px] rounded-lg overflow-hidden bg-gray-400 bg-clip-padding backdrop-filter backdrop-blur-lg bg-opacity-0'>
      <Sidebar/>
      <MessagesComponent/>
    </div>
  )
}

export default Home