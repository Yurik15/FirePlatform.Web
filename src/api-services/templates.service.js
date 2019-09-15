import Axios from 'axios';
 
const RESOURCE_NAME = '/api';
const env = 'https://constant-blend-249308.appspot.com';
//const env = 'https://localhost:44358';
 
export default {
  getAll() {
    return Axios.get(env + RESOURCE_NAME + '/Calculations/LoadTemplates',
      {
      headers: {
          'Accept': 'application/json',
          'Content-Type': 'application/json',
          'Access-Control-Allow-Origin': '*',
          'Access-Control-Allow-Methods': 'GET, POST',
          'Authorization': 'Bearer ' + $cookies.get('token')
      }
      });
  },
  loadTemplatesData(numberTmpl, userId)
  {
    return Axios.get(env + RESOURCE_NAME + '/Calculations/LoadTmp?numberTmpl=' + numberTmpl + '&userId=' + userId,
    {
      headers: {
          'Accept': 'application/json',
          'Content-Type': 'application/json',
          'Access-Control-Allow-Origin': '*',
          'Access-Control-Allow-Methods': 'GET, POST',
          'Authorization': 'Bearer ' + $cookies.get('token')
      }
      });
  },
  get(id) {
    return Axios.get($,{RESOURCE_NAME}/$,{id});
     }, 
    create(data) { return Axios.post(RESOURCE_NAME, data); }, 
    update(id, data) { return Axios.put($,{RESOURCE_NAME}/$,{id}, data); }, 
    delete(id) { return Axios.delete($,{RESOURCE_NAME}/$,{id}); }
}