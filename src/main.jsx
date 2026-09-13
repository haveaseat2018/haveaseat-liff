import React from 'react'
import { createRoot } from 'react-dom/client'
import './styles.css'

function App() {
  return (
    <iframe
      className="demo-frame"
      src="/demo.html"
      title="食習會員 LIFF Demo"
      allow="clipboard-read; clipboard-write"
    />
  )
}

createRoot(document.getElementById('root')).render(
  <React.StrictMode><App /></React.StrictMode>
)
