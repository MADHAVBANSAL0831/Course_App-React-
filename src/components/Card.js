import React from "react";
import {FcLike, FcLikePlaceholder} from "react-icons/fc";
import { toast } from "react-toastify";
import "./all.css";

const Card = (props) => {
  let course = props.course;
  let likedCourses = props.likedCourses;
  let setLikedCourses = props.setLikedCourses;

  function clickHandler()
  {
    if(likedCourses.includes(course.id))
    {
      setLikedCourses( (prev) => prev.filter((cid) => (cid !== course.id)));
      toast.warning("Like Removed");
    }
    else
    {
      if(likedCourses.length === 0)
      {
        setLikedCourses([course.id]);
      }
      else
      {
        setLikedCourses((prev) => [...prev, course.id]);
      }

      toast.success("Liked Succesfully");
    }
  }
    return (
        <div className="card">
          <div>
          <img src={course.image.url}></img>

             <div>
               <button onClick={clickHandler} className="like-btn">
                 {
                  !likedCourses.includes(course.id) ? (<FcLikePlaceholder fontSize="1.75rem" />) 
                  : (<FcLike fontSize="1.75rem" />)
                 }
               </button>
             </div>
             
          </div>

          <div>
            <p className="title">{course.title}</p>
            <p className="desc">{
              course.description.length>100 ? (course.description.substr(0, 100)+"...")
              : (course.description)
              }</p>
          </div>

        </div>
    )
}

export default Card;