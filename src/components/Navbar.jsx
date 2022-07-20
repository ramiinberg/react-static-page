import './navbar.css'
import logo from '../images/react-icon-small.png'

function Navbar(props) {
  const { darkMode, toggleDarkMode } = props

  const handleKeyDown = e => {
    if (e.key === 'Enter') {
      console.log('switch')
    }
  }

  return (
    <nav className={darkMode ? 'dark' : ''}>
      <img className='nav-logo-icon' src={logo} alt='React js logo' />
      <h3 className='nav-logo-title'>ReactFacts</h3>
      <div className='toggler'>
        <p className='toggler-light'>Light</p>
        <div
          className='toggler-slider'
          onClick={toggleDarkMode}
          onKeyDown={handleKeyDown}
          aria-checked={darkMode}
          role='switch'
          tabIndex={0}
        >
          <div className='toggler-slider-circle' />
        </div>
        <p className='toggler-dark'>Dark</p>
      </div>
    </nav>
  )
}

export default Navbar
