import {NavLink} from 'react-router-dom';
import Photos from './photos';
import Content from './content';
import image1_desktop from "../assets/home/Buildings-sunset.jpg"
import image2_desktop from "../assets/home/Before-After-building-restoration.png";
import image3_desktop from "../assets/home/Toilet-block-navy-divider.png";
import image4_desktop from "../assets/home/Floor-polisher.png";
import image1_mobile from "../assets/home/Buildings-sunset-8x5.jpg"
import image2_mobile from "../assets/home/Before-After-building-restoration-8x5.png";
import image3_mobile from "../assets/home/Toilet-block-navy-divider-8x5.png";
import image4_mobile from "../assets/home/Floor-polisher-8x5.png";
import install_image_desktop from "../assets/home/Install-image-horizontal.png";
import install_image_mobile from "../assets/home/Install-image-vertical.png";
import '../styles/jumpButtons.css';
import '../styles/coming-soon.css';


function Home() {
    const homePhotos = [
        { src: image1_desktop, mobile: image1_mobile, alt:"Beautiful sunset over portable buildings"},
        { src: image2_desktop, mobile: image2_mobile, alt:"Before/After building restoration"},
        { src: image3_desktop, mobile: image3_mobile, alt: "Ablution block with navy divider"},
        { src: image4_desktop, mobile: image4_mobile, alt: "Floor cleaning with polisher"},
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
                <div className='coming-soon-banner'>
                    <div className='coming-soon-images'>
                        <picture>
                            <source media='(max-width: 768px)' srcSet={install_image_mobile} />
                            <img src= {install_image_desktop} 
                                alt='Installing portable buildings' 
                                className='install-image'>
                            </img>
                        </picture>
                    </div>
                    <div className='coming-soon-text'>
                        <h3>
                            Install services will be available soon! Enquire for further details.
                        </h3>
                        <button className='jump-button'>
                            <NavLink to='/contact' state={{ subject: 'Get a quote' }}>Enquire<span className='arrow-right'>▶</span></NavLink>
                        </button>
                    </div>
                </div>
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