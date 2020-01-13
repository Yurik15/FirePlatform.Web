<template>
<div>
    <div v-if="loader">
     <div class="text-info d-flex align-items-center justify-content-center mb-3 modal">
    <b-spinner style="width: 5rem; height: 5rem;" label="Loading..."></b-spinner>
  </div>
  </div>
  <div>
 <div class="showForMobile">
    <nav class="navbar fixed-top navbar-expand-lg navbar-dark bg-dark">
        <vue-progress-bar></vue-progress-bar>
    

                 <ul class="navbar-nav mr-auto" style="text-align: left; max-height: 400px; overflow: auto; " >

                <li class="nav-item dropdown menuDropDown">
                    <a class="nav-link navibarText" href="#" id="navbarDropdownMenuLink" role="button" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
           <img style="height: 25px;" src="../assets/scripts.png">
        </a>
                    <ul class="dropdown-menu" aria-labelledby="navbarDropdownMenuLink">
                        <li no-body v-for="(template, index) in templates" v-bind:value="template.shortName" :key="index">
                            <button class="dropdown-item " type="button" v-on:click="getTemplate(template, true)">{{template.shortName}}</button>
                        </li>
                    </ul>
                </li>
                
                </ul>
        

        <div  style="text-align: center" v-if="this.isRightTemplate === true">           
                   <span class="menuDefault" style="color: white; font-weight: 600px; font-size: 20px; font-style: italic;">{{selectedTemplateNameRight}}</span>
                   </div>
 <div  v-if="this.isRightTemplate === true">
                        </div>
                    <div style="text-align: right">

                                        <button v-if="this.collapsedAll === true" v-on:click="collapseExpandGroups()" type="button" class="btn">
         <img style="height: 25px; " src="../assets/expand.png">
</button>
        <button v-if="this.collapsedAll === false" v-on:click="collapseExpandGroups()" type="button" class="btn">
         <img style="height: 25px; " src="../assets/collapse.png">
</button>
                          <button type="button" class="btn" @click="logout()">
         <img style="height: 25px;" src="../assets/logout.png">
</button>
                        </div>
 </nav>
    </div>
    </div>



  <div class="hideForMobile">
<div v-if="this.isRightTemplate === false"> 
    <nav class="navbar fixed-top navbar-expand-lg navbar-dark bg-dark">
        <vue-progress-bar></vue-progress-bar>
        <button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarNavDropdown" aria-controls="navbarNavDropdown" aria-expanded="false" aria-label="Toggle navigation">
        

    <span class="navbar-toggler-icon"></span>
  </button>
        <div class="collapse navbar-collapse" id="navbarNavDropdown">
            <div class="col-sm-1">
            <ul class="navbar-nav mr-auto" >

                <li class="nav-item dropdown menuDropDown">
                    <a class="nav-link navibarText" href="#" id="navbarDropdownMenuLink" role="button" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
          <img style="height: 25px;" src="../assets/scripts.png">
        </a>
                    <ul class="dropdown-menu" aria-labelledby="navbarDropdownMenuLink">
                        <li no-body v-for="(template, index) in templates" v-bind:value="template.id" :key="index">
                            <button class="dropdown-item " type="button" v-on:click="getTemplate(template, false)">{{template}}</button>
                        </li>
                    </ul>
                </li>
                   <li class="nav-item dropdown menuDropDown">
                    <a class="nav-link navibarText" href="#" id="navbarDropdownMenuLink" role="button" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
                                            <img style="height: 25px;" src="../assets/options.png">

        </a>
                    <div class="dropdown-menu" aria-labelledby="navbarDropdown">
                        <div class="menuButton">
                    <a v-on:click="hideBackCalcs()" class="menuButton dropdown-item" href="#">{{hideBackCalcsText}}</a>
                                        <a v-on:click="preselectLeft()" class="menuButton dropdown-item" href="#">Preselect left</a>
                                        <a v-on:click="preselectRight()" class="menuButton dropdown-item" href="#">Preselect right</a>
                   
                    </div>
                </div>
                    
              
                </li>
                   </ul>
                   </div>
                   <div class="col-sm-8" style="text-align: center">   
                       
                   <span class="menuDefault" style="text-overflow: ellipsis;overflow: hidden; white-space: nowrap;color: white; font-weight: 600px; font-size: 20px; font-style: italic;">{{selectedTemplateName}}</span>
                   </div>
               
        </div>

             
        <span class="menuMobile" style="text-overflow: ellipsis;overflow: hidden; white-space: nowrap;color: white; font-weight: 600px; font-size: 20px; font-style: italic;">{{selectedTemplateName}}</span>
                   <button v-if="this.collapsedAll === true" v-on:click="collapseExpandGroups()" type="button" class="btn">
         <img style="height: 25px; " src="../assets/expand.png">
