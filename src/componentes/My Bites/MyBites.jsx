import React, { use, useEffect, useState } from 'react';
import { Authcontext } from '../../context/authprovider';
import Swal from 'sweetalert2';
import useAxiusSecure from '../../Hoouk/useAxiusSecur';

const MyBites = () => {
    const {user} = use(Authcontext)
    const [bits,setBituser]=useState([])
     const secure = useAxiusSecure()
     
            useEffect(()=>{
              secure.get(`/bits?email=${user.email}`)
              .then(data=>{
                setBituser(data.data)
              })
            },[user,secure])
             const hendel =(_id) =>{           
Swal.fire({
  title: "Are you sure?",
  text: "You won't be able to revert this!",
  icon: "warning",
  showCancelButton: true,
  confirmButtonColor: "#3085d6",
  cancelButtonColor: "#d33",
  confirmButtonText: "Yes, delete it!"
}).then((result) => {
  if (result.isConfirmed) {
       fetch (`http://localhost:3000/bits/${_id}`,{
     method:"DELETE"
       })
       .then(res=>res.json())
       .then(data =>
       {
        console.log(data)
     if (data.deletedCount) {
        Swal.fire({
      title: "Deleted!",
      text: "Your file has been deleted.",
      icon: "success"
    });
   const remov = bits.filter(b => b._id !== _id);
   setBituser(remov);
}
       }
       )



    
  }
});
             }
    return (
        <div className='mt-19'>
             this is bits  {bits.length}
              <div className=' text-center'>
       
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
        <th>Status</th>
        <th>
            Actions
        </th>
      </tr>
    </thead>
    <tbody>
      {/* row 1 */}
 {
    bits.map((p,index) =><tr>
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
        <td>
           {p.status=== 'pending' ?<div className="badge badge-warning">{p.status}</div>:<div className="badge badge-success">{p.status}</div>
                     
           }
        </td>
        <th>
          <button onClick={()=>hendel(p._id)} className="btn  btn-outline btn-xs">Remove</button>
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

export default MyBites;