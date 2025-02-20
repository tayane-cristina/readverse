import React from 'react';
import './HomeIntroduce.css';
import WobbleImage from '../../../components/aniamtions/WoobleImage';
import womamReading from '../../../assets/icons/woman-reading.png';
import manReading from '../../../assets/icons/man-reading.png';
import { useState } from 'react';


const HomeIntroduce = () => {

  const [isActive, setIsActive] = useState(true)

  const togglerActive = () => {
    setIsActive(!isActive)
  }

  return (
    <div className='home-introduce'>
    
        <h2 className='home-intro-principalText'>um mundo de literatura feito pra você</h2>

        <section className='home-intro-gallery'>
          <WobbleImage imageAdress={isActive ?  womamReading : manReading } handleClick={togglerActive} nameClass="cover-gallery" />
        </section>

    </div>
  );
};

export default HomeIntroduce;