</button>
        <button v-if="this.collapsedAll === false" v-on:click="collapseExpandGroups()" type="button" class="btn">
         <img style="height: 25px; " src="../assets/collapse.png">
</button>
    </nav>
    </div>




    <div v-if="this.isRightTemplate === true">
    <nav class="navbar fixed-top navbar-expand-lg navbar-dark bg-dark">
        <vue-progress-bar></vue-progress-bar>
        <button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarNavDropdown" aria-controls="navbarNavDropdown" aria-expanded="false" aria-label="Toggle navigation">
          
    <span class="navbar-toggler-icon"></span>
  </button>
        <div class="collapse navbar-collapse" id="navbarNavDropdown">
            <div class="col-sm-0.5">
            <ul class="navbar-nav mr-auto" >

                <li class="nav-item dropdown menuDropDown">
                    <a class="nav-link navibarText" href="#" id="navbarDropdownMenuLink" role="button" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
          <img style="height: 25px;" src="../assets/scripts.png">
        </a>
                    <ul class="dropdown-menu"  style="min-width: 600px; height: 90vh;
    width: 50% !important;
    overflow-y: scroll;overflow-x: hidden;" aria-labelledby="navbarDropdownMenuLink">
                         
                        <li no-body v-for="(template, index) in templates" v-bind:value="template.shortName" :key="index">
                            
                            <div >
                                <div class="row">
          <div class="col-sm-6 multi-column-dropdown">
              <button class="dropdown-item" type="button" v-on:click="getTemplate(template, false)">{{template.shortName}}</button>
                   </div> 
    
                   <div class="col-sm-4" style="padding: 2px !important;">
                           <form v-on:submit.prevent="send">
                 <b-form-select v-model="selectedSavedTemplateName" @change="onChangeSavedTemplate(template.shortName)"  class="mb-3" style="margin-bottom: 3px !important; padding: 2px !important">
      <option value="null" selected >-- Select saved --</option>
      <option v-for="savedTemplate in template.savedTemplates"  v-bind:key="savedTemplate.savedName" v-bind:value="savedTemplate.savedName">
          {{savedTemplate.savedName}} 
            </option>
    </b-form-select>
      </form>
                   </div> 
                    <div class="col-sm-2">
                        <button v-on:click="getTemplate(template, false)" class="btn btn-secondary">Load</button>
                        </div>
                                   </div>
                                     </div>
                        </li>
                    </ul>
                </li>
                 <li class="nav-item dropdown menuDropDown">
                    <a class="nav-link navibarText" href="#" id="navbarDropdownMenuLink" role="button" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
                                            <img style="height: 25px;" src="../assets/options.png">

        </a>
                    <div class="dropdown-menu" aria-labelledby="navbarDropdown">
                        <div class="menuButton">
                    <a v-on:click="hideBackCalcs()" class="menuButton dropdown-item" href="#">{{hideBackCalcsText}}</a>
                                          <a v-on:click="preselectLeft()" class="menuButton dropdown-item" href="#">Preselect left</a>
                                        <a v-on:click="preselectRight()" class="menuButton dropdown-item" href="#">Preselect right</a>
                   
                    </div>
                </div>
                    
              
                </li>
                   </ul>
                   </div>
                     </div>

                   <div class="col-sm-4" style="text-align: center">   
                       
                   <span class="menuDefault" style="text-overflow: ellipsis;overflow: hidden; white-space: nowrap;color: white; font-weight: 600px; font-size: 20px; font-style: italic;">{{selectedTemplateName}}</span>
                   </div>
           
                   <div class="col-sm-1" style="text-align: right">
                                          <button type="button" class="btn" @click="saveTemplate(false)">
                                            <img style="height: 25px;" src="../assets/save.png">
