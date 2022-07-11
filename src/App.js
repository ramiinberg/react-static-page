import logo from './logo.svg';
import './App.css';

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

const MainContent = () => (
  <>
    <h1>Reasons I'm excited to learn React</h1>
    <ol className='bold-text'>
      <li>Was first released in 2013</li>
      <li>Was originally created by Jordan Walk</li>
      <li>Has well over 100K stars on Github</li>
      <li>Is maintained by Facebook</li>
      <li>Powers thousands of enterprise apps, including mobile apps</li>
    </ol> 
  </>
)

const Footer = () => (
  <footer>
    <p>© 20xx Shrimberg development. All rights reserved.</p>
  </footer>
  
)

function Page() {
  return (
  <>
    <Header />
    <MainContent />
    <Footer />
  </>
  )
}

function App() {
  return (
    <div className="App">
      <Page />
      {/* <img src={logo} className='img' alt='React.js logo' />
      <h1>Fun facts about react</h1>
      <ul className='bold-text'>
        <li>Was first released in 2013</li>
        <li>Was originally created by Jordan Walk</li>
        <li>Has well over 100K stars on Github</li>
        <li>Is maintained by Facebook</li>
        <li>Powers thousands of enterprise apps, including mobile apps</li>
      </ul> 
      */}
    </div>
  );
}

export default App;
