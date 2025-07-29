import controllers from "../../../controller/controller";
import api from "../../../api/axios";

const oauth_geturl_service  = async()=>{
const auth_res = await api.get(controllers.oauth_geturl);
return auth_res.data;
}

export default oauth_geturl_service;