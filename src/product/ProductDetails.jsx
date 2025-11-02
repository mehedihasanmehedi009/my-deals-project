 import { use,  useEffect,  useRef, useState } from 'react';
import {  useLoaderData } from 'react-router';
import { Authcontext } from '../context/authprovider';
 
import Swal from 'sweetalert2';

const ProductDetails = () => {
    const {_id: productId} = useLoaderData();
    const [userbit,setBituser]=useState([])
    const bitModal = useRef(null);
    const {user} = use(Authcontext)
    
     useEffect(()=>{
             fetch(`http://localhost:3000/product/bits/${productId}`)
             .then(res=>res.json())
             .then(data=>{
                console.log(data)
                setBituser(data)
             })
     },[productId])


    const handleOpenModal = () => {
        bitModal.current.showModal();
    };

    const handleSubmit = (e) => {
        e.preventDefault();
       const  name = e.target.name.value
       const  email = e.target.email.value
       const  bite = e.target.bite.value
    console.log( productId,name,email,bite )
    const newBid ={
        product :productId,
        buyer_name:name,
        buyer_email:email,
        buyer_imag:user?.photoURL,
        bite_price:bite,
        status:"pending"
    }
    fetch("http://localhost:3000/bits",{
 
 method: "POST",
  headers: {
    "Content-Type": "application/json",
  },
  body: JSON.stringify(newBid),

    })    .then(res=>res.json())
    .then(data=>
        
       {
         if(data.insertedId)
    bitModal.current.close()
         Swal.fire({
  position: "center",
  icon: "success",
  title: "Your Bids has been saved",
  showConfirmButton: false,
  timer: 1500
});
        newBid._id=data.insertedId
        const newBids = [...userbit,newBid]
        newBids.sort ((a,b)=>b.bite_price-a.bite_price)
        setBituser(newBids)
       }
       
    )

       
    };

    

    return (
        <div>
        <div className='mt-17 flex flex-col items-center gap-4'>
            {/* Buy Button */}
            <button
                onClick={handleOpenModal}
                className="w-full max-w-xs bg-indigo-600 text-white py-2 px-4 rounded-lg font-semibold hover:bg-indigo-700 transition duration-300 shadow-md hover:shadow-lg"
            >
                I Want Buy This Product
            </button>

            {/* Modal */}
            <dialog ref={bitModal} className="modal modal-middle">
                <div className="modal-box">
                    <h3 className="font-bold text-lg">Give the Best Offer</h3>
                    <p className="py-2 text-sm text-gray-600">
                        Offer something the seller cannot refuse
                    </p>

                    <form onSubmit={handleSubmit} className="flex flex-col gap-3">
                        <fieldset className="flex flex-col gap-2">
                            <label className="label">Name</label>
                            <input
                                type="text"
                                name='name'
                                className="input input-bordered w-full"
                              
                                defaultValue={user?.displayName}
                            />

                            <label className="label">Email</label>
                            <input
                                type="email"
                                name='email'
                                className="input input-bordered w-full"
                           
                                defaultValue={user?.email}
                            />

                            <label className="label">Your Bid</label>
                            <input
                                type="text"
                                name='bite'
                                className="input input-bordered w-full"
                                placeholder="Enter your bid"
                                required
                            />

                            <button type="submit" className="btn btn-neutral mt-2">
                                Submit Offer
                            </button>
                        </fieldset>
                    </form>

                    <div className="modal-action">
                        <button
                            className="btn btn-outline"
                            onClick={() => bitModal.current.close()}
                        >
                            Close
                        </button>
                    </div>
                </div>
            </dialog>
        </div>
        <div className=' text-center'>
           <h1>Your bits   {userbit.length}</h1>
           <div className="overflow-x-auto">
  <table className="table">
    {/* head */}
    <thead>
      <tr>
        <th>
           SL NO.
        </th>
        <th> Buyer Name</th>
        <th>Buyer Email</th>
        <th>Bits Prices</th>
        <th>
            Actions
        </th>
      </tr>
    </thead>
    <tbody>
      {/* row 1 */}
 {
    userbit.map((p,index) =><tr>
        <th>
        {index+1}
        </th>
        <td>
          <div className="flex items-center gap-3">
            <div className="avatar">
              <div className="mask mask-squircle h-12 w-12">
                <img
                  src="https://img.daisyui.com/images/profile/demo/2@94.webp"
                  alt="Avatar Tailwind CSS Component" />
              </div>
            </div>
            <div>
              <div className="font-bold">{p.buyer_name}</div>
              <div className="text-sm opacity-50">United States</div>
            </div>
          </div>
        </td>
        <td>
       {p.buyer_email}
        </td>
        <td>{p.bite_price}</td>
        <th>
          <button className="btn btn-ghost btn-xs"></button>
        </th>
      </tr>

    )
 }
      {/* row 2 */}
       
 
      
    </tbody>
    {/* foot */}
 
  </table>
</div>
        </div>
        </div>
    );
};

export default ProductDetails;
