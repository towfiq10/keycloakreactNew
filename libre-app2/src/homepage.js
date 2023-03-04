//import React from 'react';
import './login.js';


import React from 'react';
import './login.js';
import { Link } from 'react-router-dom';

function homepage() {
  return (
    <div className="page">
      <h1>Login with React</h1>
      <Link to="/privatein">
        <button type="button">
          Visit Restricted Page
        </button>
      </Link>
    </div>
  );
}

export default homepage;
