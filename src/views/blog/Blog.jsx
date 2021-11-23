import { useState, useContext } from "react";
import ScrollContext from "../../context/ScrollContext";
import { useSpring, animated } from "react-spring";
import * as data from "../../assets/data/blog/blog.json";
import blogHeaderImage from "../../assets/image/blog/blogHeaderImage.png";

import BlogHeader from "./BlogHeader";
import BlogSection from "./BlogSection";
import Footer from "../../components/footer/Footer";

const Blog = () => {
  const [blogData, setBlogData] = useState(data.default);
  const [popUp, setPopUp] = useState(false);
  const [popUpData, setPopUpData] = useState([]);

  const { setScroll, springProps } = useContext(ScrollContext);
  const propsStyle = useSpring(springProps);

  const popUpBlog = (blogId) => {
    setPopUpData(blogData.filter((blog) => blog.id === blogId));
    setPopUp(true);
    setScroll("hidden");
  };

  const props = {
    blogData,
    popUpBlog,
    popUpData,
    popUp,
    setPopUp,
  };

  return (
    <animated.div style={propsStyle}>
      <BlogHeader blogHeaderImage={blogHeaderImage} />
      <BlogSection {...props} />
      <Footer />
    </animated.div>
  );
};

export default Blog;
