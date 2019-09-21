import React from 'react';
import ReactDOM from 'react-dom';
import './assets/theme/css/styles.css';
import * as serviceWorker from './serviceWorker';
import HomeContainer from './views/containers/HomeContainer';

ReactDOM.render(<HomeContainer />, document.getElementById(`root`));

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
