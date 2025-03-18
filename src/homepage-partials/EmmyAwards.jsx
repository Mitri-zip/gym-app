// Importing image assets
import workoutRopes from '../assets/michi-ropes.jpg';
import kbLogo from '../assets/kb-logo.jpg';

// Importing styles
import '../page-styles/emmy-awards.css';

// EmmyAwards component
function EmmyAwards() {
  return (
    <div className="layout">
      <div className="homePicMargin">
        <div className="michiPicMargin">
          <img src={workoutRopes} className="michiPic"></img>
        </div>

        <div className="emmySection">
          <div className="kbLogoLayout">
            <div>
              <img src={kbLogo} className="kbLogoPic"></img>
            </div>
          </div>

          <div className="emmyMentionMargin">
            <p className="emmyMention">EMMY AWARD WINNING<br/>
            GYM FOR WOMEN</p>
          </div>

          <div className="introEmmyMargin">
            <p className="introEmmySec">Whether it's your first time working out or <br />
            you're a Gym Pro, we've got everything <br />
            covered to help you reach your health & <br />
            fitness goals.</p>
          </div>

          <div className="emmySectionButtons">
            <div>
              <button className="bookClass">BOOK CLASS</button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

// Exporting the EmmyAwards component as default
export default EmmyAwards;
