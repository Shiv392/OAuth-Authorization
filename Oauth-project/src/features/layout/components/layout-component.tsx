import { lazy, useEffect, useState } from "react";
import useUserProfile from "../hooks/useUserprofile";

const Navbar = lazy(()=> import('./navbar'));
const User_info = lazy(()=> import('./user-info'));

const LayoutComponent = ()=>{
const [user_data, set_user_data] = useState<any>({});
const {get_user_profile, err} = useUserProfile();
const [logged_in, set_login] = useState(false);

useEffect(()=>{
call_user_detail();
},[]);

const call_user_detail=async()=>{
const data = await get_user_profile();
console.log('data----->',data);
if(data.success){
    set_login(true);
}
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