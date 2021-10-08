import { useSelector } from 'react-redux';
import CartItemCard from '../../components/CartItemCard';
import Header from '../../components/Header';
import {
	CartContainer,
	EmptyCartMSG,
	MessageContainer,
	ShoeList,
} from './style';

const Cart = () => {
	const { cart } = useSelector((store) => store);

	return (
		<CartContainer>
			<Header />
			<MessageContainer>
				<span>Itens: {cart.length}</span>
				<span>
					Total: R${' '}
					{cart
						.reduce(
							(accumulator, { price }) => accumulator + price,
							0
						)
						.toFixed(2)}
				</span>
			</MessageContainer>
			<ShoeList>
				{cart !== null && cart.length !== 0 ? (
					cart.map((product) => (
						<CartItemCard
							key={Math.ceil(Math.random() * product.id) + 1}
							dipatchedItem={product}
							product={product}
						/>
					))
				) : (
					<EmptyCartMSG>Sem itens no Carrinho {':('}</EmptyCartMSG>
				)}
			</ShoeList>
		</CartContainer>
	);
};

export default Cart;
