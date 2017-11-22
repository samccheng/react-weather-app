import React from 'react';
import ReactDOM from 'react-dom';
import { createStore, applyMiddleware } from 'redux'
import { Provider } from 'react-redux'
import ReduxPromise from 'redux-promise'
import './index.css';
import App from './App';
import rootReducer from './reducers/reducers'
import registerServiceWorker from './registerServiceWorker';

const store = createStore(rootReducer, applyMiddleware(ReduxPromise))

ReactDOM.render(<Provider store={store}><App /></Provider>, document.getElementById('root'));
registerServiceWorker();
