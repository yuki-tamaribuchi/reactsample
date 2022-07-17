import { Link } from "react-router-dom";
import './Navbar.css';

function Navbar() {
	return (
		<header className="Navbar">
			<div id="logo">Sample React App</div>
			<div className="links">
				<Link to="/hello" className="link-item">Hello</Link>
				<Link to="/counts" className="link-item">Counts</Link>
				<Link to="/quotes" className="link-item">Quotes</Link>
			</div>
			
		</header>
	);
}

export default Navbar;