import { useState } from "react";
import signup_service from "../services/signup-service";


const useSignup = ()=> {
const [loading, setLoading] = useState<boolean>(false);
const [error, setError] = useState<any>(null);

const signup = async(apibody : {name : string, email : string, password : string})=>{
setLoading(true);
try{
const data = await signup_service(apibody);
return data;
}
catch(err){
console.log('signup hook error ----->',err);
setError(err);
return null;
}
}

return {signup, loading, error};
}

export default useSignup;