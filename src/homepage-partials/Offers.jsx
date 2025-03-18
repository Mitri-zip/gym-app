import React from 'react';
import '../page-styles/offers.css';

function Offers() {
  return (
    <div>
      <div className="offer-desc">
        <div className="offer-margin">
          <div className="offer-header">
            <h1>Classes</h1>
          </div>
          <div className="offer-desc-message">
            <p>
              Our Strength & Toning classes are designed to help you build<br></br>  
              strength,increase power, and improve your overall fitness <br></br> level. 
              Each class incorporates Strength Training, Core building, and Recovery.
            </p>
          </div>
        </div>

        {/* Repeat the structure for other offers */}
        <div className="offer-margin">
          <div className="offer-header">
            <h1>Training</h1>
          </div>
          <div className="offer-desc-message">
            <p>
              We offer Small Group Training and Personal Training sessions based on your goals.<br></br> 
              Meet with a coach to discuss your personal fitness plan and track your progress.
            </p>
          </div>
        </div>

        <div className="offer-margin">
          <div className="offer-header">
            <h1>Virtual</h1>
          </div>
          <div className="offer-desc-message">
            <p>
              Join us anywhere in the world! You can look and feel your best <br></br> 
              with Killer Body from the comfort of your own home. <br></br> 
              Access our weekly classes from your phone or PC.
            </p>
          </div>
        </div>

        <div className="offer-margin">
          <div className="offer-header">
            <h1>Rentals</h1>
          </div>
          <div className="offer-desc-message">
            <p>
              Use our studio to help build your business and take <br></br> 
              your content to the next level. Rentals available for classes, <br></br> 
              meetings, photography, parties, and more.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Offers;
