import { useState } from "react";
import signup_service from "../services/signup-service";
import type { AxiosError } from "axios";


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
const axios_error = err as AxiosError<any>;
const message = axios_error.response?.data?.message;
setError(message);
return null;
}
}

return {signup, loading, error};
}

export default useSignup;