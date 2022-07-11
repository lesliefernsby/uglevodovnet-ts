import React from 'react';
import { Link } from 'react-router-dom';

import logo from '../../logo.svg';

function Home() {
  return (
    <div className="App">
      <img src={logo} className="App-logo" alt="logo" />
      <p>
        Edit <code>src/App.tsx</code> and save to reload.
      </p>

      <Link to="/login">Login page</Link>
    </div>
  );
}

export default Home;