</button>

           </div>        
           <div class="col-sm-1" v-if="this.isRightTemplate === true">
                 <ul class="navbar-nav mr-auto" style="text-align: left" >

               <li class="nav-item dropdown menuDropDown">
                    <a class="nav-link navibarText" href="#" id="navbarDropdownMenuLink" role="button" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
          <img style="height: 25px;" src="../assets/scripts.png">
        </a>
                    <ul class="dropdown-menu"  style="min-width: 600px; height: 90vh;
    width: 50% !important;
    overflow-y: scroll;overflow-x: hidden;" aria-labelledby="navbarDropdownMenuLink">
                         
                        <li no-body v-for="(template, index) in templates" v-bind:value="template.shortName" :key="index">
                            
                            <div >
                                <div class="row">
          <div class="col-sm-6 multi-column-dropdown">
              <button class="dropdown-item" type="button" v-on:click="getTemplate(template, true)">{{template.shortName}}</button>
                   </div> 
    
                   <div class="col-sm-4" style="padding: 2px !important;">
                           <form v-on:submit.prevent="send">
                 <b-form-select v-model="selectedSavedTemplateName" @change="onChangeSavedTemplate(template.shortName)"  class="mb-3" style="margin-bottom: 3px !important; padding: 2px !important">
      <option value="null" selected >-- Select saved --</option>
      <option v-for="savedTemplate in template.savedTemplates"  v-bind:key="savedTemplate.savedName" v-bind:value="savedTemplate.savedName">
          {{savedTemplate.savedName}} 
            </option>
    </b-form-select>
      </form>
                   </div> 
                    <div class="col-sm-2">
                        <button v-on:click="getTemplate(template, true)" class="btn btn-secondary">Load</button>
                        </div>
                                   </div>
                                     </div>
                        </li>
                    </ul>
                </li>
                </ul>
           </div>

        <div class="col-sm-3" style="text-align: center" v-if="this.isRightTemplate === true">           
                   <span class="menuDefault" style="text-overflow: ellipsis;overflow: hidden; white-space: nowrap;color: white; font-weight: 600px; font-size: 20px; font-style: italic;">{{selectedTemplateNameRight}}</span>
                   </div>
 <div class="col-sm-3.8" v-if="this.isRightTemplate === true">
                        </div>
                    <div style="text-align: right">

   <button type="button" class="btn" @click="saveTemplate(true)">
                                            <img style="height: 25px;" src="../assets/save.png">
</button>

                                  <button v-if="this.collapsedAll === true" v-on:click="collapseExpandGroups()" type="button" class="btn">
         <img style="height: 25px; " src="../assets/expand.png">
</button>
        <button v-if="this.collapsedAll === false" v-on:click="collapseExpandGroups()" type="button" class="btn">
         <img style="height: 25px; " src="../assets/collapse.png">
</button>
                              <button type="button" class="btn" @click="logout()">
         <img style="height: 25px;" src="../assets/logout.png">
</button>
                        </div>        
    </nav>
    </div>
    </div>
    </div>


</template>

<script>
import axios from 'axios'
import templatesService from '@/api-services/templates.service';
import VueCookies from 'vue-cookies'
import {
    serverBus
} from '../main.js';

import LZString from 'lz-string'
import Culture from '@/lib/culture-resources';

