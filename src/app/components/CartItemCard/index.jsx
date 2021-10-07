import { FaTrashAlt } from 'react-icons/fa';
import { useDispatch } from 'react-redux';
import { removeItemThunk } from '../../../store/modules/cart/thunks';
import { Button, Card, Photo } from './style';

const CartItemCard = ({
	dipatchedItem,
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
			<Button onClick={() => dispatch(removeItemThunk(dipatchedItem))}>
				<FaTrashAlt />
			</Button>
		</Card>
	);
};

export default CartItemCard;
