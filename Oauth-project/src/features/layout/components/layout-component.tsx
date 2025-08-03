import { lazy, useEffect, useState } from "react";
import useUserProfile from "../hooks/useUserprofile";

const Navbar = lazy(()=> import('./navbar'));
const User_info = lazy(()=> import('./user-info'));

const LayoutComponent = ()=>{
const [user_data, set_user_data] = useState<any>({});
const {get_user_profile, error} = useUserProfile();
const [login_user, set_login_user] = useState(false);

useEffect(()=>{
call_user_detail();
},[]);

const call_user_detail=async()=>{
const data = await get_user_profile();
console.log('data----->',data);
set_user_data(data);
}

return(
   <div>
    <nav>
    <Navbar />
    </nav>

    <section>
        <User_info />
    </section>
   </div>
)
}
export default LayoutComponent;