import { useState } from 'react'
import './App.css'
import Home from './Pages/Home'
import CustomHook from './Pages/CustomHook'

function App() {

  return (
    <>
        <h2>useContext Hook</h2>
        <Home/>
        <h2>useFetch Custom Hook</h2>
        <CustomHook/>
    </>
  )
}

export default App
