import { useState } from "react";
import userprofie_service from "../services/layout-service";

const useUserProfile = ()=> {
const [loading,setLoading] = useState<boolean>(false);
const [error, setError] = useState<any>(null);

const userprofile = async ()=>{
    setLoading(true);
    try{
     const data = await userprofie_service();
     return data;
    }
    catch(err){
     setError(err);
     return null;
    }
}

return {userprofile, loading, error};
}
export default useUserProfile;