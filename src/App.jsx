import React from 'react'
import Main from './components/Main'
import Navbar from './components/Navbar'
import './app.css'

function App() {
  const [darkMode, setDarkMode] = React.useState(false)

  const toggleDarkMode = () => {
    setDarkMode(dark => !dark)
  }

  return (
    <div className='container'>
      <Navbar darkMode={darkMode} toggleDarkMode={toggleDarkMode} />
      <Main darkMode={darkMode} />
    </div>
  )
}

export default App
