<template>
<div>
<div v-if="this.isRightTemplate === false"> 
    <nav class="navbar fixed-top navbar-expand-lg navbar-dark bg-dark">
        <vue-progress-bar></vue-progress-bar>
        <button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarNavDropdown" aria-controls="navbarNavDropdown" aria-expanded="false" aria-label="Toggle navigation">
        
<div class="modal fade" id="exampleModal" tabindex="-1" role="dialog" aria-labelledby="exampleModalLabel" aria-hidden="true">
  <div class="modal-dialog" role="document">
    <div class="modal-content">
      <div class="modal-header">
        <h5 class="modal-title" id="exampleModalLabel">New message</h5>
        <button type="button" class="close" data-dismiss="modal" aria-label="Close">
          <span aria-hidden="true">&times;</span>
        </button>
      </div>
      <div class="modal-body">
        <form>
          <div class="form-group">
            <label for="recipient-name" class="col-form-label">Recipient:</label>
            <input type="text" class="form-control" id="recipient-name">
          </div>
          <div class="form-group">
            <label for="message-text" class="col-form-label">Message:</label>
            <textarea class="form-control" id="message-text"></textarea>
          </div>
        </form>
      </div>
      <div class="modal-footer">
        <button type="button" class="btn btn-secondary" data-dismiss="modal">Close</button>
        <button type="button" class="btn btn-primary">Send message</button>
      </div>
    </div>
  </div>
</div>

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
                            <button class="dropdown-item " type="button" v-on:click="getTemplate(template.id, template.name, false)">{{template}}</button>
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
                    <ul class="dropdown-menu" aria-labelledby="navbarDropdownMenuLink">
                        <li no-body v-for="(template, index) in templates" v-bind:value="template.shortName" :key="index">
                            <button class="dropdown-item " type="button" v-on:click="getTemplate(template, false)">{{template.shortName}}</button>
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
                    </div>
                </div>
                </li>
                   </ul>
                   </div>
                     </div>
                   <div class="col-sm-1" style="text-align: center">   
                       
                   <span class="menuDefault" style="color: white; font-weight: 600px; font-size: 20px; font-style: italic;">{{selectedTemplateName}}</span>
                   </div>
           
                   <div class="col-sm-2" style="text-align: right">
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
                        <li no-body v-for="(template, index) in templates" v-bind:value="template.id" :key="index">
                            <button class="dropdown-item " type="button" v-on:click="getTemplate(template.id, template.name, true)">{{template.name}}</button>
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
        templateDivsPercent: 49
    }),
    methods: {
   getTemplate: function (template, isRightTemplate) {
            this.$Progress.start();
            if(isRightTemplate){
                this.selectedTemplateNameRight = template.shortName;
            }else{
                this.selectedTemplateName = template.shortName;
            }
           // var currentTemplate = JSON.parse(localStorage.getItem('template' + templateId));
           // if(currentTemplate){
                //alert("exists");
               // this.$Progress.finish();
              //  serverBus.$emit('itemsGroup', currentTemplate);
          //  }
           // else{   

            
            templatesService.loadTemplatesData(template, isRightTemplate)
                .then(response => {
                    this.$Progress.finish();
                   // alert("ok");
                    //alert(JSON.stringify(response));
                    //var responseDataCol = response.data;
                    //var responseData = "";
                    // responseDataCol.forEach(base64Part => {
                         // alert(JSON.stringify(base64Part));
                                //responseData += LZString.decompressFromBase64(base64Part);
                               //alert(JSON.stringify(responseData)); 
                        //});
                    var finalData = response.data;
                   // alert(JSON.stringify(finalData));
                    //localStorage.setItem('template' + templateId, JSON.stringify(response.data));
                    if(isRightTemplate){
                        serverBus.$emit('itemsGroupRight', finalData);
                    }else {
                        serverBus.$emit('itemsGroupLeft', finalData);
                    }
                })
                .catch(e => {                    
                    this.$Progress.fail();
                    if(e.response.status === 401){
                    this.logout();
                }
                })
            //}
        },
        collapseAlElements: function () {
                    serverBus.$emit('collapseAlElements');              
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
                
                    const env = 'https://localhost:44358';
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
                    if(response.data !== ""){
                        VueCookies.set('userId', response.data.userId);
                        VueCookies.set('token', response.data.token);
                        this.$router.push(rootName);
                    }
                    else{
                        this.wrongloginData = true;
                    }
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
