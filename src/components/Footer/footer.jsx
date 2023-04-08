import React from 'react';
import './footer.css';

//ICONS
import { FaInstagram } from 'react-icons/fa';
import { BsTiktok } from 'react-icons/bs';
import { FiTwitter } from 'react-icons/fi';
import { AiOutlineYoutube, AiOutlineFacebook } from 'react-icons/ai';

const footer = () => {
	return (
		<div className='footer'>
			<AiOutlineFacebook
				size={21}
				className='facebook'
			/>
			<AiOutlineYoutube
				size={24}
				className='youtube'
			/>
			<FaInstagram
				size={20}
				className='instagram'
			/>
			<FiTwitter
				size={18}
				className='twitter'
			/>
			<BsTiktok
				size={20}
				className='tiktok'
			/>
		</div>
	);
};

export default footer;
