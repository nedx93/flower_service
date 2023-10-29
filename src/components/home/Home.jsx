import React from "react";
import { Link, animateScroll as scroll } from "react-scroll";
import "./home.css";

const Home = () => {
	return (
		<div id="home" className="home">
			<div className="container">
				<div className="home__column">
					<div className="home__title">Flower Service</div>
					<div className="home__button">
						<button className="home__button-btn" type="button">
							Заказать
						</button>
					</div>
					<div className="home__icon">
						<Link
							activeClass="active"
							to="aboutus"
							spy={true}
							smooth={true}
							offset={-60}
							duration={1500}
						>
							<svg
								className="home__icon-down"
								xmlns="http://www.w3.org/2000/svg"
								viewBox="0 0 24 24"
							>
								<path d="M12.0001 19.1643L18.2072 12.9572L16.793 11.543L12.0001 16.3359L7.20718 11.543L5.79297 12.9572L12.0001 19.1643ZM12.0001 13.5144L18.2072 7.30728L16.793 5.89307L12.0001 10.686L7.20718 5.89307L5.79297 7.30728L12.0001 13.5144Z"></path>
							</svg>
						</Link>
					</div>
				</div>
			</div>
		</div>
	);
};

export default Home;
