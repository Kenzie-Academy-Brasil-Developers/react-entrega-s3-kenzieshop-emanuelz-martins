import styled from 'styled-components';

export const Card = styled.div`
	box-sizing: border-box;
	box-shadow: 0px 2px 2px 0px rgba(0, 0, 0, 0.14),
		0px 3px 1px -2px rgba(0, 0, 0, 0.12), 0px 1px 5px 0px rgba(0, 0, 0, 0.2);
	width: 300px;
	height: 180px;
	padding: 15px;

	display: flex;
	flex-direction: column;
	justify-content: space-around;
	align-items: center;

	margin-bottom: 2em;

	@media (min-width: 1024px) {
		flex-direction: row;
		justify-content: space-around;

		width: 85vw;
	}
`;

export const Photo = styled.img`
	width: 50px;
	height: 50px;

	@media (min-width: 1024px) {
		:hover {
			transform: scale(1.3, 1.3);
			transition: all 0.5s;
		}

		width: 80px;
		height: 80px;
	}
`;

export const Button = styled.button`
	background: none;
	border: none;
	font-size: 20px;
	color: red;

	margin-top: 1.5em;

	:hover {
		cursor: pointer;
		transform: scale(1.1, 1.1);
		transition: 0.4s;
	}

	@media (min-width: 1024px) {
		margin-top: 0;
	}
`;
