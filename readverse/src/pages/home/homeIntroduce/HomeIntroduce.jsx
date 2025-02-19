import React from 'react';
import './HomeIntroduce.css';
import WobbleImage from '../../../components/aniamtions/WoobleImage';
import coverOne from '../../../assets/icons/cover-one.jpg';
import coverTwo from '../../../assets/icons/cover-two.jpg';
import coverThree from '../../../assets/icons/cover-three.jpg';


const HomeIntroduce = () => {
  return (
    <div className='home-introduce'>
        <section className='section-principal-text'>
          <p className='home-intro-principalText'><span className='special-word'>Readverse</span> um mundo de literatura feito pra você</p>
        </section>

        <section className='home-intro-gallery'>
          <WobbleImage imageAdress={coverOne} nameClass="cover-gallery cover-one" />
          <WobbleImage imageAdress={coverTwo} nameClass="cover-gallery cover-two" />
          <WobbleImage imageAdress={coverThree} nameClass="cover-gallery cover-three" />
        </section>
    </div>
  );
};

export default HomeIntroduce;