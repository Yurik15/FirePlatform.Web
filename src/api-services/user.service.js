import Axios from 'axios';
 
const RESOURCE_NAME = '/api/account';
const env = 'http://shine15-001-site1.btempurl.com';
//const env = 'http://localhost:59548';
  
export default {
    get(id) {return Axios.get($,{RESOURCE_NAME}/$,{id});}, 
    getAll() {
        return Axios.get(env + RESOURCE_NAME + '/Users',
        {
        headers: {
          'Accept': 'application/json',
          'Content-Type': 'application/json; charset=utf-8',
            'Access-Control-Allow-Origin': '*',
            'Access-Control-Allow-Methods': 'GET, POST',
            'Authorization': 'Bearer ' + $cookies.get('token')
        }
        });
    }, 
    updateAll(users) {
        const auth = {
                'Content-Type': 'application/json;',
                'Access-Control-Allow-Origin': '*',
                'Access-Control-Allow-Methods': 'GET, POST',
                'Authorization': 'Bearer ' + $cookies.get('token')
        }
        return Axios.post(env + RESOURCE_NAME + '/Users/Update',
        {
          users
        }, auth);
    }, 
    create(data) { return Axios.post(RESOURCE_NAME, data); }, 
    update(id, data) { return Axios.put($,{RESOURCE_NAME}/$,{id}, data); }, 
    delete(id) { return Axios.delete($,{RESOURCE_NAME}/$,{id}); }
}