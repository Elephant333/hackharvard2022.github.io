import React from 'react';
import Navigator from './Navigator';

function Schedule() {
  return (
    <div className="App">
      <Navigator />
      <header className="App-header">
        <img
          className="App-logo"
          alt="logo"
        />
        <p>
          Edit
          {' '}
          <code>src/App.js</code>
          {' '}
          and save to reload.
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
      </header>
    </div>
  );
}

export default Schedule;
