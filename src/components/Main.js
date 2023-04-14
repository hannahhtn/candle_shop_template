import "./Main.css";
import { Button } from "react-bootstrap";
import image1 from "../candle-1.jpg"
import image2 from "../candle-2.jpg";

const Main = () => {
	return (
		<div>
			<div className="Shop">
				<Button className="shop-btn" variant="outline-light">
					SHOP
				</Button>
			</div>
			<div className="section">
				<img src={image1} alt="candles"></img>
				<h1>Candles for your living space</h1>
			</div>

			<div className="section">
				<h1>Choose your favorite scents</h1>
				<img src={image2} alt="candles"></img>
			</div>
		</div>
	);
};

export default Main;
