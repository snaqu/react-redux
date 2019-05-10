// Importuje wartości które są przypisane do zmiennych (brak pomyłek w większym kodzie)
// wtedy odrazu sypie błędami, że zmienna jest nie znaleziona (w przypadku strinów może tak nie być)

import * as actionTypes from '../actions/actions';

// Initial state
const initialState = {
	counter: 0
}

// Reducer to funkcja, która przyjmuje stan aplikacji oraz
// akcję i na tej podstawie generuje nowy, zaktualizowany stan.
const reducer = (state = initialState, action) => {
	switch (action.type) {
		case actionTypes.INCREMENT:
			return {
				...state, // Aby reszta stanu się zachowała
				counter: state.counter + 1	// Modyfikuje tylko i wyłącznie counter
			}
		case actionTypes.DECREMENT:
			return {
				...state,
				counter: state.counter - 1
			}
		case actionTypes.ADD:
			return {
				...state,
				counter: state.counter + action.val
			}
		case actionTypes.SUBTRACT:
			return {
				...state,
				counter: state.counter - action.val
			}
	}
	return state;
}

export default reducer;