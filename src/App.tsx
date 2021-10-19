import { Route, BrowserRouter as Router } from 'react-router-dom';
import Home from './pages/Home';
import ModalPage from './pages/ModalPage';

function App() {
	return (
		<Router>
			<main>
				<Route exact path='/' component={Home} />
				<Route exact path='/modal' component={ModalPage} />
			</main>
		</Router>
	);
}

export default App;
