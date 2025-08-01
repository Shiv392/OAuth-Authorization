import api from '../../../api/axios';
import controllers from '../../../controller/controller';

const user_detail_service = async()=>{
const res = await api.get(controllers.userprofile);
return res.data;
}

export default user_detail_service;