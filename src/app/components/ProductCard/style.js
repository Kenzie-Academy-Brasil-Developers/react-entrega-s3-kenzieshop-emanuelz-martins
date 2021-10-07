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

		width: 85%;
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
	}
`;

export const Button = styled.button`
	background: var(--light-color);
	border: none;
	border-radius: 10px;
	margin-top: 2em;
	padding: 8px;

	:hover {
		cursor: pointer;
		transform: scale(1.1, 1.1);
		transition: all 0.5s;
		box-shadow: 0px 13px 27px -5px rgba(50, 50, 93, 0.25),
			0px 8px 16px -8px rgba(0, 0, 0, 0.3),
			0px -6px 16px -6px rgba(0, 0, 0, 0.025);
	}

	@media (min-width: 1024px) {
		display: inline-block;
		margin: 0;
		padding: 13px;
		border: 0;
		border-radius: 0.25rem;
		text-transform: uppercase;
		outline: 0;
		box-sizing: border-box;
		transition-property: all;
		transition-duration: 0.3s;
		text-decoration: none;
		vertical-align: middle;
		font-size: 1.125rem;
	}
`;
