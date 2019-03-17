import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import registerServiceWorker from './registerServiceWorker';

import { createStore, combineReducers } from 'redux';
// Provider - za pomoca niego React może korzystać ze stora w Redux. Przekazuje props state.
import { Provider } from 'react-redux';
import resultReducer from './store/reducers/result';
import counterReducer from './store/reducers/counter';

// Store, przechowuje stan całej aplikacji.
const store = createStore(reducer);

ReactDOM.render(<Provider store={store}><App /></Provider>, document.getElementById('root'));
registerServiceWorker();
