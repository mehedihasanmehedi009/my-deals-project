import React from 'react';
import Allcard from '../../card/Allcard';
import { useLoaderData } from 'react-router';
 
const Allproducts = () => {
    const  productspromise =useLoaderData()
    return (
      <div className="pt-20 px-6">
  <h2 className="md:text-5xl text-2xl font-bold text-center mb-8 text-gray-800">
    All Products
  </h2>

  <div className=" container w-8/12 mx-auto grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-10 p-4">
    {productspromise.map(product=>
          <Allcard key={product._id} product={product}/>
    )
   
     }
    
  </div>
</div>
    );
};

export default Allproducts;