import { use } from "react";
import { Authcontext } from "../context/authprovider";
const UseAuthhook = () => {
  const authinFo =use (Authcontext)
  return authinFo
};
export default UseAuthhook;