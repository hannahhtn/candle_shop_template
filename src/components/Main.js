import "./Main.css";
import { Button } from "react-bootstrap";

const Main = () => {
	return (
		<div>
			<div className="Shop">
				<Button className="shop-btn" variant="outline-light">
					SHOP
				</Button>
			</div>
			<div className="section">
				<img src="../../public/candle-1.jpg" alt="candles"></img>
				<h1>Candles for your living space</h1>
			</div>

			<div className="section">
				<h1>Choose your favorite scents</h1>
				<img src="../../public/candle-2.jpg" alt="candles"></img>
			</div>
		</div>
	);
};

export default Main;
