import logo from './logo.svg';
import './App.css';
import './login.js';
import './homepage.js';
import './privatein.js';
import { BrowserRouter, Routes } from 'react-router-dom';
import privatein from './privatein.js';
import homepage from './homepage.js';

function App() {
  return (
    <div className="App">
      
      <header className="App-header">      
        <p> Edit <code>src/App.js</code> and save to reload. </p>        
          Learn React        
      </header>
      
      <p> Welcome to Libre Food Pantry non profit organization    </p>
      <p>  
        <button>            
          <a
            className="App-link"
            href="http://localhost:3000"
            target="_blank"
            rel="noopener noreferrer"
          >
            My Realm Login 
          </a>      
        </button>
      </p>

      <BrowserRouter>             
             <Routes path='/' exact={true} component={homepage}/>
             <Routes path='/private' exact={true} component={privatein}/>
      </BrowserRouter>
    </div>
  );
}

export default App;

/*
 <header className="App-header">      
        <img src={logo} className="App-logo" alt="logo" />
        <p> Edit <code>src/App.js</code> and save to reload. </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
      </header>
*/