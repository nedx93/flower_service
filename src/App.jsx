import Gallary from "./components/gallery/Gallery";
import About from "./components/about/About";
import HeaderTop from "./components/header/HeaderTop";
import Home from "./components/home/Home";
import Contacts from "./components/contacts/Contacts";

function App() {
	return (
		<div className="wrapper">
			<HeaderTop />
			<main className="main">
				<Home/>
				<About/>
				<Gallary/>
				<Contacts/>
			</main>
		</div>
	);
}

export default App;
