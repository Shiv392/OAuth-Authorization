import { useState } from "react"
import login_service from "../services/login-service";


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
            console.log('login error------>',err);
            setError(err);
            return null;
        }
    }

    return {login, loading, error};
}

export default useLogin;