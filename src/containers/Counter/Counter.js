import React, { Component } from 'react';
// connect to HOC.
import { connect } from 'react-redux';
import * as actionCreators from '../../store/actions/actions';
import CounterControl from '../../components/CounterControl/CounterControl';
import CounterOutput from '../../components/CounterOutput/CounterOutput';

// import { increment } from '../../store/actions/actions';

class Counter extends Component {
	state = {
		counter: 0
	}

	render() {
		return (
			<div>
				<CounterOutput value={this.props.ctr} />
				<CounterControl label="Increment" clicked={this.props.onIncrementCounter} />
				<CounterControl label="Decrement" clicked={this.props.onDecrementCounter} />
				<CounterControl label="Add 5" clicked={this.props.onAddCounter} />
				<CounterControl label="Subtract 5" clicked={this.props.onSubstractCounter} />
				<hr />
				<button onClick={() => this.props.onStoreResult(this.props.ctr)}>Store result</button>
				<ul>
					{this.props.storedResult.map(strResult => (
						<li key={strResult.id} onClick={() => this.props.onDeleteResult(strResult.id)}>{strResult.value}</li>
					))}
				</ul>
			</div>
		);
	}
}

// mapStateToProps — jako argument przyjmuje cały stan i musi zwrócić propsy dla danego komponentu,
// stan z każdego z reducerów jest przekazywany w propsach.

const mapStateToProps = (state) => {
	return {
		ctr: state.ctr.counter, // nazwa jest wzięta z initialState w counter, skrót ctr jest z combineReducers
		storedResult: state.res.result // nazwa jest wzięta z initialState w result, skrót res jest z combineReducers
	}
}

// mapDispatchToProps — jako argument przyjmuje funkcję lub obiekt z action creatorami
// odwłouje się do Reducera.
const mapDispatchToProps = (dispatch) => {
	return {
		onIncrementCounter: () => dispatch(actionCreators.increment()),
		onDecrementCounter: () => dispatch(actionCreators.decrement()),
		// onAddCounter: () => dispatch({ type: actionTypes.ADD, val: 10 }), // może być payload:{} i wartości w nim
		onAddCounter: () => dispatch(actionCreators.add(10)), // może być payload:{} i wartości w nim
		onSubstractCounter: () => dispatch(actionCreators.subtract(15)),
		onStoreResult: (result) => dispatch(actionCreators.storeResult(result)),
		onDeleteResult: (id) => dispatch(actionCreators.deleteResult(id))
	}
}

export default connect(mapStateToProps, mapDispatchToProps)(Counter);