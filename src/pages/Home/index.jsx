import React from 'react';
import './home.css';

import { Link } from 'react-router-dom';

//COMPONENTS
import Footer from './../../components/Footer/footer.jsx';

//IMGS
import chamHeader from '../../assets/imgs/chamHeader.png';
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
			</div>
			<div className='release'>
				<Link
					to='LaLa'
					className='lala2pics'
				>
					<div className='outNow'>OUT NOW</div>
					<img
						src={lalaLeft}
						alt='lalaLeftImg'
					/>
					<img
						src={lalaRight}
						alt='lalaRightImg'
					/>
					<div className='lala'>LA LA</div>
				</Link>
			</div>
			<Footer />
		</div>
	);
};

export default Home;
