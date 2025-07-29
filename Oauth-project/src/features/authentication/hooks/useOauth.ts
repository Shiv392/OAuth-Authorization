import oauth_geturl_service from "../services/oauth-service";

const useOauthgeturl = ()=>{
const get_oauth_url = async()=>{
const res = await oauth_geturl_service();
return res;
}

return {get_oauth_url}
}

export default useOauthgeturl;