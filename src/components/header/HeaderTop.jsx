import React, { useEffect, useState } from "react";
import { Link, animateScroll as scroll } from "react-scroll";
import "./headertop.css";

const HeaderTop = () => {
	const [scrolled, setScrolled] = useState(false);

	useEffect(() => {
		const handleScroll = () => {
			setScrolled(window.scrollY > 100);
		};

		window.addEventListener("scroll", handleScroll);

		return () => {
			window.removeEventListener("scroll", handleScroll);
		};
	}, []);

	return (
		<header
			className={
				scrolled
					? "header header-scrolled"
					: "header header-default"
			}
		>
			<div className="header__row">
				<div className="container">
					<nav className="header__nav">
						<ul className="header__nav-list">
							<li className="list__item">
								<Link
									activeClass="active"
									className="list__item-link"
									to="home"
									spy={true}
									smooth={true}
									offset={-70}
									duration={1500}
								>
									Главная
								</Link>
							</li>
							<li className="list__item">
								<Link
									activeClass="active"
									className="list__item-link"
									to="aboutus"
									spy={true}
									smooth={true}
									offset={-60}
									duration={1500}
								>
									О нас
								</Link>
							</li>
							<li className="list__item">
								<Link
									activeClass="active"
									className="list__item-link"
									to="gallery"
									spy={true}
									smooth={true}
									offset={-30}
									duration={1500}
								>
									Галерея
								</Link>
							</li>
							<li className="list__item">
								<Link
									activeClass="active"
									className="list__item-link"
									to="contacts"
									spy={true}
									smooth={true}
									offset={-70}
									duration={1500}
								>
									Контакты
								</Link>
							</li>
						</ul>
					</nav>
				</div>
			</div>
		</header>
	);
};

export default HeaderTop;
