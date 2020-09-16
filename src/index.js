import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';

function App(){
  return <div>
    Ola Mundo!
  </div>
}

ReactDOM.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
  document.getElementById('root')
);


