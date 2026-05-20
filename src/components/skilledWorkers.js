import {NavLink} from 'react-router-dom';
import Content from './content';
import "../styles/job_offer.css";

function SkilledMaintenance() {

    return (
        <Content title="Skilled maintenance role description">
            <h2 className='job-section-title'>Responsibilities:</h2>
            <p className='job-section-text'>
                Repair of returned 12m and 6m portable office buildings, crib rooms and toilet blocks.
                Repair times are allocated to each building, damage reports will be provided to outline
                specific areas of repair for each building.
                <br/>
                A leading hand will be your point of contact while in the yard, they will be responsible for
                liaising with the yard manager and relaying changes in scheduling and allocating
                buildings to repair to you.
                <ul className='job-list'>
                    Typical repairs include:
                    <li className='job-list-item'>Preparation, patching, sanding and painting of penetrations and dents to fridge panelling;</li>
                    <li className='job-list-item'>Replacing steel colour bond flashings;</li>
                    <li className='job-list-item'>Replacement or sealing of degraded roof fixings or roof sheet penetrations;</li>
                    <li className='job-list-item'>Window fly screen replacement;</li>
                    <li className='job-list-item'>Door/door hardware replacement;</li>
                    <li className='job-list-item'>Vinyl floor patching;</li>
                    <li className='job-list-item'>Kitchen cabinet repairs;</li>
                    <li className='job-list-item'>Ceiling repairs.</li>
                </ul>
                All repairs will be expected to be completed to a high standard and methodology will be
                advised by the PBM leading hand or by the training skilled maintenance worker.
            </p>

            <h2 className='job-section-title'>Requirements:</h2>
            <p className='job-section-text'>
                <ul className='job-list'>
                    <li className='job-list-item'>Cert 3 in carpentry or equivalent</li>
                    <li className='job-list-item'>Forklift licence preferred</li>
                    <li className='job-list-item'>Construction white card</li>
                    <li className='job-list-item'>Rights to work in Australia</li>
                    <li className='job-list-item'>Current WA Drivers licence</li>
                </ul>
            </p>

            <h2 className='job-section-title'>Hours (as needed):</h2>
            <p className='job-section-text'>
                0600 - 1600 with 1x30 minute break, 1 x 15 min break. <br/>
                Totalling 9.5 paid hours per day. <br/>
                Mon - Fri total 47.5 per week. <br/>
                Weekend work may be required depending on volume of orders at the time of
                contracted work. These are at the same hourly rate and are not mandatory.
            </p>
            <div className='apply-jobs-flex'>
                <button className='job-jump-button' id='back-button'>
                    <NavLink to="/careers" id='back-button-nav'>Back to Careers page</NavLink>
                </button>
                <button className='job-jump-button' id='apply-button'>
                    <NavLink to="/contact" id='apply-button-nav'>Apply for this job</NavLink>
                </button>
            </div>
        </Content>
    )
}

export default SkilledMaintenance;