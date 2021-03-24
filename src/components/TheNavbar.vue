<template>
<div>
    <div v-if="loader">
        <div class="text-info d-flex align-items-center justify-content-center mb-3 modal">
            <b-spinner style="width: 5rem; height: 5rem;" label="Loading..."></b-spinner>
        </div>
    </div>
<div>


      <!--Form for the mobile-->
<div class="showForMobile" >
     
    <nav class="navbar fixed-top navbar-expand-lg navbar-dark bg-dark">
        <vue-progress-bar></vue-progress-bar>
      <!--navbar line-->
          <button class="navbar-toggler toggler-example" type="button" data-toggle="collapse" data-target="#navbarSupportedContent1"
    aria-controls="navbarSupportedContent1" aria-expanded="false" aria-label="Toggle navigation"><span class="dark-blue-text"><i
        ></i></span><menu-icon></menu-icon></button>

        <span class="menuMobile" style="overflow: hidden; white-space: nowrap;color: white; font-weight: 600px; font-size: 18px;">{{selectedTemplateNameRight}}</span>

        <button class="navbar-brand btn" style="margin-right: 0px;" v-if="this.collapsedAll === false" v-on:click="collapseExpandGroups(true)" type="button">
         <img style="height: 25px; " src="../assets/collapse.png">
        </button>

        <button class="navbar-brand btn" style="margin-right: 0px;" v-if="this.collapsedAll === true" v-on:click="collapseExpandGroups(true)" type="button">
         <img style="height: 25px; " src="../assets/expand.png">
        </button>   

        

     <!-- Collapsible content -->
  <div class="collapse navbar-collapse" id="navbarSupportedContent1">

    <!-- Links -->
    <ul class="navbar-nav mr-auto">
      <li class="nav-item active hamburgerData">
        <a class="nav-link" v-on:click="loadTemplates()" href="#" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false"><img style="height: 25px;" src="../assets/scripts.png"> {{this.getCulture("Scripts")}}</a>

          <ul class="navbar-nav mr-auto" style="text-align: left; max-height: 70vh; overflow: auto;" >
            
                <li class="nav-item dropdown menuDropDown">    
                    <ul class="dropdown-menu" aria-labelledby="navbarDropdownMenuLink">
                        <li no-body v-for="(template, index) in templates" v-bind:value="template.shortName" :key="index" data-toggle="collapse" data-target="#navbarSupportedContent1"
                            aria-controls="navbarSupportedContent1" aria-expanded="false" aria-label="Toggle navigation">
                            <button class="hamburgerData dropdown-item " type="button" v-on:click="getTemplate(template, 2) ">{{template.shortName}}</button>
                        </li>
                    </ul>
                </li>
            </ul>
      </li>
        <li class="nav-item active hamburgerData">
            <a data-toggle="collapse" data-target="#navbarSupportedContent1"
                            aria-controls="navbarSupportedContent1" aria-expanded="false" aria-label="Toggle navigation" v-on:click="preselectRight()" class="nav-link" href="#"><img style="height: 25px;" src="../assets/scripts.png"> {{this.getCulture("Preselect")}}</a>
        </li>
        <li class="nav-item active hamburgerData">
            <a v-on:click="hideBackCalcs()" class="nav-link" href="#"><img style="height: 25px;" src="../assets/scripts.png"> {{hideBackCalcsText}}</a>
        </li>
        <li class="nav-item active">
            <a class="nav-link" href="#"  @click="logout()"><img style="height: 25px;" src="../assets/logout.png"> {{this.getCulture("Logout")}}</a>
        </li>
    </ul>
    <!-- Links -->
  </div>
  <!-- Collapsible content -->

 </nav>
    </div>
    </div>

