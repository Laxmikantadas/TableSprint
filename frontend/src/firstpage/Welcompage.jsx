import React from 'react'
import logo from "../assets/i3.jpg"

function Welcompage() {
  return (
    <div className='h-4/5 '>
    <div className="flex flex-col items-center justify-center min-h-screen  bg-background">
    <img undefinedhidden="true" alt="TableSprint logo" src={logo} className="mb-4"  style={{height:"14%" ,width:"14%"}}/>
    
    <p className="mt-2 text-lg text-muted-foreground">Welcome to TableSprint admin</p>
  </div>

</div>
   
  )
}

export default Welcompage