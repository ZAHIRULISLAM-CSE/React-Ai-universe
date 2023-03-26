import React, { useEffect, useState } from 'react';
import SingleData from '../SingleData/SingleData';

const AllData = () => {
   const [data,setData]=useState([])
   const [limit,setLimit]=useState(false);
   useEffect(()=>{
        fetch("https://openapi.programming-hero.com/api/ai/tools")
        .then(response => response.json())
        .then( data => setData(data.data.tools))
   },[])

   const showAllButton=()=>{
    setLimit(true);
   }
   
    return (
        <div>
        <div className='grid md:grid-cols-2 lg:grid-cols-3 gap-5 mt-6 mb-6 mx-5'>
            {
                data.slice(0,limit? 12: 6).map((singleData,index)=><SingleData data={singleData} key={index}></SingleData>)
            }
        </div>
        <div className='text-center'>
        <button onClick={showAllButton} className="btn btn-secondary">See More</button>
        </div>
        </div>
    );
};

export default AllData;