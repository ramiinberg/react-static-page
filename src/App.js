import logo from './logo.svg';
import './App.css';

function Page() {
  return (
    <ul className='bold-text'>
    <li>Was first released in 2013</li>
    <li>Was originally created by Jordan Walk</li>
    <li>Has well over 100K stars on Github</li>
    <li>Is maintained by Facebook</li>
    <li>Powers thousands of enterprise apps, including mobile apps</li>
  </ul> 
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
