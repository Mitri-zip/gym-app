import { Link } from 'react-router-dom';
import '../page-styles/membership.css';

function Memberships() {
  return (
    <div>
      <div className="price-intro">
        <h1 className="offer-title">PRICING</h1>
      </div>

      <div className="offer-desc">
        <div className="offer-margin">
          <div className="offer-header">
            <h1>Basic</h1>
          </div>
          <div className="offer-desc-message">
            <p>
              For just $169 a month, our<br />
              Basic Membership offers unlimited access to <br />
              on-demand classes, virtual workshops, and masterclasses. Enjoy the flexibility of <br />
              attending classes at your convenience and dive <br />
              into a diverse range of fitness experiences tailored to your preferences.
            </p>
          </div>
          <div className="offer-button-layout">
            <Link to="/basiccheckout">
              <button className="offer-button">JOIN NOW</button>
            </Link>
          </div>
        </div>

        <div className="offer-margin">
          <div className="offer-header">
            <h1>Personal</h1>
          </div>
          <div className="offer-desc-message">
            <p>
              Elevate your fitness journey with our <br /> 
              Small Group Membership, available at $350 a month. Enjoy 30-minute small group <br />
              training sessions every week, designed <br />
              to provide personalized attention and support in a motivating group setting. 
            </p>
          </div>
          <div className="offer-button-layout">
            <Link to="/personalcheckout">
              <button className="offer-button">JOIN NOW</button>
            </Link>
          </div>
        </div>

        <div className="offer-margin">
          <div className="offer-header">
            <h1>Small Group</h1>
          </div>
          <div className="offer-desc-message">
            <p>
              Step up your fitness game with our<br /> 
              Personal Training Membership<br />
              at $500 a month. Beyond the offerings of the<br /> 
              Basic Membership, this exclusive package<br /> 
              provides you with two one-hour personal <br />
              training sessions per week. Experience <br />
              personalized guidance and tailored <br />
              workouts designed to optimize your fitness journey.
            </p>
          </div>
          <div className="offer-button-layout">
            <Link to="/smallcheckout">
              <button className="offer-button">JOIN NOW</button>
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Memberships;
