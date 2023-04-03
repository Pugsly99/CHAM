import React from 'react';
import './home.css';

import { Link } from 'react-router-dom';

//IMGS
import chamHeader from '../../assets/imgs/chamHeader.jpg';
import lalaLeft from '../../assets/imgs/lalaLeft.jpg';
import lalaRight from '../../assets/imgs/lalaRight.jpg';

const Home = () => {
	return (
		<div className='Home'>
			<div className='Header'>
				<img
					src={chamHeader}
					alt='chamHeader'
					className='homeHeaderImg'
				/>
				<h1 className='cham'>CHAM</h1>
			</div>
			<h3>OUT NOW</h3>
			<Link
				to='LaLa'
				className='lala2pics'
			>
				<img
					src={lalaLeft}
					alt='lalaLeftImg'
				/>
				<img
					src={lalaRight}
					alt='lalaRightImg'
				/>
			</Link>
			<h3>LA LA</h3>
		</div>
	);
};

export default Home;
