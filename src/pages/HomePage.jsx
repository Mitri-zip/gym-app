import KbNav from '../partials/KbNav.jsx';
import KbFooter from '../partials/KbFooter.jsx';
import EmmyAwards from '../homepage-partials/EmmyAwards.jsx';
import Switch from '../homepage-partials/Switch.jsx';
import Offers from '../homepage-partials/Offers.jsx';
import SlideShow from '../homepage-partials/SlideShow.jsx';
import Transformations from '../homepage-partials/Transformations.jsx';



function HomePage() {
  return (
    <div>
      <KbNav></KbNav>
      <EmmyAwards></EmmyAwards>
      <Switch></Switch>
      <Offers></Offers>
      <SlideShow></SlideShow>
      <Transformations></Transformations>
      <KbFooter></KbFooter>
    </div>
  );
}

export default HomePage;