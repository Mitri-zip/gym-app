import React from 'react';
import vibing from "../assets/highvibez-ppl.jpg";
import flames from "../assets/highsmoke.jpg";
import '../page-styles/display.css';

function Display() {
  return (
    <div>
      <div className="people-vision-container">
        <div className="highvibes-img-layout">
          <img src={vibing} alt="High Vibes Session" className="high-vibes-image" />
        </div>
        <div className="book-class-container">
          <div className="vision">VISION</div>
          <p className="vision-msg">
            We've created this Canni-Community because finding your<br />
            people can be life changing! Having an environment<br />
            where we can reach our goals and vibe at the same<br />
            time is what High Vibez is all about.<br />
            Look forward to curated events that will take<br />
            you to HIGHer levels through fellowship and networking.<br />
            You've been waiting for this, so come and enjoy the vibez!
          </p>
          <button className="class-button">TAKE A CLASS</button>
        </div>
      </div>
      <div className="people-vision-container">
        <div className="book-class-container">
          <div className="vision">POTicy</div>
          <p className="vision-msg">
            All of our events are Bring your own Bud.<br />
            We do not sell or distribute.<br />
            Must be 21+ and have proof of ID.<br />
            Classes are Women Only unless Specified<br />
            (We do host unisex events)<br />
            Tickets are Non-Refundable<br />
          </p>
          <button className="class-button">TAKE A CLASS</button>
        </div>
        <div className="highvibes-img-layout">
          <img src={flames} alt="Smoke Flames" className="high-vibes-image" />
        </div>
      </div>
    </div>
  );
}

export default Display;
