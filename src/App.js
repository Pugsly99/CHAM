import './App.css';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';

//ROUTES
import Home from './pages/Home/index.jsx';
import LaLaLinks from './pages/LaLaLinks/index.jsx';

function App() {
	return (
		<div className='App'>
			<Router>
				<Routes>
					<Route
						path='/'
						element={<Home />}
					/>
					<Route
						path='/LaLa'
						element={<LaLaLinks />}
					/>
				</Routes>
			</Router>
		</div>
	);
}

export default App;
