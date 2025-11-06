 
 import axios from 'axios';
import UseAuthhook from './UseAuthhook';
import { useEffect } from 'react';
import { useNavigate } from 'react-router';
 
  const Instanse =  axios.create({
    baseURL:"http://localhost:3000"
  })
 const useAxiusSecure = () => {
  const {user,signOutUser} = UseAuthhook()
  // const navigate = useNavigate()
  useEffect(()=>{
  const  recap = Instanse.interceptors.request.use(config=>{
    config.headers.authorization = `Bearer ${user.accessToken}`
    return config
  })

  const recaps = Instanse .interceptors.response.use(res=>{
    return res
  },err=>{
    // console.log(err)
    const status = err.status
    if(status === 401|| status === 403){
       signOutUser()
       .then(()=>{
       
       })
    }
  })
  
 return ()=>{
  Instanse.interceptors.request.eject(recap)
  Instanse.interceptors.request.eject(recaps)
 }
  },[user])

    return Instanse
 };
 
 export default useAxiusSecure;