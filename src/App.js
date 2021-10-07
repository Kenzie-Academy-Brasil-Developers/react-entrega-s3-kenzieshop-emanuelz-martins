import { Provider } from 'react-redux';
import Routes from './app/routes';
import store from './store';
import GlobalStyle from './app/styles/global';

function App() {
	return (
		<Provider store={store}>
			<div className="App">
				<GlobalStyle />
				<Routes />
			</div>
		</Provider>
	);
}

export default App;
