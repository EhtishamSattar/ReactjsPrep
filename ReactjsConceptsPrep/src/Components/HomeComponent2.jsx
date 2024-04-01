import React from 'react'
import { tryContextHook } from '../Context/CheckContext'

const HomeComponent2 = () => {
    const {message1,message2}=tryContextHook();
  return (
    <div>
        This is Home Component 2 with context value <h3>{message2}</h3>
    </div>
  )
}

export default HomeComponent2
