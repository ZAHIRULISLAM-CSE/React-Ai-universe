import React, { useEffect, useState } from 'react';
import Modal from '../Modal/Modal';
import SingleData from '../SingleData/SingleData';

const AllData = () => {
   const [data,setData]=useState([]);
   const [limit,setLimit]=useState(false);
   const [apiId, setId] = useState(null);

   useEffect(()=>{
        fetch("https://openapi.programming-hero.com/api/ai/tools")
        .then(response => response.json())
        .then( data => setData(data.data.tools))
   },[])

   const showAllButton=()=>{
    setLimit(true);
   }

   //Modal work here
   const [modalData,setModalData]=useState({})
    useEffect(()=>{
        fetch(`https://openapi.programming-hero.com/api/ai/tool/${apiId}`)
        .then(response => response.json())
        .then( data =>setModalData(data.data));
    },[apiId])
    console.log(modalData);
   
    return (
        <div>
        <div className='grid md:grid-cols-2 lg:grid-cols-3 gap-5 mt-6 mb-6 mx-5'>
            {
                data.slice(0,limit? 12: 6).map((singleData,index)=><SingleData data={singleData} cardid={setId} key={index}></SingleData>)
            }
        </div>
        <Modal></Modal>
        {       
                 !limit && (<div className='text-center'>
                 <button onClick={showAllButton} className="btn btn-secondary">See More</button>
                 </div>)   
        }
           
        </div>
    );
};

export default AllData;