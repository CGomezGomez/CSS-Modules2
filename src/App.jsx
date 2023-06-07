import Card from "./components/Card/Card";
import Header from "./components/Header/Header";
import { CARD } from './constants/card';

const App = () => {
	return (
		<>
			<Header
				title='Reliable, efficient delivery'
				title2='Powered by Technology'
				text='Our Artificial Intelligence powered tools use millions of project data points to ensure that your project is successful'
			/>

			<div className="container">
			{
			CARD.map(card=>(
				<Card
				key={card.id}
				src={card.src}
				alt={card.alt}
				color={card.color}
				name={card.name}
				description ={card.description }
				/>
			))}
			</div>

		</>
	)
};

export default App;
