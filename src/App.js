import React from 'react';
import './App.css';
import {HashRouter, Link} from 'react-router-dom'
import routes from './routes'

function App(){
  
    return (
      <HashRouter>
        <div>
          <nav className='nav'>
            <div className='nav-contents'>
              <div>SHELFIE</div>
              <div className='link-wrap'>
                <Link to='/'>
                  <button className='links'>Dashboard</button>  
                  </Link>
                <Link to='/add'>
                  <button className='links'>Add Inventory</button> 
                </Link>
              </div>
            </div>
          </nav>
          {routes}
        </div>
      </HashRouter>
    );
  }


export default App;
