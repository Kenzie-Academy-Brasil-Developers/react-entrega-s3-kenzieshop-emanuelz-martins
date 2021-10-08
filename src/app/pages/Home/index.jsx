import { useSelector } from 'react-redux';
import Header from '../../components/Header';
import ProductCard from '../../components/ProductCard';
import { Container, Products } from './style';

const Home = () => {
	const productsList = useSelector(({ products }) => products);

	return (
		<Container>
			<Header />
			<Products>
				{productsList.map((product) => (
					<ProductCard
						key={product.id}
						dispatchedItem={product}
						product={product}
					/>
				))}
			</Products>
		</Container>
	);
};

export default Home;