export default {
    
    name: 'TheNavbar',
    data: () => ({
        templates: [],
        hideBackCalcsText: 'Show BackCalcs',
        userId: $cookies.get('userId'),
        selectedTemplateName: "",
        selectedTemplateNameRight: "",
        preSelection: false,
        templateDivsPercent: 49,
        selected: null,
        selectedSavedTemplateName: "",
        selectSavedTemplatesLastChanged: "",
        selectedSavedTemplateName: null,
        collapsedAll: false
    }),
    methods: {
          isMobile() {
   if(/Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(navigator.userAgent)) {
     return true
   } else {
     return false
   }},
    getCulture(value)
    {
        return Culture.getValue(value, $cookies.get('lng'));
    },
    getTemplate: function (template, isRightTemplate) {
            if(isRightTemplate){
                this.selectedTemplateNameRight = template.shortName;
            }else{
                this.selectedTemplateName = template.shortName;
            }
            
            var compressedTemplateFromCookies = JSON.parse(localStorage.getItem('template_' + template.shortName));
            var currentTemplate = LZString.decompress(compressedTemplateFromCookies);
            if(currentTemplate && this.selectSavedTemplatesLastChanged !== template.shortName){
                currentTemplate = JSON.parse(currentTemplate);
                templatesService.clearTemplateDataPerUser(template, isRightTemplate);
                
                if(isRightTemplate){
                        serverBus.$emit('itemsGroupRight', currentTemplate);
                    }else {
                        serverBus.$emit('itemsGroupLeft', currentTemplate);
                    }
            }
            else{            
                if(this.selectSavedTemplatesLastChanged === template.shortName){
                    template.savedName = this.selectedSavedTemplateName;
                }
                 
                templatesService.loadTemplatesData(template, isRightTemplate, $cookies.get('lng'))
                .then(response => {

                    var responseData = response.data;
                    var compressedData = LZString.compress(JSON.stringify(responseData));
                    localStorage.setItem('template_' + template.shortName, JSON.stringify(compressedData));
                    
                    if(isRightTemplate){
                        serverBus.$emit('itemsGroupRight', responseData);
                    }else {
                        serverBus.$emit('itemsGroupLeft', responseData);
                    }
                    this.loader = false;

                }
                )
                .catch(e => {      
                    this.loader = false;
                                                      
                    if(e.response.status === 401){
                    this.logout();
                }
                     this.loader = false;
                })
            }
        },
        onChangeSavedTemplate(templateShortName)
        {
            this.selectSavedTemplatesLastChanged = templateShortName;
        },
        onChangeScriptLanguage: function(language){

            this.loader = true;
            templatesService.getAll(language)
            .then(response => { 
                this.loader = false;
                this.templates = response.data;
            })
            .catch(e => {
                if(e.response.status === 401){
                     this.loader = false;
                    this.logout();
                }
            })
             this.loader = false;
        },
        preselectLeft: function () {
                    serverBus.$emit('preselectLeft');              
        },
        preselectRight: function () {
                    serverBus.$emit('preselectRight');              
        },
        hideBackCalcs: function () {
                    serverBus.$emit('hideBackCalcs'); 
                    if(this.hideBackCalcsText === 'Hide BackCalcs'){
                        this.hideBackCalcsText = 'Show BackCalcs';
                    }
                    else {
                        this.hideBackCalcsText = 'Hide BackCalcs';    
                    }
        },
        collapseExpandGroups: function () {
                    if(this.collapsedAll){
                        serverBus.$emit('showAllElements'); 
                    }else{
                        serverBus.$emit('collapseAlElements');
                    }
                    this.collapsedAll = !this.collapsedAll;
        },
        changeTepmlateDivs(value)
        {
            alert(value);
        },
        logout: function(){
            this.$router.push('/login');
        },
        saveTemplate(isRight)
        {       
            var templateName = prompt(this.getCulture("SavePromptMessage"));
            
            this.loader = true; 
                
                    const env = 'http://shine15-001-site1.btempurl.com';
                    //const env = 'https://localhost:44358';
                    const auth = {
                    'Content-Type': 'application/json;',
                        'Access-Control-Allow-Origin': '*',
                        'Access-Control-Allow-Methods': 'GET, POST',
                        'Authorization': 'Bearer ' + $cookies.get('token')
            }
            axios.post(env + '/api/Calculations/SaveTemplate', {
                    name: templateName,
                    mainName: isRight ? this.selectedTemplateNameRight : this.selectedTemplateName,
                    userId: this.userId
                }, auth)
                .then(response => {
                    this.loader = false;
                    alert("Template has been successfully saved");
                })
                .catch(e => {
                    this.loader = false;
                    alert("Error is occured, please try again. Error: " + e.toString());
                });
                }
        
    },
    created() {
        this.loader = true;
        templatesService.getAll($cookies.get('lng'))
            .then(response => { 
                this.loader = false;
                this.templates = response.data;
            })
            .catch(e => {
                 this.loader = false;
                if(e.response.status === 401 || e.response.status === 400){
                    this.logout();
                }


            })
    },
    props: {
        isRightTemplate: Boolean       
    },
}
</script>

<style>

.dropdown-menu {
	min-width: 200px;
}
.dropdown-menu.columns-2 {
	min-width: 400px;
}
.dropdown-menu.columns-3 {
	min-width: 600px;
}
.dropdown-menu li a {
	padding: 5px 15px;
	font-weight: 300;
}
.multi-column-dropdown {
	list-style: none;
  margin: 0px;
  padding: 0px;
}
.multi-column-dropdown li a {
	display: block;
	clear: both;
	line-height: 1.428571429;
	color: #333;
	white-space: normal;
}
.multi-column-dropdown li a:hover {
	text-decoration: none;
	color: #262626;
	background-color: #999;
}
 
@media (max-width: 767px) {
	.dropdown-menu.multi-column {
		min-width: 240px !important;
		overflow-x: hidden;
	}
}

</style>>
