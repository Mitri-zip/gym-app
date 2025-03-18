import transformation1 from '../assets/bodypic1.jpg';
import transformation2 from '../assets/bodypic2.jpg';
import transformation3 from '../assets/bodypic3.jpg';
import transformation4 from '../assets/bodypic4.jpg';
import React from 'react';
import '../page-styles/transformations.css';

function Transformations() {
  return (
    <div>
      <div className="transformationsLayout">
        <div className="transformationContainer">
          <img src={transformation1} className="transformImages" />
        </div>

        <div className="transformationContainer">
          <img src={transformation2} className="transformImages" />
        </div>

        <div className="transformationContainer">
          <img src={transformation3} className="transformImages" />
        </div>

        <div className="transformationContainer">
          <img src={transformation4} className="transformImages" />
        </div>
      </div>
    </div>
  );
}

export default Transformations;
