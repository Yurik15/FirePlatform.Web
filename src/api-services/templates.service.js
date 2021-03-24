import Axios from 'axios';
 
const RESOURCE_NAME = '/api';
const env = 'http://shine15-001-site1.btempurl.com';
//const env = 'http://localhost:59548';
  
export default {
  getAll(language) {
    
    if(!language){
      language = 'pol';
    }

    const auth = {
      headers: {
      'Content-Type': 'application/json;',
          'Access-Control-Allow-Origin': '*',
          'Access-Control-Allow-Methods': 'GET, POST',
          'Authorization': 'Bearer ' + $cookies.get('token')
      }
    }

    return Axios.get(env + RESOURCE_NAME + '/Admin/LoadTemplates?language=' + language + '&userId=' + $cookies.get('userId'),
      {
      headers: {
        'Accept': 'application/json',
        'Content-Type': 'application/json; charset=utf-8',
          'Access-Control-Allow-Origin': '*',
          'Access-Control-Allow-Methods': 'GET, POST',
          'Authorization': 'Bearer ' + $cookies.get('token')
      }
      }, auth);
  },
  clearTemplateDataPerUser(template, templateID)
  {
    const auth = {
      'Content-Type': 'application/json;',
          'Access-Control-Allow-Origin': '*',
          'Access-Control-Allow-Methods': 'GET, POST',
          'Authorization': 'Bearer ' + $cookies.get('token')
 }

      axios.post(env + '/api/Calculations/ClearTemplates', {
        userId: $cookies.get('userId'),
        lng: template.lng,
        shortName: template.shortName,
        longName:template.longName,
        stage :template.stage,
        topic : template.topic,
        templateGuiID: templateID
    }, auth)
  },
  loadTemplatesData(template, templateID, languageValue)
  {
    const auth = {
      headers: {
      'Content-Type': 'application/json;',
          'Access-Control-Allow-Origin': '*',
          'Access-Control-Allow-Methods': 'GET, POST',
          'Authorization': 'Bearer ' + $cookies.get('token')
      }
}
    return  axios.post(env + '/api/Calculations/LoadTmp', {
        userId: $cookies.get('userId'),
        lng: languageValue,
        shortName: template.shortName,
        longName:template.longName,
        stage : template.stage,
        topic : template.topic,
        savedName: template.savedName,
        link: template.link,
        templateGuiID: templateID
    }, auth)
    
  },
  get(id) {
    return Axios.get($,{RESOURCE_NAME}/$,{id});
     }, 
    create(data) { return Axios.post(RESOURCE_NAME, data); }, 
    update(id, data) { return Axios.put($,{RESOURCE_NAME}/$,{id}, data); }, 
    delete(id) { return Axios.delete($,{RESOURCE_NAME}/$,{id}); }
}