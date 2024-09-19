import React, { useEffect, useState } from 'react'

function HookCounterOne() {

    const [count, setcount] = useState(0)

    const [name, setname] = useState("")

    useEffect(() => {
    document.title= `You Clicked ${count} times`  
    console.log("useeffect - Updating document title")
    
    },[count] )
    


  return (
    <>
    <input type='text' value={name} onChange={(e)=>setname(e.target.value)}/>
    <button onClick={()=> setcount(count+1)} > Click {count} times</button>
    
    </>
  )
}

export default HookCounterOne