import {NavLink} from 'react-router-dom';
import Photos from './photos';
import Content from './content';
import image1 from "../assets/home/buildings-sunset.jpg"
import image2 from "../assets/home/Before-After-building-restoration.png";
import image3 from "../assets/home/Toilet-block-navy-divider.png";
import image4 from "../assets/home/floor-cleaning.png";
import '../styles/jumpButtons.css'


function Home() {
    const homePhotos = [
        { src: image1, alt:"Beautiful sunset over portable buildings"},
        { src: image2, alt:"Before/After building restoration"},
        { src: image3, alt: "Ablution block with navy divider"},
        { src: image4, alt: "Floor cleaning with polisher"}
    ];
    return (
        <div>
            <Photos photos={homePhotos}/>
            <Content title="Safe, efficient building maintenance across regional WA">
                <p>
                    Peninsula Building Maintenance is committed to delivering safe, efficient, 
                    and high-quality building repair and maintenance services across regional Western 
                    Australia. We specialise in the maintenance and refurbishment of portable and modular
                    infrastructure, ensuring assets remain compliant, functional, and fit for purpose. 
                </p>
                <p>
                    Through strong governance, skilled tradespeople, and a focus on safety, quality 
                    assurance, and timely delivery, we provide reliable solutions that minimise downtime 
                    and maximise asset longevity. We are dedicated to supporting regional communities, 
                    creating sustainable employment opportunities, and building long-term partnerships 
                    with government and private sector clients.
                </p>
                <div className='jump-flex'>
                    <div className='jump-flex-layout-left' id='about-flex-layout' >
                        <div>
                            <h2 className='jump-flex-title'>About us</h2>
                            <p className='jump-flex-text'>Learn more about our commitment to excellence</p>
                        </div>
                        <button className='jump-button' id='about-jump-button'>
                            <NavLink to='/about-us'>Who we are<span className='arrow-right'>▶</span></NavLink>
                        </button>
                    </div>
                    <div className='jump-flex-layout-right'>
                        <div>
                            <h2 className='jump-flex-title'>Get a quote</h2>
                            <p className='jump-flex-text'>See what we can do for you</p>
                        </div>
                        <button className='jump-button'>
                            <NavLink  to='/get-quote'>Our services<span className='arrow-right'>▶</span></NavLink>
                        </button>
                    </div>
                </div>
            </Content>
        </div>
    )
}

export default Home