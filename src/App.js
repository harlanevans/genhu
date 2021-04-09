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
          <Route exact path="/our-staff" component={Staff} />
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
