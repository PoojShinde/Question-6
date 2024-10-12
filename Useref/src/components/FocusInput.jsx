import React, { useEffect } from 'react'
import { useRef } from 'react'

function FocusInput() {

    
       const infocus = useRef(null)
    
    const infous = ()=>{
        infocus.current.focus()
    }
 
  return (
    <div>
      <input type="text" />
      <input type="text" ref={infocus} />
      <input type="text" />
      <input type='submit' onClick={infous} />
    </div>
  )
}

export default FocusInput
