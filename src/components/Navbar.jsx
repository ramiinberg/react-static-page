import './navbar.css'
import logo from '../images/react-icon-small.png'

function Navbar(props) {
  const { darkMode } = props
  return (
    <nav className={darkMode ? 'dark' : ''}>
      <div className='nav-logo'>
        <img className='react-logo' src={logo} alt='React js logo' />
        <div className='react-title'>ReactFacts</div>
      </div>
      <div className='nav-links'>React Course - Project 1</div>
    </nav>
  )
}

export default Navbar
