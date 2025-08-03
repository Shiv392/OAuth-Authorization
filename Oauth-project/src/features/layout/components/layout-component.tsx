import { lazy, useEffect, useState } from "react";
import useUserProfile from "../hooks/useUserprofile";

const Navbar = lazy(()=> import('./navbar'));
const User_info = lazy(()=> import('./user-info'));

type user_detail = {
    label : string
    value : string
}

type get_userdetail_model = {
    success : boolean
    message : string
    user : {
        name : string
        email : string
        profile : string
    }
    details : Array<user_detail>
}

const LayoutComponent = ()=>{
const [user_data, set_user_data] = useState<any>({});
const {get_user_profile, err} = useUserProfile();
const [user_details, set_user_details] = useState<any>([]);

useEffect(()=>{
call_user_detail();
},[]);

const call_user_detail=async()=>{
const data : get_userdetail_model = await get_user_profile();
console.log('data----->',data);
if(data.success){
    set_user_data(data.user);
    set_user_details(data.details);
}
}

return(
   <div>
    <nav>
    <Navbar  user_info={user_data} />
    </nav>

    <section>
        {
            !user_data ? <h1>Login Required</h1> : <User_info user_details={user_details} />
        }
        
    </section>
   </div>
)
}
export default LayoutComponent;