import HeaderTop from "./components/header/HeaderTop";
import Home from "./components/home/Home";

function App() {
	return (
		<div className="wrapper">
			<HeaderTop />
			<main className="main">
				<Home/>
			</main>
		</div>
	);
}

export default App;
