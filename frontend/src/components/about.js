import Photos from './photos';
import Content from './content';
import {NavLink} from 'react-router-dom';
import photo from '../assets/about-us/moving-building.jpeg'


function About() {
    const aboutPhotos = [
        { src: photo, alt: "Moving building" }
    ];

    return (
        <div>
            <Photos photos={aboutPhotos} />
            <Content title="Quality maintenance from the ground up">
                <p>
                    Founded in Karratha, Peninsula Building Maintenance was built on strong customer
                    relationships, reliability, and a determination to improve the systems and standards 
                    within the portable buildings industry. Operating in the demanding Pilbara mining and 
                    hire sector, we understand that portable assets are exposed to extreme conditions and 
                    high turnover usage. At PBM, we focus on the level of care and attention to detail 
                    that is often overlooked, delivering high-quality maintenance and restoration 
                    solutions that extend asset life, improve presentation, and reduce downtime. 
                    Our goal is simple — to help our customers maintain the best portable buildings 
                    fleet in the Pilbara.
                </p>
                <div className='jump-flex'>
                    <div className='jump-flex-layout-left'>
                        <div>
                            <h2 className='jump-flex-title'>Get a quote</h2>
                            <p className='jump-flex-text'>See what we can do for you</p>
                        </div>
                        <button className='jump-button' id='get-quote-jump-button'>
                            <NavLink  to='/get-quote'>Our services<span className='arrow-right'>▶</span></NavLink>
                        </button>
                    </div>
                    <div className='jump-flex-layout-right' id='careers-flex-layout' >
                        <div>
                            <h2 className='jump-flex-title'>Careers</h2>
                            <p className='jump-flex-text'>Join the PBM team in the Pilbara</p>
                        </div>
                        <button className='jump-button' id='careers-jump-button'>
                            <NavLink to='/careers'>View roles <span className='arrow-right'>▶</span></NavLink>
                        </button>
                    </div>
                    
                </div>
            </Content>
        </div>
    )
}

export default About