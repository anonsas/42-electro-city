import React from 'react';
import './Home.scss';
import ElectricTower from '../../assets/electric-tower.svg';

function Home() {
  return (
    <div className="home">
      <img src={ElectricTower} alt="electric tower" className="electric-tower" />
    </div>
  );
}

export default Home;
