
const User_info = ({user_details} : any)=>{
    console.log('user info----->',user_details)
return(
    <div className="mt-16 flex flex-col justify-center items-center">
        <h3>User Details</h3>
       <div className="w-[370px] ">
        <ul>
        {
            user_details.map((user: any,index : number)=>(
                <li key={index} className="mb-3 border-b-2 p-3">
                    <div className="flex justify-between ">
                      <span>{user.label}</span>
                      <span>{user.value}</span>
                    </div>
                </li>
            ))
        }
        </ul>
       </div>
    </div>
)
}
export default User_info;