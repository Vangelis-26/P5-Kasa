import React from 'react';
import BannerImage from '../assets/banner/banner.jpg';
import './styles/components/_Banner.scss';

function Banner() {
    return (
        <div className="banner">
            <img src={BannerImage} alt="Image Bannière" />
            <div className='banner-text'>Chez vous, partout et ailleurs</div>
        </div>
    );
}
export default Banner;
