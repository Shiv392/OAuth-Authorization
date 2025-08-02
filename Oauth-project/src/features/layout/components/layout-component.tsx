import { useEffect, useState } from "react";
import useUserProfile from "../hooks/useUserprofile";
import Navbar from "./navbar";
import User_info from "./user-info";

const LayoutComponent = ()=>{
const [user_data, set_user_data] = useState<any>({});
const {get_user_profile, error} = useUserProfile();
const [login_user, set_login_user] = useState(false);

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