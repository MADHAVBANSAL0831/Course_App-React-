import React, { useEffect, useState } from "react";
import { apiUrl, filterData} from "./data";
import Navbar from "./components/Navbar";
import Filter from "./components/Filter";
import Courses from "./components/Courses";
import Spinner from "./components/Spinner";
import {toast} from "react-toastify";
import "./components/all.css";

const App = () => {
  
  const [courses, setCourses] = useState(null);
  const [loading, setLoading] = useState(true);
  const [category, setCategory] = useState(filterData[0].title);

  async function fetchData() {
    setLoading(true);
    try{
      let res = await fetch(apiUrl);
      let output =await res.json();
      
      setCourses(output.data);
    }
    catch(error)
    {
       toast.error("Network is Busy");
    }

    setLoading(false);
  }

  useEffect( () => {  
    fetchData();
  }, []);

  return (
    <div className="min-h-screen flex flex-col">

      <div>
        <Navbar/>
      </div>

      <div>
        <Filter filterData={filterData}
          category={category}
          setCategory={setCategory}
        />
      </div>

      <div>
        {
          loading ? (<Spinner/>) : (<Courses courses={courses}
            category={category}
          />) 
         }
      </div>

    </div>
  );
};

export default App;
