import 'core-js/es6/map';
import 'core-js/es6/set';

import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import { confugureStore } from './store';

const store = confugureStore();

ReactDOM.render(<App store={store} />, document.getElementById('root'));
