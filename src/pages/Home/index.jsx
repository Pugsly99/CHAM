import React from 'react';
import './home.css';

import { Link } from 'react-router-dom';

//IMGS
import chamHeader from '../../assets/imgs/chamHeader.png';
import lalaLeft from '../../assets/imgs/lalaLeft.jpg';
import lalaRight from '../../assets/imgs/lalaRight.jpg';

//ICONS
import { FaInstagram } from 'react-icons/fa';
import { AiOutlineYoutube } from 'react-icons/ai';

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
				<div className='bold'>OUT NOW</div>
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
				<div className='bold'>LA LA</div>
			</div>
		</div>
	);
};

export default Home;
