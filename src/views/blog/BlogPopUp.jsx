import { useContext } from "react";
import ScrollContext from "../../context/ScrollContext";


const BlogPopUp = ({ popUpData, setPopUp, setOverflow }) => {

  const {setScroll}= useContext(ScrollContext)

  const closeBlog =()=>{
    setPopUp(false)
    setScroll("auto")
  }

  return (

      <div className="blogModal" >
        <div className="blogModalContent">
            <div className="titleContainer">
              <div className="title">{popUpData[0].title}</div>
              <button onClick={closeBlog}>&#215;</button>
            </div>
            <div className="date">{popUpData[0].date}</div>
            <img src={popUpData[0].img} alt={popUpData.title} />
            <div className="body">{popUpData[0].body}</div>
            <div className="feedback">{popUpData[0].feedback}</div>
        </div>
      </div>

  );
};

export default BlogPopUp;
