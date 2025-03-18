import React from 'react';
import '../page-styles/price-intro.css';

function PriceIntro() {
  return (
    <div className="price-intro">
      <h1 className="price-intro-heading">Welcome to our community!</h1>
      <div className="price-intro-description">
        <p className="price-intro-paragraph">
          If you are joining us for the first time, we are excited to have you.<br />
          We understand that starting a new journey can be a bit intimidating.<br />
          That is why we are offering you a chance to join us for a free class.<br />
          It is a great way to get to know our community, meet our friendly instructors,<br />
          and see if our classes are the right fit for you. There is no pressure,<br />
          no strings attached. Just a warm, welcoming space where you can explore<br />
          and learn at your own pace.<br /><br />

          SO WHY WAIT?<br />
          Sign up now and join us for a free class.<br />
          We are looking forward to meeting you!
        </p>
      </div>
    </div>
  );
}

export default PriceIntro;
