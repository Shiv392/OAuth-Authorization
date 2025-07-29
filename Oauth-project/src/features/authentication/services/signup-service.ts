import api from '../../../api/axios';
import controllers from '../../../controller/controller';

const signup_service = async(apibody : {name : string, email : string, password : string})=>{
const signup_res = await api.post(controllers.signup,apibody);
return signup_res.data;
}
export default signup_service;