import Photos from './photos';
import Content from './content';
import {NavLink} from 'react-router-dom';
import '../styles/home.css'


function Home() {
    return (
        <div>
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