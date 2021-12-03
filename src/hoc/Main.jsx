import "bootstrap/dist/css/bootstrap.min.css";
import { useState } from "react";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import "bootstrap/dist/js/bootstrap.bundle.min.js";

// views and components --------------------------------------
import NavigationBar from "../components/navbar/NavigationBar";
import Home from "../views/home/Home";
import Blog from "../views/blog/Blog.jsx";
import Portfolio from "../views/portfolio/Portfolio";
import About from "../views/about/About";
import Contact from "../views/contact/Contact";
import NotFound from "../views/notFound/NotFound";

// context --------------------------------------------
import ScrollContext from "../context/ScrollContext";
import FormContext from "../context/FormContext";

const Main = () => {
  const [scroll, setScroll] = useState("auto");
  const [formName, setFormName] = useState("");
  const [formEmail, setFormEmail] = useState("");
  const [formMessage, setFormMessage] = useState("");

  // React-Spring API -----------------------------------
  const springSetup = {
    from: { y: 30 },
    to: { y: 0 },
    delay: 100,
    config: { friction: 60, mass: 1, tension: 280, duration: 1000 },
  };

  const [springProps, setSpringProps] = useState(springSetup);

  const formProps = {
    formName,
    setFormName,
    formEmail,
    setFormEmail,
    formMessage,
    setFormMessage,
  };

  // body scroll ---------------------------------------
  document.body.style.overflow = scroll;

  return (
    <ScrollContext.Provider value={{ setScroll, springProps }}>
      <Router>
        <NavigationBar />

        <main>
          <Switch>
            <Route exact path="/" component={Home} />
            <Route path="/portfolio" component={Portfolio} />
            <Route path="/blog" component={Blog} />
            <Route path="/about" component={About} />

            <FormContext.Provider value={formProps}>
              <Route path="/contact" component={Contact} />
            </FormContext.Provider>
            <Route component={NotFound} />
          </Switch>
        </main>
      </Router>
    </ScrollContext.Provider>
  );
};

export default Main;
