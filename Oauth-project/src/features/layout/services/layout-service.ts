import api from '../../../api/axios';
import controllers from '../../../controller/controller';

const userprofie_service = async()=>{
    const userprofile_res = await api.get(controllers.userprofile);
    return userprofile_res.data;

}

export default userprofie_service;