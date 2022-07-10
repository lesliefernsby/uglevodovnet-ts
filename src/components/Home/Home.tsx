import React from 'react'
import { Link } from 'react-router-dom';
import { useAppSelector } from '../../redux/hooks';

import logo from '../../logo.svg';

function Home() {
  const auth = useAppSelector(state => state.auth);
  console.log(auth);
  return (
    <div className="App">
      <img src={logo} className="App-logo" alt="logo" />
      <p>
        Edit <code>src/App.tsx</code> and save to reload.
      </p>

      <Link to="/login">Login page</Link>
  
    </div>
  )
}

export default Home
