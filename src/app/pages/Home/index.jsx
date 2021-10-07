import { useSelector } from 'react-redux';
import Header from '../../components/Header';
import ProductCard from '../../components/ProductCard';
import { Container, Products } from './style';

const Home = () => {
	const products = useSelector((store) => store.products);

	return (
		<Container>
			<Header />
			<Products>
				{products.map((product) => (
					<ProductCard
						key={product}
						dispatchedItem={product}
						product={product}
					/>
				))}
			</Products>
		</Container>
	);
};

export default Home;
