import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import Sidenav from './Sidenav';
import Header from './Header';
import * as serviceWorker from './serviceWorker';

ReactDOM.render(<Header title="Anton!"/>, document.getElementById('app'));
ReactDOM.render(<Sidenav />, document.getElementById('sidenav'));

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
