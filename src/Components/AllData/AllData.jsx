import React, { useEffect, useState } from 'react';
import Modal from '../Modal/Modal';
import SingleData from '../SingleData/SingleData';

const AllData = () => {
   const [data,setData]=useState([]);
   const [limit,setLimit]=useState(false);
   const [apiId, setId] = useState(null);
   const [modalData,setModalData]=useState({})


   const showAllButton=()=>{
    setLimit(true);
   }

   const sortByDate=()=>{
        const sortData=data.sort((a,b)=>{
            return new Date(b.published_in)-new Date(a.published_in);
        })
      setData([...data,sortData])
   }

   useEffect(()=>{
        fetch("https://openapi.programming-hero.com/api/ai/tools")
        .then(response => response.json())
        .then( data => setData(data.data.tools))
   },[])


   //Modal work here
  
    useEffect(()=>{
        fetch(`https://openapi.programming-hero.com/api/ai/tool/${apiId}`)
        .then(response => response.json())
        .then( data =>setModalData(data.data));
    },[apiId])
    return (
        <div>
            <div className='text-center'>
                <button onClick={sortByDate} className='btn btn-primary'>Sort By Date</button>
            </div>
        <div className='grid md:grid-cols-2 lg:grid-cols-3 gap-5 mt-6 mb-6 mx-5'>
            {
                data.slice(0,limit? 12: 6).map((singleData,index)=><SingleData data={singleData} cardid={setId} key={index}></SingleData>)
            }
        </div>
        <Modal modalData={modalData}></Modal>
        {       
                 !limit && (<div className='text-center'>
                 <button onClick={showAllButton} className="btn btn-secondary">See More</button>
                 </div>)   
        }
           
        </div>
    );
};

export default AllData;