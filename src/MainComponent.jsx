import React from "react";
import "../styles/style.css";
import sedanIcon from './images/icon-sedans.svg';
import luxuryIcon from './images/icon-luxury.svg';
import suvIcon from './images/icon-suvs.svg'; 

const MainComponent = () => {
  return (
    <>
      <main>
        <div>
          
          <img src={sedanIcon} alt="sedan icon" />
          <h3>SEDANS</h3>
          <p>
            Choose a sedan for its affordability and excellent fuel economy.
            Ideal for cruising in the city or on your next road trip.
          </p>
          <button className="btn">Learn More</button>
        </div>

        <div>
          <img src={suvIcon} alt="suv icon" />
          <h3>SUVs</h3>
          <p>
            Take an SUV for its spacious interior, power, and versatility.
            Perfect for your next family vacation and off-road adventures.
          </p>
          <button className="btn">Learn More</button>
        </div>

        <div>
          <img src={luxuryIcon} alt="luxury icon" />
          <h3>LUXURY</h3>
          <p>
            Cruise in the best car brands without the bloated prices. Enjoy the
            enhanced comfort of a luxury rental and arrive in style.
          </p>
          <button className="btn">Learn More</button>
        </div>
      </main>
    </>
  );
};

export default MainComponent;
