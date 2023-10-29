import React from "react";
import Slider from "react-slick";
import "./imageslider.css";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

const ImageSlider = ({ images }) => {
	const settings = {
		dots: false,
		infinite: true,
		speed: 1000,
		cssEase: "ease-in-out",
		slidesToShow: 3,
		slidesToScroll: 1,
		arrows: false,
		autoplay: true,
		autoplaySpeed: 3000
	};

	return (
		<div className="image-slider">
			<Slider {...settings}>
				{images.map((image, index) => (
					<div key={index}>
						<img src={image} alt={`Slide ${index}`} />
					</div>
				))}
			</Slider>
		</div>
	);
};

export default ImageSlider;
