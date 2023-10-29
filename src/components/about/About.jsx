import React from "react";
import "./about.css";

const About = () => {
	return (
		<div id="aboutus" className="about">
			<div className="container">
				<div className="about__row">
					<div className="about__image">
						<img src="/about.jpg" alt="FlowerService" />
					</div>
					<div className="about__text">
						<div className="about__title">About Us</div>
						<div className="about__desc">
							Lorem, ipsum dolor sit amet consectetur adipisicing elit.
							Quae optio fuga aperiam modi, fugiat, illo voluptate nobis
							error blanditiis eveniet quidem aut obcaecati omnis atque.
							Fuga alias similique nisi aspernatur, non consectetur rerum
							impedit iusto qui autem quisquam cupiditate ea corrupti
							sunt nam maxime! Consequuntur odio doloremque autem
							voluptate soluta.
						</div>
					</div>
				</div>
			</div>
		</div>
	);
};

export default About;
