
import api from '../../../api/axios';
import controllers from '../../../controller/controller';

const login_service = async(apibody : {email : string, password : string})=>{
 const login_res = await api.post(controllers.login, apibody);
 return login_res.data;
}

export default login_service