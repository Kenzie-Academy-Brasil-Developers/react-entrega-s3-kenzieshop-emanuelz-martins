import styled from 'styled-components';

export const HeaderContainer = styled.header`
	display: flex;
	justify-content: space-evenly;
	align-items: center;
	height: 60px;
	width: 100vw;

	background: var(--darkest-color);
	box-shadow: 0px 1px 3px 0px rgba(0, 0, 0, 0.1),
		0px 1px 2px 0px rgba(0, 0, 0, 0.06);

	ul {
		display: flex;
	}

	@media (min-width: 1024px) {
		justify-content: space-around;
	}
`;

export const Title = styled.h1`
	text-align: center;
	font-size: 25px;
	color: var(--ligth-color);
`;

export const NavBar = styled.nav`
	display: flex;
	align-items: center;
`;

export const Link = styled.button`
	background: none;
	border: none;
	font-size: 20px;
	color: var(--gray-color);

	:hover {
		cursor: pointer;
		transform: scale(1.1, 1.1);
		transition: 0.4s;
	}

	@media (min-width: 1024px) {
		:first-child {
			margin-right: 10px;
		}
	}
`;
