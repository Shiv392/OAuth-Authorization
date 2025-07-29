import api from '../../../api/axios';

const userprofie_service = async()=>{
    const userprofile_res = await api.get('/userprofile');
    return userprofile_res.data;

}

export default userprofie_service;