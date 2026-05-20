import {NavLink} from 'react-router-dom';
import Photos from './photos';
import Content from './content';
import photo from '../assets/careers/Happy-team.jpeg';
import '../styles/careers.css';

function Careers() {

    const aboutPhoto = [
        {src: photo, alt: "Happy workforce on Wash Pad"}
    ]
    return (
        <div>
            <Photos photos={aboutPhoto} />
            <Content title="Build your career in the Pilbara">
                <p className='about-us-text'>
                    Peninsula Building Maintenance is committed to providing fair, stable, and meaningful
                    employment opportunities within regional Western Australia. We prioritise the
                    engagement of skilled local tradespeople and support workforce development through
                    training, upskilling, and long-term career pathways.
                    We are dedicated to maintaining a safe, inclusive, and respectful workplace where all
                    employees are treated with dignity and provided equal opportunity for advancement.
                    Our employment practices comply with all relevant industrial relations legislation,
                    modern awards, and workplace health and safety regulations.
                </p><p className='about-us-text'>
                    We actively promote: 
                    <ul className='careers-list'>
                        <li className='careers-bullet-point'>Safe working environments and strong safety culture</li>
                        <li className='careers-bullet-point'>Ongoing skills development and training</li>
                        <li className='careers-bullet-point'>Family-friendly work arrangements where operationally feasible</li>
                        <li className='careers-bullet-point'>Ethical recruitment and fair remuneration</li>
                        <li className='careers-bullet-point'>Workforce diversity and regional participation</li>
                        <li className='careers-bullet-point'>Regional VISA incentives for WHV holders</li>
                    </ul>
                <br/>
                    Through responsible employment practices, we aim to strengthen regional communities
                    while delivering reliable and professional services to our clients.
                </p>
                <div className='jump-flex'>
                    <div className='jump-flex-layout' id='skilled-worker-flex-layout' >
                        <div>
                            <h2 className='jump-flex-title'>Skilled maintenance</h2>
                            <p className='jump-flex-text'>Join PBM as a carpenter</p>
                        </div>
                        <button className='jump-button' id='skilled-worker-jump-button'>
                            <NavLink to='/careers/skilled-maintenace'>View offers<span className='arrow-right'>▶</span></NavLink>
                        </button>
                    </div>
                    <div className='jump-flex-layout' id='TA-flex-layout'>
                        <div>
                            <h2 className='jump-flex-title'>Trade assistant</h2>
                            <p className='jump-flex-text'>Join PBM as a commercial cleaner</p>
                        </div>
                        <button className='jump-button' id='TA-jump-button'>
                            <NavLink  to='/careers/ta-cleaner'>View offers<span className='arrow-right'>▶</span></NavLink>
                        </button>
                    </div>
                    <div className='jump-flex-layout' id='karratha-flex-layout'>
                        <div>
                            <h2 className='jump-flex-title'>Living in Karratha</h2>
                            <p className='jump-flex-text'>See what life is like in the Pilbara</p>
                        </div>
                        <button className='jump-button' id='karratha-jump-button'>
                            <NavLink  to='/careers/life-in-karratha'>Discover<span className='arrow-right'>▶</span></NavLink>
                        </button>
                    </div>
                </div>
            </Content>
        </div>
    )
}

export default Careers