<div  v-if="this.templateID === 0"> 
 <div>
    <nav class="navbar fixed-top navbar-expand-lg navbar-dark bg-dark" style="position: absolute; height: 50px" >
        <vue-progress-bar></vue-progress-bar>
                <!--navbar element list-->               
                <div class="row" style="width: 120%">
                    <div class="col-sm-2" style="align-items: center; display: flex; justify-content: flex-start;">
                        <li class="nav-item dropdown" style="list-style: none;">
                            <a href="#" id="navbarDropdown" role="button" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
                                <img style="height: 20px;" src="../assets/hamburger.png">
                            </a>
                            <div class="dropdown-menu" aria-labelledby="navbarDropdown">
                                <a class="dropdown-item" href="#"  @click="switchItemListView(0)">{{this.getCulture('Show scripts/definition')}}
                                    <button class="navbar-brand btn paddingBottom5px" @click="switchItemListView(0) " type="button">
                                        <img style="height: 20px; margin-bottom: 4px;" src="../assets/switch.png">
                                    </button>
                                </a>
                            <div class="dropdown-divider"></div>
                               <a v-on:click="logout()" class="dropdown-item" href="#">{{this.getCulture("Logout")}}
                                  <button v-on:click="logout()" type="button" class="navbar-brand btn">
                                    <img style="height: 25px;" src="../assets/logout.png">
                                  </button>
                               </a>
                            </div>
                        </li>     
                    </div>   
                    <div class="col-sm-8" style="align-items: center; display: flex; justify-content: center;">
                        <div v-if="this.isItemListViewLeft === false" class="menuDefault navbar-brand" >{{selectedTemplateName}}</div>
                        <div v-if="this.isItemListViewLeft === true" class="menuDefault navbar-brand" >{{scriptsTitle}}</div>                                   
                    </div>
                    <div class="col-sm-2 text-right" style="padding-right: 0px">
                        <button v-if="this.showCollapseButtonLeft && this.collapsedAll === true" v-on:click="collapseExpandGroups(0)" type="button" class="navbar-brand btn">
                            <img style="height: 25px; " src="../assets/expand.png" >
                        </button>

                        <button v-if="this.showCollapseButtonLeft && this.collapsedAll === false" v-on:click="collapseExpandGroups(0)" type="button" class="navbar-brand btn">
                            <img style="height: 25px;" src="../assets/collapse.png">
                        </button>  
                    </div>
                </div>
    </nav>
    </div>
        <div v-show="isItemListViewLeft">
            <ItemList :templateID=0>></ItemList>
        </div>
        <div v-show="!isItemListViewLeft">
             <TheItems :key="componentKey" :templateID=0></TheItems>
        </div>
    </div>

<div  v-if="this.templateID === 1"> 
 <div >
    <nav class="navbar fixed-top navbar-expand-lg navbar-dark bg-dark" style="position: absolute; height: 50px" >
        <vue-progress-bar></vue-progress-bar>
                <!--navbar element list-->               
                    <div class="row" style="width: 120%;">
                   <div class="col-sm-3" style="align-items: center; display: flex; justify-content: flex-start;">
                        <li class="nav-item dropdown" style="list-style: none;">
                            <a href="#" id="navbarDropdown" role="button" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
                                <img style="height: 20px;" src="../assets/hamburger.png">
                            </a>
                            <div class="dropdown-menu" aria-labelledby="navbarDropdown">
                                <a class="dropdown-item" href="#"  @click="switchItemListView(1)">{{this.getCulture('Show scripts/definition')}}
                                    <button class="navbar-brand btn paddingBottom5px" @click="switchItemListView(1) " type="button">
                                        <img style="height: 20px; margin-bottom: 4px;" src="../assets/switch.png">
                                    </button>
                                </a>
                            <div class="dropdown-divider"></div>
                               <a v-on:click="logout()" class="dropdown-item" href="#">{{this.getCulture("Logout")}}
                                  <button v-on:click="logout()" type="button" class="navbar-brand btn">
                                    <img style="height: 25px;" src="../assets/logout.png">
                                  </button>
                               </a>
                            </div>
                        </li>     
                    </div>    
                    <div class="col-sm-6" style="align-items: center; display: flex; justify-content: center;">
                        <div v-if="this.isItemListView === false" class="menuDefault navbar-brand" >{{selectedTemplateNameCenter}}</div>
                        <div v-if="this.isItemListView === true" class="menuDefault navbar-brand" >{{scriptsTitle}}</div>                                        
                    </div>
                    <div class="col-sm-3 text-right" style="padding-right: 0px">
                         <button v-if="this.showCollapseButton &&  this.collapsedAll === true" v-on:click="collapseExpandGroups(1)" type="button" class="navbar-brand btn">
                            <img style="height: 25px; " src="../assets/expand.png" >
                        </button>

                        <button v-if="this.showCollapseButton &&  this.collapsedAll === false" v-on:click="collapseExpandGroups(1)" type="button" class="navbar-brand btn">
                            <img style="height: 25px;" src="../assets/collapse.png">
                        </button>  
                    </div>
                </div> 
    </nav>
        <div v-show="isItemListView">
            <ItemList :templateID=1>></ItemList>
        </div>
        <div v-show="!isItemListView">
             <TheItems :key="componentKey" :templateID=1></TheItems>
        </div>
    </div>
    </div>
    
