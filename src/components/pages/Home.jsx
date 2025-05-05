import { Banner } from '../Banner';
import { Gallery } from '../Gallery';

export function Home() {
    return (
        <div className="home">
            <Banner />
            <div className='gallery'>
                <Gallery />
            </div>
        </div>
    )
}
