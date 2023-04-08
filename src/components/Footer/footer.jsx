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
			<a
				href='https://www.facebook.com'
				target='_blank'
			>
				<AiOutlineFacebook
					size={21}
					className='facebook'
				/>
			</a>
			<a
				href='https://www.youtube.com'
				target='_blank'
			>
				<AiOutlineYoutube
					size={24}
					className='youtube'
				/>
			</a>
			<a
				href='https://www.instagram.com/chan_and_ler/'
				target='_blank'
			>
				<FaInstagram
					size={20}
					className='instagram'
				/>
			</a>
			<a
				href='https://twitter.com'
				target='_blank'
			>
				<FiTwitter
					size={18}
					className='twitter'
				/>
			</a>
			<a
				href='https://www.tiktok.com/foryou'
				target='_blank'
			>
				<BsTiktok
					size={20}
					className='tiktok'
				/>
			</a>
		</div>
	);
};

export default footer;
