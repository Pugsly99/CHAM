import React from 'react';
import './home.css';

//IMGS
import chamHeader from '../../assets/imgs/chamHeader.jpg';
import lalaLeft from '../../assets/imgs/lalaLeft.jpg';
import lalaRight from '../../assets/imgs/lalaRight.jpg';

const Home = () => {
	return (
		<div className='Home'>
			<img
				src={chamHeader}
				alt='chamHeader'
				className='homeHeader'
			/>
			<h1 className='cham'>CHAM</h1>
			<h3>OUT NOW</h3>
			<a className='lala2pics'>
				<img
					src={lalaLeft}
					alt='lalaLeftImg'
				/>
				<img
					src={lalaRight}
					alt='lalaRightImg'
				/>
			</a>
			<h3>LA LA</h3>
		</div>
	);
};

export default Home;
