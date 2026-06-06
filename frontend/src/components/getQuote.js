import {NavLink} from 'react-router-dom';
import Photos from './photos';
import Content from './content';
import photo from '../assets/get-quote/front-building.png';
import '../styles/getQuote.css';
import '../styles/jumpButtons.css';

function GetQuote() {
    const aboutPhoto = [
        {src: photo, alt:"front of portable building"}
    ];
    return(
        <div>
            <Photos photos={aboutPhoto} />
            <Content title="Find the right solution for your fleet">
                <p>
                    We are a Karratha-based team specialised in portable buildings maintenance. We offer a
                    complete in-house restoration service for your portable assets. Save on transport costs by
                    having our team come to you.
                    <div className='quote-grid'>
                        <ul className='renovations-quotes'>
                            <span className='quote-category-title'>Renovation and Construction</span>
                            <li className='quote-item'>Roofing and flashing repairs</li>
                            <li className='quote-item'>Panel and paint restoration</li>
                            <li className='quote-item'>Door and window repairs</li>
                            <li className='quote-item'>Vinyl flooring and subfloor repairs</li>
                            <li className='quote-item'>Partition wall installation</li>
                            <li className='quote-item'>Kitchen installation and fit-outs</li>
                        </ul>
                        <ul className='cleaning-quotes'>
                            <span className='quote-category-title'>Cleaning and Restoration</span>
                            <li className='quote-item'>Commercial cleaning services</li>
                            <li className='quote-item'>Furniture cleaning and restoration</li>
                            <li className='quote-item'>Furniture Logistics</li>
                        </ul>
                        <ul className='admin-quote'>
                            <span className='quote-category-title'>Administrative Services</span>
                            <li className='quote-item'>Damage reporting and condition assessments</li>
                            <li className='quote-item'>Quotation and scope of works preparation</li>
                        </ul>
                    </div>
                </p>
                <div className='jump-flex'>
                    
                    <div className='jump-flex-layout-right' id='contact-flex-layout'>
                        <div>
                            <h2 className='jump-flex-title'>Let's get in touch</h2>
                            <p className='jump-flex-text'>Tell us about your project</p>
                        </div>
                        <button className='jump-button' id='contact-jump-button'>
                            <NavLink to='/contact' state={{ subject: 'Get a quote' }}>Contact us<span className='arrow-right'>▶</span></NavLink>
                        </button>
                    </div>
                </div>
            </Content>
        </div>
    )
}

export default GetQuote;