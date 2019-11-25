import Axios from 'axios';
 
const RESOURCE_NAME = '/api';
//const env = 'http://shine15-001-site1.btempurl.com';
const env = 'https://localhost:44358/';
  
export default {
  getAll() {
    return Axios.get(env + RESOURCE_NAME + '/Calculations/LoadTemplates',
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
  loadTemplatesData(template, isRightTemplate)
  {
    const auth = {
      'Content-Type': 'application/json;',
          'Access-Control-Allow-Origin': '*',
          'Access-Control-Allow-Methods': 'GET, POST',
          'Authorization': 'Bearer ' + $cookies.get('token')
}

    return  axios.post(env + '/api/Calculations/LoadTmp', {
        userId: $cookies.get('userId'),
        lng: template.lng,
        shortName: template.shortName,
        longName:template.longName,
        stage :template.stage,
        topic : template.topic,
        isRightTemplate: isRightTemplate
    }, auth)
    
  },
  get(id) {
    return Axios.get($,{RESOURCE_NAME}/$,{id});
     }, 
    create(data) { return Axios.post(RESOURCE_NAME, data); }, 
    update(id, data) { return Axios.put($,{RESOURCE_NAME}/$,{id}, data); }, 
    delete(id) { return Axios.delete($,{RESOURCE_NAME}/$,{id}); }
}