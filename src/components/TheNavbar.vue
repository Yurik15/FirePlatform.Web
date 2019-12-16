<template>
<div>
<div v-if="this.isRightTemplate === false"> 
    <nav class="navbar fixed-top navbar-expand-lg navbar-dark bg-dark">
        <vue-progress-bar></vue-progress-bar>
        <button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarNavDropdown" aria-controls="navbarNavDropdown" aria-expanded="false" aria-label="Toggle navigation">
        

    <span class="navbar-toggler-icon"></span>
  </button>
        <div class="collapse navbar-collapse" id="navbarNavDropdown">
            <div class="col-sm-2">
            <ul class="navbar-nav mr-auto" >

                <li class="nav-item dropdown menuDropDown">
                    <a class="nav-link dropdown-toggle navibarText" href="#" id="navbarDropdownMenuLink" role="button" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
          Templates
        </a>
                    <ul class="dropdown-menu" aria-labelledby="navbarDropdownMenuLink">
                        <li no-body v-for="(template, index) in templates" v-bind:value="template.id" :key="index">
                            <button class="dropdown-item " type="button" v-on:click="getTemplate(template, false)">{{template}}</button>
                        </li>
                    </ul>
                </li>
                 <li class="nav-item dropdown menuDropDown">
                    <a class="nav-link dropdown-toggle navibarText" href="#" id="navbarDropdownMenuLink" role="button" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
          Options
        </a>
                    <div class="dropdown-menu" aria-labelledby="navbarDropdown">
                        <div class="menuButton">
                    <a v-on:click="showAllElements()" class="menuButton dropdown-item" href="#">Expand All</a>
                    <a v-on:click="hideBackCalcs()" class="menuButton dropdown-item" href="#">{{hideBackCalcsText}}</a>
                    </div>
                </div>
                </li>
                   </ul>
                   </div>
                   <div class="col-sm-8" style="text-align: center">   
                       
                   <span class="menuDefault" style="color: white; font-weight: 600px; font-size: 20px; font-style: italic;">{{selectedTemplateName}}</span>
                   </div>
                   <div class="col-sm-2" >
           </div>
        </div>

             
        <span class="menuMobile" style="color: white; font-weight: 600px; font-size: 20px; font-style: italic;">{{selectedTemplateName}}</span>
           <button v-on:click="collapseAlElements()" type="button" class="btn">
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
            <div class="col-sm-1">
            <ul class="navbar-nav mr-auto" >

                <li class="nav-item dropdown menuDropDown">
                    <a class="nav-link dropdown-toggle navibarText" href="#" id="navbarDropdownMenuLink" role="button" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
          Templates
        </a>
                    <ul class="dropdown-menu "  style="min-width: 700px" aria-labelledby="navbarDropdownMenuLink">
                          <div class="row" style="margin: 0px; align-items: center;">
                              <div class="col-sm-2" style="padding: 2px !important;">
                                  Script language
                                  </div>
                                  <div class="col-sm-2" style="margin-bottom: 3px !important; padding: 5px !important">
                             <form v-on:submit.prevent="send">                                                                                             
                <b-form-select @change="onChangeScriptLanguage(languageValue)" v-model="languageValue" class="mb-3" >
  <option v-for="option in languageOptions" v-bind:key="option.value" v-bind:value="option.value">
    {{ option.text }}
  </option>
<span>Selected: {{ selected }}</span>
                </b-form-select>
            </form>
         </div>
  </div>
                        <li no-body v-for="(template, index) in templates" v-bind:value="template.shortName" :key="index">
                            
                            <div>
                                <div class="row">
          <div class="col-sm-4 multi-column-dropdown" style="min-width: 200px">
              <button class="dropdown-item " type="button" v-on:click="getTemplate(template, false)">{{template.shortName}}</button>
                   </div> 
                   <div class="col-sm-2" style="padding: 2px !important;">
             <div class="dropdown">
      <form v-on:submit.prevent="send">
    <b-form-select class="mb-3" style="margin-bottom: 3px !important; padding: 2px !important">
      <option :value="undefined" disabled hidden>Latest</option>
        
    </b-form-select>
  </form>

</div>
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
                    <div class="col-sm-1">
                        <button v-on:click="getTemplate(template, false)" class="btn btn-secondary">Load</button>
                        </div>
                                   </div>
                                     </div>
                        </li>
                    </ul>
                </li>
                 <li class="nav-item dropdown menuDropDown">
                    <a class="nav-link dropdown-toggle navibarText" href="#" id="navbarDropdownMenuLink" role="button" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
          Options
        </a>
                    <div class="dropdown-menu" aria-labelledby="navbarDropdown">
                        <div class="menuButton">
                    <a v-on:click="showAllElements()" class="menuButton dropdown-item" href="#">Expand All</a>
                    <a v-on:click="hideBackCalcs()" class="menuButton dropdown-item" href="#">{{hideBackCalcsText}}</a>
                    <a v-on:click="preselectLeft()" class="menuButton dropdown-item" href="#">Preselect left</a>
                    <a v-on:click="preselectRight()" class="menuButton dropdown-item" href="#">Preselect right</a>
                     <b-dropdown id="dropdown-dropright" dropright text="Script language" variant="primary" style="width: 100%">
                         <form v-on:submit.prevent="send">
                             <div style="margin-left: 5%; width: 100%">
   <div class="custom-control custom-radio" >
  <input type="radio" id="customRadio1" name="customRadio" v-model="languageValue" v-bind:value="languageEnglish" class="custom-control-input">
  <label class="custom-control-label" for="customRadio1">English</label>
