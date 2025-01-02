import axios from "axios";
async function postApi(url, body, app) {
  const sessionToken = await app.idToken();
  const config = {
    headers: { Authorization: `Bearer ${sessionToken}` },
  };
 const response = await axios.post(url, body, config)

  
  return response;
}
export default postApi;