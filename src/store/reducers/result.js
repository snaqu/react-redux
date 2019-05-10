// Importuje wartości które są przypisane do zmiennych (brak pomyłek w większym kodzie)
// wtedy odrazu sypie błędami, że zmienna jest nie znaleziona (w przypadku strinów może tak nie być)

import * as actionTypes from '../actions/actions';

// Initial state
const initialState = {
	result: []
}

// Reducer to funkcja, która przyjmuje stan aplikacji
// oraz akcję i na tej podstawie generuje nowy, zaktualizowany stan.
const reducer = (state = initialState, action) => {
	switch (action.type) {
		case actionTypes.STORE_RESULT:
			return {
				...state,
				// dodawanie do tablicy w niemutowalny sposób, gdy jest push to zmienia obecny stan.
				result: state.result.concat({ id: new Date(), value: action.result })
			}
		case actionTypes.DELETE_RESULT:
			// filter zwraca nową tablice nie naruszając stanu.
			const updateArray = state.result.filter(result => result.id !== action.ResultElId)
			return {
				...state,
				result: updateArray
			}
	}
	return state;
}

export default reducer;