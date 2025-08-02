
type user_model={
label : string,
value : string
}

type user_details_model = Array<user_model>;
const user_info : user_details_model = [
    {
        label : 'Name',
        value : 'Shiv Soni'
    },
    {
        label : 'Email',
        value : 'sonishiv309@gmail.com'
    }
]
const User_info = ()=>{
return(
    <div className="mt-16 flex flex-col justify-center items-center">
        <h3>User Details</h3>
       <div className="w-[370px] ">
        <ul>
        {
            user_info.map((user,index)=>(
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