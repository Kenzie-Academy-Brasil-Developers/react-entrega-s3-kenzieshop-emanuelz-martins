import { Route, Switch } from 'react-router';
import Cart from '../pages/Cart';
import Home from '../pages/Home';

const Routes = () => {
	return (
		<Switch>
			<Route exact path="/">
				<Home />
			</Route>
			<Route exact path="/cart">
				<Cart />
			</Route>
		</Switch>
	);
};

export default Routes;
