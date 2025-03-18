import PriceIntro from "../pricing-partials/PriceIntro";
import Contact from "../pricing-partials/Contact";
import Memberships from "../pricing-partials/Memberships";
import KbNav from "../partials/KbNav";
import KbFooter from "../partials/KbFooter";

function Pricing() {
  return(
    <div>
      <KbNav></KbNav>
      <PriceIntro></PriceIntro>
      <Contact></Contact>
      <Memberships></Memberships>
      <KbFooter></KbFooter>

    </div>
  );
}
export default Pricing;