const redux = require('redux');
const createStore = redux.createStore;

const initialState = {
	counter: 0
}

// Reducer to funkcja, która przyjmuje stan aplikacji oraz akcję i na tej podstawie generuje nowy, zaktualizowany stan.
const rootReducer = (state = initialState, action) => {
	if (action.type === 'INC_COUNTER') {
		return {
			...state,
			counter: state.counter + 1
		}
	}
	if (action.type === 'ADD_COUNTER') {
		return {
			...state,
			counter: state.counter + action.value
		}
	}
}

// Store, przechowuje stan całej aplikacji.
const store = createStore(rootReducer);

// Subscription
store.subscribe(() => {
	console.log(`[subscrition] ${store.getState()}`);
})

// Dispatching action
store.dispatch({ type: 'INC_COUNTER' });
store.dispatch({ type: 'ADD_COUNTER', value: 10 });
