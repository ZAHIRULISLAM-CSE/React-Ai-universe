import React from 'react';
import AllData from './Components/AllData/AllData';

const App = () => {
  return (
    <div>
      <h1 className='text-3xl text-center mt-6 mb-5'>AI UNIVERSE HUB</h1>
      <Button>Sort By Date</Button>
      <AllData></AllData>
    </div>
  );
};

function Button({children}){
  return (
    <div className='text-center'>
     <button className="btn btn-secondary">{children}</button>
    </div>
  )
}

export default App;