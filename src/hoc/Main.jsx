import "bootstrap/dist/css/bootstrap.min.css";
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
import ScrollProvider from "../context/ScrollProvider";
import FormProvider from "../context/FormProvider";

const Main = () => {
  return (
    <ScrollProvider>
      <Router>
        <NavigationBar />

        <main>
          <Switch>
            <Route exact path="/" component={Home} />
            <Route path="/portfolio" component={Portfolio} />
            <Route path="/blog" component={Blog} />
            <Route path="/about" component={About} />

            <FormProvider>
              <Route path="/contact" component={Contact} />
            </FormProvider>
            <Route component={NotFound} />
          </Switch>
        </main>
      </Router>
    </ScrollProvider>
  );
};

export default Main;
