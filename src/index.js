import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import Test from './App';
import registerServiceWorker from './registerServiceWorker';

ReactDOM.render(<App />, document.getElementById('root'));
// ReactDOM.render(Test, document.getElementById('messages'));
registerServiceWorker();



// function tick() {
//   const element = (
//     <div>
//       <h1>Hello, world!</h1>
//       <h2>It is {new Date().toLocaleTimeString()}.</h2>
//     </div>
//   );
//   ReactDOM.render(element, document.getElementById('messages2'));
// }
// setInterval(tick, 1000);