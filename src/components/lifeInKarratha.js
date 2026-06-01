import KarrathaGrid from './KarrathaGrid';
import Photos from './photos';
import Content from './content';
import {NavLink} from 'react-router-dom';

import pilbara from '../assets/careers/life-in-karratha/Pilbara_Nature.jpg';
import kangaroo from '../assets/careers/life-in-karratha/kangaroo.jpg';
import karratha_aerial from '../assets/careers/life-in-karratha/Karratha_Aerial.jpg';

function LifeInKarratha() {
    const karrathaPhotos = [
        { src: pilbara, alt: "Pilbara nature"},
        { src: karratha_aerial, alt: "Karratha aerial view"},
        { src: kangaroo, alt: "Kangaroo in it's natural habitat"}
    ];
  return (
    <div>
      <Photos photos={karrathaPhotos}/>
      <Content title="A unique opportunity to experience one of WA's most dynamic regional communities">
        <KarrathaGrid />
        <div className='apply-jobs-flex'>
                <button className='job-jump-button' id='back-button'>
                    <NavLink to="/" id='back-button-nav'>Back to Home page</NavLink>
                </button>
                <button className='job-jump-button' id='apply-button'>
                    <NavLink to="/careers" id='apply-button-nav'>See job opportunities</NavLink>
                </button>
            </div>
      </Content>
    </div>
  );
}

export default LifeInKarratha;