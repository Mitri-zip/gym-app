// Importing necessary components from react-router-dom
import { BrowserRouter, Routes, Route } from 'react-router-dom';

// Importing page components
import HomePage from "./pages/HomePage";
import HighVibes from "./pages/HighVibes";
import Pricing from "./pages/Pricing";
import BookClass from "./pages/BookClass";

// Importing checkout components
import BasicCheckout from "./pricing-partials/BasicCheckout";
import SmallCheckout from "./pricing-partials/SmallCheckout";
import PersonalCheckout from "./pricing-partials/PersonalCheckout";

import ScrollToTop from './partials/ScrolltoTop';

// App component
function App() {
  return (
    <>
      {/* BrowserRouter allows us to set up routes */}
      <BrowserRouter>
        {/* ScrollToTop component */}
        <ScrollToTop />
        {/* Routes component where we define our routes */}
        <Routes>
          {/* Route for the index page */}
          <Route index element={<HomePage />} />
          {/* Route for the home page */}
          <Route path="/home" element={<HomePage />} />
          {/* Route for the highvibes page */}
          <Route path="/highvibes" element={<HighVibes />} />
          {/* Route for the pricing page */}
          <Route path="/pricing" element={<Pricing />} />
          {/* Route for the bookclass page */}
          <Route path="/bookclass" element={<BookClass />} />
          {/* Route for the basiccheckout page */}
          <Route path="/basiccheckout" element={<BasicCheckout />} />
          {/* Route for the smallcheckout page */}
          <Route path="/smallcheckout" element={<SmallCheckout />} />
          {/* Route for the personalcheckout page */}
          <Route path="/personalcheckout" element={<PersonalCheckout />} />
        </Routes>
        <ScrollToTop />
      </BrowserRouter>
    </>
  );
}

// Exporting the App component as default
export default App;
