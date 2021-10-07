import { Button, Card, Photo } from './style';
import { addItemThunk } from './../../../store/modules/cart/thunks.js';
import { useDispatch } from 'react-redux';

const ProductCard = ({
	dispatchedItem,
	product: { name, brand, price, color, shoeUrl },
}) => {
	const dispatch = useDispatch();

	return (
		<Card>
			<picture>
				<Photo src={shoeUrl} alt={name} />
			</picture>
			<h3>{(brand, name)}</h3>
			<span>Cor: {color} </span>
			<span>Preço: R${price}</span>
			<Button onClick={() => dispatch(addItemThunk(dispatchedItem))}>
				Comprar
			</Button>
		</Card>
	);
};

export default ProductCard;
