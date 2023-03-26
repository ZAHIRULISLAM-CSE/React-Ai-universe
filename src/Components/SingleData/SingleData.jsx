import React, { useEffect } from "react";
import { useState } from "react";

const SingleData = (props) => {
    

  const { image, features, published_in,name,id} = props.data;
  const {cardid}=props;
  return (
    <div className="">
      <div className="card w-full h-full bg-base-100 shadow-xl">
          <img
            src={image}
          />
        <div className="card-body">
          <h2 className="card-title">Features</h2>
            {
                features.map((feature,index)=><p key={index}> {index+1}. {feature}</p>
                )
            }
            <hr />
            <span className="text-2xl">
            {name}</span>
            <div className="flex justify-between">
                <div>
                    <i className="fa-solid fa-calendar-days"></i>
                    <span className="ml-3">
                    {published_in}
                    </span>
                </div>
                <div>
                <label onClick={()=>cardid(id)} htmlFor="my-modal">
                    <i  className="fa-solid fa-arrow-right"></i>
                </label>   
                </div>
            </div>
          </div>
        </div>
      </div>
  );
};

export default SingleData;
