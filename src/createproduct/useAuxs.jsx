import axios from 'axios';
 const axiosInstanse = axios.create({
    baseURL:"http://localhost:3000"
 })
const UseAuxs = () => {
     return axiosInstanse
}
export default UseAuxs;