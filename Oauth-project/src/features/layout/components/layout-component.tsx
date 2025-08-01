import { useEffect, useState } from "react";
import useUserProfile from "../hooks/useUserprofile";

const LayoutComponent = ()=>{
const [user_data, set_user_data] = useState<any>({});
const {get_user_profile, error} = useUserProfile();

useEffect(()=>{
console.log(get_user_profile, error);
call_user_detail();
},[]);

const call_user_detail=async()=>{
const data = await get_user_profile();
console.log('data----->',data);
set_user_data(data);
}

return(
    <h1>Layout Component</h1>
)
}
export default LayoutComponent;