</div>
<div class="custom-control custom-radio">
  <input type="radio" id="customRadio2" v-model="languageValue" v-bind:value="languaguePolish" name="customRadio" class="custom-control-input">
  <label class="custom-control-label" for="customRadio2">Polski</label>
</div>
</div>
                         </form>
  </b-dropdown>
                    </div>
                </div>
                </li>
                   </ul>
                   </div>
                     </div>
                   <div class="col-sm-2" style="text-align: center">   
                       
                   <span class="menuDefault" style="color: white; font-weight: 600px; font-size: 20px; font-style: italic;">{{selectedTemplateName}}</span>
                   </div>
           
                   <div class="col-sm-1" style="text-align: right">
                        <button v-on:click="saveTemplate(false)" type="button" class="btn btn-primary">S</button>
                              <button v-on:click="collapseAlElements()" type="button" class="btn">
         <img style="height: 25px; " src="../assets/collapse.png">
</button>
           </div>        
           <div class="col-sm-2" v-if="this.isRightTemplate === true">
                 <ul class="navbar-nav mr-auto" style="text-align: left" >

                <li class="nav-item dropdown menuDropDown">
                    <a class="nav-link dropdown-toggle navibarText" href="#" id="navbarDropdownMenuLink" role="button" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
          Templates
        </a>
                    <ul class="dropdown-menu" aria-labelledby="navbarDropdownMenuLink">
                        <li no-body v-for="(template, index) in templates" v-bind:value="template.shortName" :key="index">
                            <button class="dropdown-item " type="button" v-on:click="getTemplate(template, true)">{{template.shortName}}</button>
                        </li>
                    </ul>
                </li>
                </ul>
           </div>

        <div class="col-sm-2" style="text-align: center" v-if="this.isRightTemplate === true">           
                   <span class="menuDefault" style="color: white; font-weight: 600px; font-size: 20px; font-style: italic;">{{selectedTemplateNameRight}}</span>
                   </div>
 <div class="col-sm-1" v-if="this.isRightTemplate === true">
                        </div>
                    <div style="text-align: right">

<button v-on:click="saveTemplate(true)" type="button" class="btn btn-primary">S</button>

                          <button v-on:click="collapseAlElements()" type="button" class="btn">
                     <img style="height: 25px; " src="../assets/collapse.png">
                          </button>
                <button v-on:click="logout()" style="color: white" type="button" class="btn">Logout</button>
                        </div>        
    </nav>
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

export default {
    
    name: 'TheNavbar',
    data: () => ({
        templates: [],
        loading: false,
        hideBackCalcsText: 'Show BackCalcs',
        collapseAllText: 'Collapse All',
        userId: $cookies.get('userId'),
        selectedTemplateName: "",
        selectedTemplateNameRight: "",
        preSelection: false,
        templateDivsPercent: 49,
        selected: null,
        languageValue: "",
        languaguePolish: "pol",
        languageEnglish: "eng",
        languageValue: 'pol',
        languageOptions: [
            { text: 'Polski', value: 'pol' },
            { text: 'English', value: 'eng' },
        ],
        selectedSavedTemplateName: "",
        selectSavedTemplatesLastChanged: "",
        selectedSavedTemplateName: null
    }),
    methods: {
    getTemplate: function (template, isRightTemplate) {
            this.$Progress.start();
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
                templatesService.loadTemplatesData(template, isRightTemplate, this.languageValue)
                .then(response => {

                    var responseData = response.data;
                    var compressedData = LZString.compress(JSON.stringify(responseData));
                    localStorage.setItem('template_' + template.shortName, JSON.stringify(compressedData));
                   
                    if(isRightTemplate){
                        serverBus.$emit('itemsGroupRight', responseData);
                    }else {
                        serverBus.$emit('itemsGroupLeft', responseData);
                    }
                   

                }
                )
                .catch(e => {                    
                    this.$Progress.fail();
                    if(e.response.status === 401){
                    this.logout();
                }
                this.$Progress.finish();
                })
            }
        },
        collapseAlElements: function () {
                serverBus.$emit('collapseAlElements');              
        },
        onChangeSavedTemplate(templateShortName)
        {
            this.selectSavedTemplatesLastChanged = templateShortName;
        },
        onChangeScriptLanguage: function(language){

            this.$Progress.start()
            templatesService.getAll(language)
            .then(response => { 
                this.$Progress.finish();
                this.loading = true;
                this.templates = response.data;
            })
            .catch(e => {
                if(e.response.status === 401){
                    this.logout();
                }
            })
        },
        showAllElements: function () {
                    serverBus.$emit('showAllElements');              
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
        changeTepmlateDivs(value)
        {
            alert(value);
        },
        logout: function(){
            this.$router.push('/login');
        },
        saveTemplate(isRight)
        {       
                var templateName = prompt("Please enter name of saving template");
                
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
                    
                })
                .catch(e => {
                    alert("Error is occured, please try again. Error: " + e.toString());
                });
                }
        
    },
    created() {
        this.$Progress.start()
        templatesService.getAll()
            .then(response => { 
                this.$Progress.finish();
                this.loading = true;
                this.templates = response.data;
            })
            .catch(e => {
                if(e.response.status === 401){
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
