import React from 'react';
import Banner from '../Banner';
import Gallery from '../Gallery';

function Home() {
    return (
        <div className="home">
            <Banner />
            <div className='gallery'>
                <Gallery />
            </div>
        </div>
    )
}

export default Home;
