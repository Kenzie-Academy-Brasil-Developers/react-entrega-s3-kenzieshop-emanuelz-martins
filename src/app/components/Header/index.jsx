import { useHistory } from 'react-router';
import { HeaderContainer, Link, NavBar, Title } from './style';

import { AiFillHome } from 'react-icons/ai';
import { FaShoppingCart } from 'react-icons/fa';

const Header = () => {
	const history = useHistory();

	return (
		<HeaderContainer>
			<Title>KenzieShoes</Title>
			<NavBar>
				<ul>
					<li>
						<Link onClick={() => history.push('/')}>
							<AiFillHome />
						</Link>
					</li>
					<li>
						<Link onClick={() => history.push('/cart')}>
							<FaShoppingCart />
						</Link>
					</li>
				</ul>
			</NavBar>
		</HeaderContainer>
	);
};

export default Header;
