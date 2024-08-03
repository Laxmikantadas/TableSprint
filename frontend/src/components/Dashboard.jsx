import React from 'react'
import Navbar from './Navbar'
import Drawer from './Drawer'
import Welcompage from '../firstpage/Welcompage'

function Dashboard() {
  return (
    <div>
    <Navbar/>
    <Drawer/>
    <div className=' h-4/5'>
    <Welcompage />
    </div>
    {/* <Welcompage className=' h-4/5'/> */}
    </div>
  )
}

export default Dashboard