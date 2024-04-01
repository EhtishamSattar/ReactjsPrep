import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import './index.css'
import { UseContextHookProvider } from './Context/CheckContext.jsx'

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <UseContextHookProvider>
      <App />
    </UseContextHookProvider>
  </React.StrictMode>
)
