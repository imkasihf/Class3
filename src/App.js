import React from 'react';
import './App.css';
import Hello from './Hello';

function App(props) {
  return <div>
   <p>Hello <strong>{props.myname}</strong>!</p> 
   <h1>Application Descrpition</h1>
   <table><tr><td>Application:</td><td>React Native</td></tr>
   <tr><td>Platform</td><td>Windows</td></tr><br/>
   <tr><td>Release Dates:</td></tr></table>
   <ul><li>1.7 2020</li>
   <li>1.6 2019</li>
   <li>1.5 2018</li></ul>
   <h2>Total Number of Releases: {1+2}</h2>
   <Hello></Hello>
  </div>
}

export default App;
