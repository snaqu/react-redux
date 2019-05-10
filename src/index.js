import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';

import { createStore, combineReducers } from 'redux'; // redux
// Provider - za pomoca niego React może korzystać ze stora w Redux. Przekazuje props state.
import { Provider } from 'react-redux'; // react-redux

// Aby rozszerzenie w przeglądarce do reduxa działało, do stora dodaje funkcję.
import { composeWithDevTools } from 'redux-devtools-extension';
import resultReducer from './store/reducers/result';
import counterReducer from './store/reducers/counter';

const rootReducer = combineReducers({
	ctr: counterReducer,
	res: resultReducer
})

// Store, przechowuje stan całej aplikacji.
const store = createStore(rootReducer, composeWithDevTools());

// Przekazuje strore poprzez propsy do aplikacji
ReactDOM.render(<Provider store={store}><App /></Provider>, document.getElementById('root'));