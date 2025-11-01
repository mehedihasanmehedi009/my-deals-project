 import React, { use } from 'react';
import Products from './Products';
import ImgL from "../assets/bg-hero-left.png";
import ImgR from "../assets/bg-hero-right.png";

const LatestProduct = ({ userPromis }) => {
  const latestp = use(userPromis);
  console.log(latestp);

  return (
    <div className=" ">
      <div className="flex flex-col md:flex-row bg-[linear-gradient(90deg,#FFE6FD,#E0F8F5)] justify-between items-center text-center px-6 md:px-10 py-10">
  {/* Left Image */}
  <div className="hidden md:block mb-6 md:mb-0 -ml-8">
    <img src={ImgL} alt="" className="w-40 md:w-64 mx-auto" />
  </div>

  {/* Center Text & Buttons */}
  <div className="flex-1 text-center space-y-6">
    <h1 className="text-3xl md:text-6xl font-bold leading-tight text-gray-800">
      Deal your <span className="text-pink-500">Products</span> <br /> in a <span className="text-teal-500">Smart</span> way!
    </h1>

    <p className="text-gray-700 max-w-lg mx-auto px-4">
      SmartDeals helps you sell, resell, and shop from trusted local sellers — all in one place!
    </p>

    {/* Subscribe box */}
    <div className="join w-full max-w-sm mx-auto">
      <input
        type="text"
        placeholder="username@site.com"
        className="input input-bordered join-item w-full"
      />
      <button className="btn btn-primary join-item">Subscribe</button>
    </div>

    {/* Action Buttons */}
    <div className="flex flex-col sm:flex-row gap-4 justify-center mt-6">
      <button className="btn btn-outline btn-primary px-6">Watch All Products</button>
      <button className="btn btn-primary px-6">Post a Product</button>
    </div>
  </div>

  {/* Right Image */}
  <div className="hidden md:block mt-6 md:mt-0 -mr-8">
    <img src={ImgR} alt="" className="w-40 md:w-64 mx-auto" />
  </div>
</div>

<div className="pt-20 px-6">
  <h2 className="text-2xl font-bold text-center mb-8 text-gray-800">
    Latest Products
  </h2>

  <div className=" container m-11/12 mx-auto grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
    {latestp.map((product) => (
      <Products key={product._id} product={product} />
    ))}
  </div>
</div>

      
    </div>
  );
};

export default LatestProduct;
