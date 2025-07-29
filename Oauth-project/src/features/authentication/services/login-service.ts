
import api from '../../../api/axios';

const login_service = async(apibody : {email : string, password : string})=>{
 const login_res = await api.post('/login', apibody);
 return login_res.data;
}

export default login_service