<div v-if="this.templateID === 2 && !isMobile"> 
 <div class="hideForMobile"  >
    <nav class="navbar fixed-top navbar-expand-lg navbar-dark bg-dark" style="position: absolute; height: 50px" >
        <vue-progress-bar></vue-progress-bar>
                <!--navbar element list-->               
                 <div class="row" style="width: 120%">
                    <div class="col-sm-2" style="align-items: center; display: flex; justify-content: flex-start;">
                        <li class="nav-item dropdown" style="list-style: none;">
                            <a href="#" id="navbarDropdown" role="button" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
                                <img style="height: 20px;" src="../assets/hamburger.png">
                            </a>
                            <div class="dropdown-menu" aria-labelledby="navbarDropdown">
                                <a class="dropdown-item" href="#"  @click="switchItemListView(2)">{{this.getCulture('Show scripts/definition')}}
                                    <button class="navbar-brand btn paddingBottom5px" @click="switchItemListView(2) " type="button">
                                        <img style="height: 20px; margin-bottom: 4px;" src="../assets/switch.png">
                                    </button>
                                </a>
                            <div class="dropdown-divider"></div>
                               <a v-on:click="logout()" class="dropdown-item" href="#">{{this.getCulture("Logout")}}
                                  <button v-on:click="logout()" type="button" class="navbar-brand btn">
                                    <img style="height: 25px;" src="../assets/logout.png">
                                  </button>
                               </a>
                            </div>
                        </li>     
                    </div>   
                 <div class="col-sm-8" style="align-items: center; display: flex; justify-content: center;">
                     <div v-if="this.isItemListViewRight === false" class="menuDefault navbar-brand" >{{selectedTemplateNameRight}}</div>
                     <div v-if="this.isItemListViewRight === true" class="menuDefault navbar-brand" >{{scriptsTitle}}</div>   
                 </div>
                 <div class="col-sm-2 text-right" style="padding-right: 0px">
                     <button v-if="this.showCollapseButtonRight && this.collapsedAll === true" v-on:click="collapseExpandGroups(2)" type="button" class="navbar-brand btn">
                            <img style="height: 25px; " src="../assets/expand.png" >
                        </button>

                        <button v-if="this.showCollapseButtonRight && this.collapsedAll === false" v-on:click="collapseExpandGroups(2)" type="button" class="navbar-brand btn">
                            <img style="height: 25px;" src="../assets/collapse.png">
                        </button>  
                        
                    </div>
                </div>                                                                                         
                        <div>
                         </div>
    </nav>
    </div>
        <div v-show="isItemListViewRight">
            <ItemList :templateID=2>></ItemList>
        </div>
        <div v-show="!isItemListViewRight">
             <TheItems :key="componentKey" :templateID=2></TheItems>
        </div>
    </div>


