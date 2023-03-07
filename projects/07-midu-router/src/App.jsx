import { useEffect, useState } from 'react'
import { EVENTS } from './constants'
import HomePage from './pages/Home.jsx'
import AboutPage from './pages/About.jsx'
import './App.css'

function App() {
  const [path, setPath] = useState(window.location.pathname)

  useEffect(() => {
    const onLocationChange = () => {
      console.log('path:', window.location.pathname)
      setPath(window.location.pathname)
    }
    window.addEventListener(EVENTS.PUSHSTATE, onLocationChange)
    window.addEventListener(EVENTS.POPSTATE, onLocationChange)

    return () => {
      window.removeEventListener(EVENTS.PUSHSTATE, onLocationChange)
      window.removeEventListener(EVENTS.POPSTATE, onLocationChange)
    }
  }, [])

  return (
    <main>
      {path === '/' && <HomePage />}
      {path === '/about' && <AboutPage />}
    </main>
  )
}

export default App
