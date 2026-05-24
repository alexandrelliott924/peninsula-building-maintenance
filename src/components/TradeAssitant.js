import {NavLink} from 'react-router-dom';
import Content from './content';
import "../styles/job_offer.css";

function TradeAssitant() {

    return(
        <Content title="Trade assistant role description">
            <h2 className='job-section-title'>Responsibilities:</h2>
            <p className='job-section-text'>
                <ul className='job-list'>
                    <li className='job-list-item'>Cleaning of returned 12m and 6m portable office buildings, crib rooms and toilet blocks.</li>
                    <li className='job-list-item'>Emptying and packing assets and furniture within portable buildings.</li>
                    <li className='job-list-item'>Cleaning and maintaining assets and furniture.</li>
                    <li className='job-list-item'>Managing time and following order lists to ensure deadlines are met.</li>
                    <li className='job-list-item'>Liaising with office staff to maintain good communication between departments.</li>
                    <li className='job-list-item'>Forklift movements and yard logistics.</li>
                </ul>
            </p>

            <h2 className='job-section-title'>Requirements:</h2>
            <p className='job-section-text'>
                <ul className='job-list'>
                    <li className='job-list-item'>Forklift licence</li>
                    <li className='job-list-item'>Test and Tag (preferred)</li>
                    <li className='job-list-item'>Construction experience (preferred)</li>
                    <li className='job-list-item'>Rights to work in Australia</li>
                    <li className='job-list-item'>Current WA Drivers licence</li>
                    <li className='job-list-item'>Construction white card</li>
                </ul>
            </p>

            <h2 className='job-section-title'>Hours (as needed):</h2>
            <p className='job-section-text'>
                0600 - 1600 with 1x30 minute break, 1 x 15 min break.
            </p>
            <div className='apply-jobs-flex'>
                <button className='job-jump-button' id='back-button'>
                    <NavLink to="/careers" id='back-button-nav'>Back to Careers page</NavLink>
                </button>
                <button className='job-jump-button' id='apply-button'>
                    <NavLink to="/contact" state={{ subject: 'Trade assistant application' }} id='apply-button-nav'>Apply for this job</NavLink>
                </button>
            </div>
        </Content>
    )
}

export default TradeAssitant;