import { useState } from "react"
import login_service from "../services/login-service";
import type { AxiosError } from "axios";


const useLogin = ()=>{
    const [loading, setLoading] = useState<boolean>(false);
    const [error, setError] = useState<any>(null);

    const login = async (apibody : {email : string, password : string}) =>{
        setLoading(true);
        setError(null);

        try{
         const data = await login_service(apibody);
         console.log('login hook api data----->',data);
         return data;
        }
        catch(err){
            const axios_error = err as AxiosError<any>;
            const message : string = axios_error.response?.data?.message || '';
            setError(message);
            return null;
        }
    }

    return {login, loading, error};
}

export default useLogin;