<div v-if="this.templateID === 2 && this.isMobile === true"> 
 <div class="hideForMobile"  >
     <div class="row">
    <nav class="navbar fixed-top navbar-expand-lg navbar-dark bg-dark" style="position: absolute; height: 50px" >
        <vue-progress-bar></vue-progress-bar>
                <!--navbar element list-->
                <div class="navbarPadding">
    
                    <li class="navbar-brand dropdown menuDropDown">
                        <a v-on:click="loadTemplates()" class="nav-link navibarText" href="#" id="navbarDropdownMenuLink" role="button" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
                            <img style="height: 25px;" src="../assets/scripts.png">
                        </a>
                        <ul class="dropdown-menu hideScrollChrome"  style="min-width: 600px; height: 90vh;overflow-y: scroll;overflow-x: hidden;" aria-labelledby="navbarDropdownMenuLink">
                            <li no-body v-for="(template, index) in templates" v-bind:value="template.shortName" :key="index">
                            <div>
                                <div class="row">
                                    <div class="col-sm-6 multi-column-dropdown">
                                            <button class="dropdown-item" type="button" v-on:click="getTemplate(template, 2)">{{template.shortName}}</button>
                                    </div> 
                                <!-- <div class="col-sm-4" style="padding: 2px !important;">
                                    <form v-on:submit.prevent="send">
                                        <b-form-select v-model="selectedSavedTemplateName" @change="onChangeSavedTemplate(template.shortName)"  class="mb-3" style="margin-bottom: 3px !important; padding: 2px !important">
                                            <option value="null" selected >-- Select saved --</option>
                                            <option v-for="savedTemplate in template.savedTemplates"  v-bind:key="savedTemplate.savedName"
                                                 v-bind:value="savedTemplate.savedName">{{savedTemplate.savedName}} 
                                            </option>
                                        </b-form-select>
                                    </form>
                                </div>  -->
                                        <div class="col-sm-2">
                                                <button v-on:click="getTemplate(template, 2)" class="btn btn-secondary customColor">Załaduj</button>
                                        </div>
                                    </div>
                                </div>     
                            </li>
                        </ul>
                    <li class="navbar-brand dropdown menuDropDown" style="padding-bottom: 0px;padding-top: 7px;">
                        <a class="navibarText" href="#" id="navbarDropdownMenuLink" role="button" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
                              <img style="height: 25px;" src="../assets/options.png">
                        </a>
                        <div class="dropdown-menu" aria-labelledby="navbarDropdown">
                            <div class="menuButton">
                                <a v-on:click="hideBackCalcs()" class="menuButton dropdown-item" href="#">{{hideBackCalcsText}}</a>
                                <!-- <a v-on:click="preselectRight()" class="menuButton dropdown-item" href="#">{{this.getCulture("Preselect")}}</a>  -->
                                <a v-on:click="logout()" class="menuButton dropdown-item" href="#">{{this.getCulture("Logout")}}</a>              
                            </div>
                        </div>
                    </li>
                        <button class="navbar-brand btn paddingBottom5px" @click="saveTemplate(true) " type="button">
                            <img style="height: 25px; margin-bottom: 4px;" src="../assets/save.png">
                        </button>    
                        <button v-if="this.collapsedAll === true" v-on:click="collapseExpandGroups(true)" type="button" class="navbar-brand btn">
                            <img style="height: 25px; " src="../assets/expand.png" >
                        </button>

                        <button v-if="this.collapsedAll === false" v-on:click="collapseExpandGroups(true)" type="button" class="navbar-brand btn">
                            <img style="height: 25px;" src="../assets/collapse.png">
                        </button>      

                        <div class="menuDefault navbar-brand" >{{selectedTemplateNameRight}}</div>              
                </div>

            </nav>
        </div>
    </div>
        <TheItems :templateID=2 :isMobile=true></TheItems>
    </div>

</div>
</template>

<script>
import axios from 'axios'
import templatesService from '@/api-services/templates.service';
import {
    serverBus
} from '../main.js';

import TheItems from '@/components/TheItems.vue'
import ItemList from '@/components/ItemList.vue'
import Culture from '@/lib/culture-resources';

