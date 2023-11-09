import React from 'react'

import Sidebar from './Sidebar'
import Main from './Main'

import './SidebarAndMain.css'

const SidebarAndMain = () => {
  return (
    <div className='sidebar-and-main'>
        <Sidebar />
        <Main />
    </div>
  )
}

export default SidebarAndMain