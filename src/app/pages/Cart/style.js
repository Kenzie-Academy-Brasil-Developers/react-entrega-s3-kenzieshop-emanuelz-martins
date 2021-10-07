import styled from 'styled-components';

export const CartContainer = styled.div`
	display: flex;
	flex-direction: column;
	justify-content: space-around;
	align-items: center;
`;

export const MessageContainer = styled.div`
	display: flex;
	justify-content: space-evenly;

	width: 100%;
	margin: 1em 0;
`;

export const ShoeList = styled.div`
	margin: 2em 0;

	@media (min-width: 768px) {
		display: flex;
		flex-wrap: wrap;
		justify-content: space-around;
	}
`;

export const EmptyCartMSG = styled.h2`
	text-align: center;
`;
