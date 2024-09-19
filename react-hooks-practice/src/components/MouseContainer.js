import React, { useState } from 'react'
import HookMouse from './HookMouse'

function MouseContainer() {
const [display, setdisplay] = useState(true)



  return (
    <>
    <button onClick={()=>setdisplay(!display)} >Toggle display</button>
    {
        display && <HookMouse/>
    }


    
    </>
  )
}

export default MouseContainer