 
import React from 'react';
import Swal from 'sweetalert2';
import UseAuthhook from '../Hoouk/UseAuthhook';
import useAxiusSecure from '../Hoouk/useAxiusSecur';
 
 

const CreatedProduct = () => {
const {user} = UseAuthhook()
 const  secure =useAxiusSecure() 
const handleSubmit=e=>{
  e.preventDefault();
const title = e.target.titel.value
const image = e.target.image.value
const price_min = e.target.price_min.value
const price_max = e.target.price_max.value

console.log(title,image,price_min,price_max)
const addproduct = {title,image,price_min,price_max ,
    email:user.email,
    seler_name:user.displayName
}



 secure.post(`product`,addproduct)
.then(data=>{
    console.log(data.data.insertedId
)
e.target.reset()
     Swal.fire({
  position: "center",
  icon: "success",
  title: "Your Bids has been saved",
  showConfirmButton: false,
  timer: 1500
});
})


// axios.post(`http://localhost:3000/product`,addproduct)
// .then(data=>{
//     console.log(data.data.insertedId
// )
// e.target.reset()
//      Swal.fire({
//   position: "center",
//   icon: "success",
//   title: "Your Bids has been saved",
//   showConfirmButton: false,
//   timer: 1500
// });
// })
    }
    return (
        <div className='mt-30'>
             <form onSubmit={handleSubmit} className="flex flex-col gap-4 p-4 sm:p-6 md:p-8 bg-white rounded-lg shadow-md max-w-md mx-auto">
  <fieldset className="flex flex-col gap-4">
    
    <div className="flex flex-col">
      <label className="label mb-1 font-semibold text-gray-700">Title</label>
      <input
        type="text"
        name="titel"
        className="input px-3 py-2 border rounded focus:outline-none focus:ring-2 focus:ring-blue-400"
        placeholder="Product Name"
        required
      />
    </div>

    <div className="flex flex-col">
      <label className="label mb-1 font-semibold text-gray-700">Image URL</label>
      <input
        type="text"
        name="image"
        className="input px-3 py-2 border rounded focus:outline-none focus:ring-2 focus:ring-blue-400"
        placeholder="Image URL"
        required
      />
    </div>

    <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
      <div className="flex flex-col">
        <label className="label mb-1 font-semibold text-gray-700">Min Price</label>
        <input
          type="number"
          name="price_min"
          className="input px-3 py-2 border rounded focus:outline-none focus:ring-2 focus:ring-blue-400"
          placeholder="Minimum Price"
          required
        />
      </div>

      <div className="flex flex-col">
        <label className="label mb-1 font-semibold text-gray-700">Max Price</label>
        <input
          type="number"
          name="price_max"
          className="input px-3 py-2 border rounded focus:outline-none focus:ring-2 focus:ring-blue-400"
          placeholder="Maximum Price"
          required
        />
      </div>
    </div>

    <button
      type="submit"
      className="btn btn-neutral mt-2 bg-blue-500 hover:bg-blue-600 text-white font-semibold py-2 rounded transition duration-200"
    >
      Add Product
    </button>
    
  </fieldset>
</form>

        </div>
    );
};

export default CreatedProduct;