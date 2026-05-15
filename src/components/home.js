import {NavLink} from 'react-router-dom';
import Photos from './photos';
import Content from './content';
import buildingRow from "../assets/home/Building-row.jpeg";
import buildingFront from "../assets/home/Building-front.jpeg";
import buildingInside from "../assets/home/Building-inside.jpeg";
import airconsLandscape from "../assets/home/Aircons-landscape.jpeg";
import forklift from "../assets/home/Forklift.jpeg";
import '../styles/home.css'


function Home() {
    const homePhotos = [
        { src: buildingRow, alt:"Coates buildings"},
        { src: buildingFront, alt:"An ugly building"},
        { src: buildingInside, alt: "Packed building"},
        { src: airconsLandscape, alt: "Look at this yard!"},
        { src: forklift, alt: "Mila on a forklift"}
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
                    <div className='jump-flex-layout' id='careers-flex-layout' >
                        <div>
                            <h2 className='jump-flex-title'>Careers</h2>
                            <p className='jump-flex-text'>Join the PBM team in the Pilbara</p>
                        </div>
                        <button className='jump-button' id='careers-jump-button'>
                            <NavLink to='/careers'>View roles <span className='arrow-right'>▶</span></NavLink>
                        </button>
                    </div>
                    <div className='jump-flex-layout' id='contact-flex-layout'>
                        <div>
                            <h2 className='jump-flex-title'>Get a quote</h2>
                            <p className='jump-flex-text'>Talk to us about your project</p>
                        </div>
                        <button className='jump-button' id='contact-jump-button'>
                            <NavLink  to='/contact'>Contact us <span className='arrow-right'>▶</span></NavLink>
                        </button>
                    </div>
                </div>
            </Content>
        </div>
    )
}

export default Home