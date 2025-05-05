import React from 'react';
import BannerImage from '../assets/banner/banner.jpg';
import './styles/components/_Banner.scss';

export function Banner() {
    return (
        <div className="banner">
            <img className='banner_img' src={BannerImage} alt="Image Bannière" />
            <div className='banner_text'>Chez vous, partout et ailleurs</div>
        </div>
    );
}
