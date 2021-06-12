import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';

ReactDOM.render(
  <React.StrictMode>
    {/* React app should only render only one component ("App") */}
    <App />
  </React.StrictMode>,
  document.getElementById('root')
);
