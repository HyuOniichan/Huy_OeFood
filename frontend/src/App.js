import { createContext, useState, useEffect } from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';

import Navbar from './components/Navbar';
import Home from './pages/Home';
import Food from './pages/Food';
import Cart from './pages/Cart';

export const MenuContext = createContext()
export const OrderContext = createContext()

function App() {

	const [menu, setMenu] = useState()
	const [order, setOrder] = useState()

	useEffect(() => {
		fetch(`http://localhost:4004/food`)
			.then(res => res.json())
			.then(data => setMenu(data))
			.catch(err => console.log(err))
	}, [])

	return (
		<MenuContext.Provider value={[menu, setMenu]}>
			<OrderContext.Provider value={[order, setOrder]}>
				<BrowserRouter>
					<Navbar />
					<div className='position-relative h-100'>
						<Routes>
							<Route path='/' element={<Home />} />
							<Route path='/food' element={<Food />} />
							<Route path='/cart' element={<Cart />} />
						</Routes>
					</div>
				</BrowserRouter>
			</OrderContext.Provider>
		</MenuContext.Provider>
	);
}

export default App;
