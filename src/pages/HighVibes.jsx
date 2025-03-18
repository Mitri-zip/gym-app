import Intro from '../highvibes-partials/Intro.jsx';
import Display from '../highvibes-partials/Display.jsx';
import CanniSignUp from '../highvibes-partials/CanniSignUp.jsx';
import KbNav from '../partials/KbNav.jsx';
import KbFooter from '../partials/KbFooter.jsx';


function HighVibes() {

  const styles = {
    background: {
      backgroundColor: 'black',
      margin: 0,
      padding: 0,
    },
    
  };


  return (
    <div style={styles.background}>
    <KbNav></KbNav>
    <Intro></Intro>
    <Display></Display>
    <CanniSignUp></CanniSignUp>
    <KbFooter></KbFooter>
    </div>
  );
}

export default HighVibes;
