import logo from './logo.svg'

const Header = () => (
  <header>
    <nav className='nav-header'>
      <img src={logo} alt='React JS logo' className='nav-logo' />
      <ul className='nav-links'>
        <li className='list-item'>Pricing</li>
        <li className='list-item'>About</li>
        <li className='list-item'>Contact</li>
      </ul>
    </nav>
  </header>
  )

export default Header