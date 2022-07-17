import React, { useEffect } from 'react';
import { Link } from 'react-router-dom';
import { axiosPrivate } from '../../config';

import { authHeader } from '../../services/auth-header';

const Home: React.FC = () => {

  // just to test that resresh token requests are ok
  useEffect(() => {
    axiosPrivate.get('/profile', {headers: authHeader()}).then(console.log);
  }, []);

  return (
    <div className="App">
      <p>
        Edit <code>src/App.tsx</code> and save to reload.
      </p>

      <Link to="/login">Login page</Link>
    </div>
  );
}

export default Home;
