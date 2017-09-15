import React, { Component } from 'react';
import MyAppRouter from './router';
import { Provider } from 'react-redux';
import configureStore from './redux/configureStore';


const store = configureStore();
console.log('AppState:');
console.log(store.getState().appData);

export default class Root extends Component {
	render() {
		return (
			<Provider store={store}>
				<MyAppRouter/>
			</Provider>
		);
	}
}