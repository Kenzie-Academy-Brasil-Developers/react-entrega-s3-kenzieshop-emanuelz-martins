import { Button, Card, Photo } from './style';
import { addItemThunk } from './../../../store/modules/cart/thunks.js';
import { useDispatch } from 'react-redux';
import { Snackbar } from '@material-ui/core';
import { forwardRef, useState } from 'react';
import MuiAlert from '@material-ui/lab/Alert';

const ProductCard = ({
	dispatchedItem,
	product: { name, brand, price, color, shoeUrl },
}) => {
	const [isOpen, setIsOpen] = useState(false);
	const dispatch = useDispatch();

	const AlertSpan = (props, ref) => (
		<MuiAlert elevation={6} ref={ref} variant="filled" {...props} />
	);

	const Alert = forwardRef(AlertSpan);

	const handleToClose = (event, reason) => {
		if ('clickaway' === reason) return;

		setIsOpen(false);
	};

	const handleClickEvent = () => {
		setIsOpen(true);
		return dispatch(addItemThunk(dispatchedItem));
	};

	return (
		<Card>
			<picture>
				<Photo src={shoeUrl} alt={name} />
			</picture>
			<h3>{(brand, name)}</h3>
			<span>Cor: {color} </span>
			<span>Preço: R${price}</span>
			<Button onClick={handleClickEvent}>Comprar</Button>
			<Snackbar
				open={isOpen}
				autoHideDuration={800}
				onClose={handleToClose}
			>
				<Alert
					onClose={handleToClose}
					severity="success"
					sx={{ width: '100%' }}
				>
					Adicionado ao carrinho!!
				</Alert>
			</Snackbar>
		</Card>
	);
};

export default ProductCard;
