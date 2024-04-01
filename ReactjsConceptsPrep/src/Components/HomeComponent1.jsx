import React from 'react'
import { tryContextHook } from '../Context/CheckContext'

const HomeComponent1 = () => {
    const {message1,message2}=tryContextHook();
  return (
    <div>
      This is Home Component 1 with context value <h3>{message1}</h3>
    </div>
  )
}

export default HomeComponent1
