 

const Products = ({product}) => {
    
  
  return (
    <div className="   bg-white shadow-md rounded-xl border border-gray-200 hover:shadow-lg transition-all duration-300">
      {/* Image */}
      <div className="w-full h-[227px] bg-gray-100 rounded-t-xl flex items-center justify-center overflow-hidden">
        <img
          src={product.image}
          alt={product.title}
          className="object-cover w-full h-full"
        />
      </div>

      {/* Content */}
      <div className="p-4 text-center">
        <h2 className="text-sm font-semibold text-gray-800">
          {product.title} - [ {product.usage} ]
        </h2>

        <p className="text-purple-600 font-semibold mt-1">
          ৳ {product.price_min.toLocaleString()} - {product.price_max.toLocaleString()}
        </p>

        <button className="mt-3 w-full py-2 text-sm font-medium border border-purple-400 text-purple-500 rounded-lg hover:bg-purple-500 hover:text-white transition-all">
          View Details
        </button>
      </div>
    </div>
 

    );
};

export default Products;