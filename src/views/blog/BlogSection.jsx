import { Container } from "react-bootstrap";
import BlogPopUp from "./BlogPopUp";

const BlogSection = ({ blogData, popUpBlog, popUpData, popUp, setPopUp }) => {
  return (
    <div className="blog">
      <Container>
        <div className="blogSection">
          {blogData.map((blog) => {
            return (
              <div key={blog.id} className="eachBlog">
                <h2>
                  {blog.title.length > 17
                    ? blog.title.substring(0, 18) + "..."
                    : blog.title}
                </h2>
                <div className="date">{blog.date}</div>
                <img src={blog.img} alt={blog.title} />
                <div className="body">{blog.body.substring(0, 80) + "..."}</div>
                <button onClick={() => popUpBlog(blog.id)}>Open</button>
              </div>
            );
          })}
        </div>
        {popUp ? <BlogPopUp popUpData={popUpData} setPopUp={setPopUp} /> : null}
      </Container>
    </div>
  );
};

export default BlogSection;
