import styled from 'styled-components';

export const Container = styled.div``;

export const Products = styled.div`
	display: flex;
	flex-direction: column;
	align-items: center;

	margin-top: 3em;

	@media (min-width: 768px) {
		flex-direction: row;
		flex-wrap: wrap;
		justify-content: space-around;
	}

	@media (min-width: 1024px) {
		flex-direction: column;
		flex-wrap: nowrap;
		align-items: center;
		margin: 2em 3em;
	}
`;
