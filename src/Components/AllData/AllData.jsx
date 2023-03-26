import React, { useEffect, useState } from 'react';
import SingleData from '../SingleData/SingleData';

const AllData = () => {
   const [data,setData]=useState([])
   useEffect(()=>{
        fetch("https://openapi.programming-hero.com/api/ai/tools")
        .then(response => response.json())
        .then( data => setData(data.data.tools))
   },[])
   
    return (
        <div className='grid md:grid-cols-2 lg:grid-cols-3 gap-5 mt-6 mx-5'>
            {
                data.map((singleData,index)=><SingleData data={singleData} key={index}></SingleData>)
            }
        </div>
    );
};

export default AllData;