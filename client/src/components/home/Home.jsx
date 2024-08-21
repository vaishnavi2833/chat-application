import React from 'react'
import Sidebar from './Sidebar/Sidebar'
import MessagesComponent from './Message Component/MessagesComponent'

const Home = () => {
  return (
    <div className='flex h-[90vh] rounded-lg overflow-hidden bg-gray-400 bg-clip-padding backdrop-filter backdrop-blur-lg bg-opacity-0' style={{height:'90vh'}}>
      <Sidebar/>
      <MessagesComponent/>
    </div>
  )
}

export default Home