import React, { useState } from "react";
import "./all.css";

const Filter = (props) =>{
  let filterData = props.filterData;
  let category = props.category;
  let setCategory = props.setCategory;

  function filterHandler(title){
    setCategory(title);
  }

    return (
        <div className="filters">
          {
            filterData.map( (data) => {
            return (
              <button 
                className={`
                  text-lg px-2 py-2 rounded-md font-medium text-white bg-black hover:bg-opacity-50 border-2 transition-all duration-200
                  ${category === data.title ?
                   "bg-opacity-60 border-white" :
                   "bg-opacity-40 border-transparent" }
                `}
                key={data.id}
                onClick={() => filterHandler(data.title)}
              >
                {data.title}
              </button>)
          })}
        </div>
    )
}

export default Filter;