import api from '../../../api/axios';

const signup_service = async(apibody : {name : string, email : string, password : string})=>{
const signup_res = await api.post('/signup',apibody);
return signup_res.data;
}
export default signup_service;