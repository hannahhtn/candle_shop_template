import Container from "react-bootstrap/Container";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import "./Nav.css";

const NavBar = () => {
	return (
		<Navbar collapseOnSelect expand="md">
			<Container fluid className="navbar-custom">
				<Navbar.Brand href="#home" className="navbar-brand">
					Candle Shop
				</Navbar.Brand>
				<Navbar.Toggle
					aria-controls="basic-navbar-nav"
					className="navbar-dark"
				/>
				<Navbar.Collapse id="basic-navbar-nav">
					<Nav className="ms-auto navbar-dark">
						<Nav.Link href="#home">Home</Nav.Link>
						<Nav.Link href="#shop">Shop</Nav.Link>
						<Nav.Link href="#cart">Cart</Nav.Link>
						<Nav.Link href="#link">About</Nav.Link>
					</Nav>
				</Navbar.Collapse>
			</Container>
		</Navbar>
	);
};

export default NavBar;
