import React, { useState } from 'react';
import logo from './logo.svg';

import axios from 'axios';
import RegisterContainer from './containers/RegisterContainer';


import './App.css';

function App() {
  return (
    <div className="App">
      <div className="black-nav">
      </div>
      <RegisterContainer/>
    </div>
  );
}

export default App;