export default {
    
    name: 'TheNavbar',
    data: () => ({
        templates: [],
        hideBackCalcsText: Culture.getValue('Show BackCalcs', $cookies.get('lng')),
        userId: $cookies.get('userId'),
        selectedTemplateName: "",
        selectedTemplateNameRight: "",
        selectedTemplateNameCenter: "",
        scriptsTitle: Culture.getValue('Scripts', $cookies.get('lng')),
        showScriptsTitleRight: null, 
        preSelection: false,
        templateDivsPercent: 49,
        selected: null,
        selectedSavedTemplateName: null,
        selectSavedTemplatesLastChanged: "",
        collapsedAll: false,
        showCollapseButtonRight: null,
        showCollapseButtonLeft: null,
        showCollapseButton: false,
        loader: false,
        componentKey: 0,
        isItemListView: true,
        isItemListViewLeft: false,
        isItemListViewRight: false
    }),
    components:
    {
        TheItems,
        ItemList
    },
    methods: {
    switchItemListView(templateID)
    {
        if(templateID === 0){
            this.isItemListViewLeft = !this.isItemListViewLeft;
            if(this.showCollapseButtonLeft === null){
                this.showCollapseButtonLeft = false;
            }else{
            this.showCollapseButtonLeft = !this.showCollapseButtonLeft;
            }
        }
        if(templateID === 1){
            this.isItemListView = !this.isItemListView;
             if(this.showCollapseButton === null){
                this.showCollapseButton = false;
            }else{
            this.showCollapseButton = !this.showCollapseButton;
            }
        }
        if(templateID === 2){
            this.isItemListViewRight = !this.isItemListViewRight;
            if(this.showCollapseButtonRight === null){
                this.showCollapseButtonRight = false;
            }else{
            this.showCollapseButtonRight = !this.showCollapseButtonRight;
            }
        }
    },
    forceRerender() {
      this.componentKey += 1;
    },
    getCulture(value)
    {
        return Culture.getValue(value, $cookies.get('lng'));
    },
    getTemplate: function (template, templateID) {
            this.forceRerender();
            this.loader = true;

            if(templateID === 2){
                this.selectedTemplateNameRight = template.shortName;
            }
            if(templateID === 1){
                this.selectedTemplateNameCenter = template.shortName;
            }
             if(templateID === 0){
                this.selectedTemplateName = template.shortName;
            }

                template.savedName = this.selectedSavedTemplateName;
                var responseData = null;
                templatesService.loadTemplatesData(template, templateID, $cookies.get('lng'))
                .then(response => {
                    this.loader = false;

                    responseData = response.data;
                    if(templateID === 2){
                        serverBus.$emit('itemsGroupRight', responseData);
                    }
                    if(templateID === 1){
                        serverBus.$emit('itemsGroupCenter', responseData);
                    }
                    if(templateID === 0){
                        serverBus.$emit('itemsGroupLeft', responseData);
                    }
                }
                )
                .catch(e => {      
                    this.loader = false;    
                                                      
                    if(e.response.status === 401){
                    this.logout();
                }
                })
        },
        download: function () {
            //alert("ok");
            

    //var create = document.getElementById('create'),
    //textbox = document.getElementById('textbox');

    var link = document.getElementById('downloadlink');


    var IDs = []; 
    var groups = [];
    var itemIDs = [];
    var txtToDownload = '';
              
            IDs = $('*').map(function() { 
                if (this.id) { 
                    return this.id; 
                } 
            }).get(); 
            IDs.forEach(ID => {
                if(ID.startsWith("groupName")){
                   var bufGroup = {Id: ID, items: []}
                   groups.push(bufGroup);
                }
                if(ID.startsWith("itemName")){
                  //  alert(ID);
                    itemIDs.push(ID);
                }
            });
            groups.forEach(group => {
                itemIDs.forEach(itemID => {
                if(group.Id.replace(/[^0-9]/g, '') === itemID.split(',')[2]){
                    group.items.push(itemID);
                }
                })
            });
             groups.forEach(group => {
                 txtToDownload += document.getElementById(group.Id).textContent + "\n";
                 group.items.forEach(item => {
                     if(item.split(',')[6] === "Combo"){
                         var value = document.getElementById(item).value ? document.getElementById(item).value.split('sepComboItem')[0] : "value is not selected !!!";
                         txtToDownload += "\t" + item.split(',')[4] +": "+ value  + "\n";
                     }
                      if(item.split(',')[6] === "Check"){
                         txtToDownload += "\t" + item.split(',')[4] +": "+ document.getElementById(item).checked  + "\n";
                     }
                     else{
                        txtToDownload += "\t" + item.split(',')[4] +": "+  item.split(',')[6] + "\n";
                     }
                 })
                 txtToDownload += "\n";
                 txtToDownload += "\n";
             });
            //alert(txtToDownload);
            //alert(JSON.stringify(groups));
            //alert(text);
            
            var data = new Blob([txtToDownload], {type: 'text/plain'});

            // If we are replacing a previously generated file we need to
            // manually revoke the object URL to avoid memory leaks.
            window.URL.revokeObjectURL(txtToDownload);
            

            var textFile = window.URL.createObjectURL(data);
                link.href = textFile;
                link.style.display = 'block';
            

var node = document.getElementById('groupName0').textContent;

//alert(node.textContent);

            //alert(JSON.stringify(ID));
  
},
        onChangeSavedTemplate(templateShortName)
        {
            this.selectSavedTemplatesLastChanged = templateShortName;
        },
        onChangeScriptLanguage: function(language){
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
        preselectCenter: function () {
            
                    serverBus.$emit('preselectCenter'); 
                    //this.forceRerender();             
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
        collapseExpandGroups: function (templateID) {
                    if(this.collapsedAll){
                        if(templateID === 2){
                            serverBus.$emit('showAllElementsRight'); 
                        }
                        if(templateID === 1){
                            serverBus.$emit('showAllElementsCenter'); 
                        }
                        if(templateID === 0){
                             serverBus.$emit('showAllElementsLeft'); 
                        }                 
                    }else{
                        if(templateID === 2){
                            serverBus.$emit('collapseAlElementsRight'); 
                        }
                        if(templateID === 1){
                            serverBus.$emit('collapseAlElementsCenter'); 
                        }
                        if(templateID === 0){
                             serverBus.$emit('collapseAlElementsLeft'); 
                        }       
                    }
                    this.collapsedAll = !this.collapsedAll;
        },
        logout: function(){
            this.$router.push('/login');
        },
         loadTemplates(){
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
        saveTemplate(selectedSavedTemplateName, templateID)
        {       
            
            var templateName = prompt(this.getCulture("SavePromptMessage"));
            this.loader = true; 
                
                    const env = 'http://shine15-001-site1.btempurl.com';
                    //const env = 'http://localhost:59548';
                    const auth = {
                        headers:{
                        'Content-Type': 'application/json;',
                        'Access-Control-Allow-Origin': '*',
                        'Access-Control-Allow-Methods': '*',
                        'Authorization': 'Bearer ' + $cookies.get('token')
                        }
            }
            axios.post(env + '/api/Calculations/SaveTemplate', {
                    savedName: this.selectedSavedTemplateName,
                    name: templateName,
                    mainName: templateID ? this.selectedTemplateNameRight : this.selectedTemplateName,
                    userId: this.userId
                }, auth)
                .then(response => {
                    templatesService.getAll($cookies.get('lng'))
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
                        alert("Template has been successfully saved");
                    })
                    .catch(e => {
                     this.loader = false;
                        alert("Error is occured, please try again. Error: " + e.toString());
                    });
                }
        
    },
    showScriptsView(){

    },
    created() {
       serverBus.$on('switchItemListView', (templateID) => {
                this.switchItemListView(templateID);       
            }),
                   
            serverBus.$on('selectedTemplateNameData', (data) => {
                if(data.ID === 2){
                    this.selectedTemplateNameRight = data.Name;
                }
                if(data.ID === 1){
                    this.selectedTemplateNameCenter = data.Name;
                }
                if(data.ID === 0){
                     this.selectedTemplateName = data.Name;
                }
             })
    },
   
    props: {
        templateID: Number,
        isMobile: false
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
