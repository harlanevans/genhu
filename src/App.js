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
import Anta from "./components/Homes/Anta/Anta";
import Alvarado from "./components/Homes/Alvarado/Alvarado";
import AzulWasi from "./components/Homes/AzulWasi/AzulWasi";
import Ricaurte from "./components/Homes/Ibague-Ricaurte/Ricaurte";
import SanJose from "./components/Homes/Ibague-SanJose/SanJose";
import Greenhouse from "./components/Homes/Greenhouse/Greenhouse";
import Contact from "./components/Contact/Contact";

const App = () => {
  return (
    <>
      <Navbar />
      <ScrollToTop>
        <Switch>
          <Route exact path="/" component={Landing} />
          <div style={styles.sectionPadding}>
            <Route exact path="/privacy" component={Privacy} />
            <Route exact path="/policy-and-financial" component={Policy} />
            <Route exact path="/about" component={About} />
            <Route exact path="/contact" component={Contact} />
            <Route exact path="/our-staff" component={Staff} />
            <Route exact path="/homes&projects" component={Homes} />

            <Route exact path="/homes&projects/anta" component={Anta} />
            <Route exact path="/homes&projects/alvarado" component={Alvarado} />
            <Route exact path="/homes&projects/azulwasi" component={AzulWasi} />
            <Route
              exact
              path="/homes&projects/ibague/ricaurte"
              component={Ricaurte}
            />
            <Route
              exact
              path="/homes&projects/ibague/sanjose"
              component={SanJose}
            />
            <Route
              exact
              path="/homes&projects/greenhouse-hydroponics"
              component={Greenhouse}
            />
          </div>
        </Switch>
      </ScrollToTop>
      <section style={styles.sectionPadding}>
        <Footer />
      </section>
    </>
  );
};

export default App;

const styles = {
  sectionPadding: {
    padding: "2em 2em",
  },
};
