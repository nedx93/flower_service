import React from "react";
import "./home.css";

const Home = () => {
	return (
		<div className="home">
			<div className="container">
				<div className="home__column">
					<div className="home__row">
						<div className="home__border"></div>
						<div className="home__title">
							Flower <span>service</span>
						</div>
						<div className="home__border"></div>
					</div>
					<div className="home__desc">
						Самые свежие и красивые цветы в Белгороде
					</div>
					<div className="home__down">
						<i className="ri-arrow-down-double-line"></i>
					</div>
				</div>
			</div>
		</div>
	);
};

export default Home;
