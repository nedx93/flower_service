import React from "react";
import "./headertop.css";

const HeaderTop = () => {
	return (
		<header className="header">
			<div className="container">
				<div className="header__row">
					<a href="/" className="header__logo">
						<img src="/logo.png" alt="flowers" />
						<div className="header__title">
							FLOWER<span>service</span>
						</div>
					</a>
					<nav className="header__nav">
						<ul className="header__nav-list">
							<li className="list__item">
								<a href="#!" className="list__item-link">
									О нас
								</a>
							</li>
							<li className="list__item">
								<a href="#!" className="list__item-link">
									Галерея
								</a>
							</li>
							<li className="list__item">
								<a href="#!" className="list__item-link">
									Контакты
								</a>
							</li>
						</ul>
					</nav>
					<div className="header__button">
						<button className="header__button-btn">Заказать</button>
					</div>
				</div>
			</div>
		</header>
	);
};

export default HeaderTop;
