import "bootstrap/dist/css/bootstrap.min.css";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
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
    <Router>
      <NavigationBar />
      <ScrollProvider>
        <FormProvider>
          <main>
            <Routes>
              <Route path="/" element={<Home />} />
              <Route path="/portfolio" element={<Portfolio />} />
              <Route path="/blog" element={<Blog />} />
              <Route path="/about" element={<About />} />
              <Route path="/contact" element={<Contact />} />
              <Route path="*" element={<NotFound />} />
            </Routes>
          </main>
        </FormProvider>
      </ScrollProvider>
    </Router>
  );
};

export default Main;
