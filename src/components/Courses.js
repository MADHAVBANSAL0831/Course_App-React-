import React, { useState } from "react";
import Card from "./Card";
import "./all.css";

const Courses = (props) => {

    let courses = props.courses;
    let category = props.category;
    const [likedCourses, setLikedCourses] = useState([]);

    function getCourses () {
         
        if(category === "All")
        {
            let allCourses = [];
            Object.values(courses).forEach( (courseCategory) => {
                courseCategory.forEach((course) => {
                    allCourses.push(course);
                })
            })

            return allCourses;
        }
        else
        {
            return courses[category];
        }
    }

    return (
        <div className="cards">
        {!courses ?(
            <div>
              <p>NO DATA FOUND</p>
            </div>
        ) : 
        (
            getCourses().map( (course) => {
                return <Card key={course.id} 
                course={course}
                likedCourses={likedCourses}
                setLikedCourses={setLikedCourses}
                />
            })
        )}
        </div>
    )
}

export default Courses;