const get_status_code = (data) =>{
  if (data.badrequest) return 400;
  if (data.unauthorized) return 401;
  if (data.not_found) return 404;

  return 502; // fallback for unknown errors
}

module.exports={get_status_code}