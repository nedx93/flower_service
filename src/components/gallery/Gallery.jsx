import React from "react";
import ImageSlider from "./ImageSlider";
import "./gallery.css";

const Gallary = () => {
	const images = [
		"/flowers1.jpg",
		"/flowers2.jpeg",
		"/flowers3.jpg",
		"/flowers4.jpg",
	];

	return (
		<div id="gallery" className="gallery">
			<div className="gallery__title">Gallery</div>
			<ImageSlider images={images} />
		</div>
	);
};

export default Gallary;
