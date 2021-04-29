import { Route, Switch } from "react-router";
import "./assets/Global.scss";
import ScrollToTop from "./ScrollToTop";

import Navbar from "./components/Navbar/Navbar.jsx";
import Landing from "./components/Landing/Landing.jsx";
import Footer from "./components/Footer/Footer.jsx";
import Privacy from "./components/Legal/Privacy/Privacy";
import Policy from "./components/Legal/Policy/Policy";
import About from "./components/About/About";
import Staff from "./components/About/Staff/Staff";
import Homes from "./components/Homes/Homes";
import AzulWasi from "./components/Homes/AzulWasi/AzulWasi";
import SanJose from "./components/Homes/Ibague-SanJose/SanJose";
import Contact from "./components/Contact/Contact";
import Espinal from "./components/Homes/Espinal/Espinal";
import Melgar from "./components/Homes/Melgar/Melgar";
import LaGuajira from "./components/Homes/LaGuajira/LaGuajira";
import Medellin from "./components/Homes/Medellin/Medellin";
import Cucuta from "./components/Homes/Cucuta/Cucuta";
import SanFelipe from "./components/Homes/SanFelipe/SanFelipe";

const App = () => {
  return (
    <>
      <Navbar />
      <ScrollToTop>
        <Switch>
          <Route exact path="/" component={Landing} />
          <Route exact path="/privacy" component={Privacy} />
          <Route exact path="/policy-and-financial" component={Policy} />
          <Route exact path="/about" component={About} />
          <Route exact path="/contact" component={Contact} />
          <Route exact path="/our-staff" component={Staff} />
          <Route exact path="/homes&projects" component={Homes} />

          <Route exact path="/homes&projects/azulwasi" component={AzulWasi} />
          <Route exact path="/homes&projects/espinal" component={Espinal} />
          <Route exact path="/homes&projects/melgar" component={Melgar} />
          <Route exact path="/homes&projects/laguajira" component={LaGuajira} />
          <Route exact path="/homes&projects/medellin" component={Medellin} />
          <Route exact path="/homes&projects/cucuta" component={Cucuta} />
          <Route exact path="/homes&projects/sanfelipe" component={SanFelipe} />
          <Route exact path="/homes&projects/sanjose" component={SanJose} />
        </Switch>
      </ScrollToTop>
      <Footer />
    </>
  );
};

export default App;
