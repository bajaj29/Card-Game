import React from 'react'
import './App.css'
import '../node_modules/bootstrap/dist/css/bootstrap.min.css';
import { Provider } from 'react-redux';
import Store from './component/redux/Store';
import MainPage from './component/main-page/MainPage';

function App() {
	return (
		<React.Fragment>
			<Provider store={Store}>
				<MainPage/>
			</Provider>
		</React.Fragment >
	)
}

export default App