<template>
<div>
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
                            <button class="dropdown-item " type="button" v-on:click="getTemplate(template.id, template.name)">{{template.name}}</button>
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
           <button v-on:click="collapseAlElements()" type="button" class="btn" data-toggle="modal" data-target="#exampleModalCenter">
         <img style="height: 25px; " src="../assets/collapse.png">
</button>
    </nav>
    </div>
</template>

<script>
import axios from 'axios'
import templatesService from '@/api-services/templates.service';
import VueCookies from 'vue-cookies'
import {
    serverBus
} from '../main.js';

export default {
    
    name: 'TheNavbar',
    data: () => ({
        templates: [],
        loading: false,
        hideBackCalcsText: 'Show BackCalcs',
        collapseAllText: 'Collapse All',
        userId: $cookies.get('userId'),
        selectedTemplateName: "",
        preSelection: false
    }),
    methods: {
        getTemplate: function (templateId, templateName) {
            this.$Progress.start();
            this.selectedTemplateName = templateName;
            //var currentTemplate = JSON.parse(localStorage.getItem('template' + templateId));
           // if(currentTemplate){
                //alert("exists");
               // this.$Progress.finish();
               // serverBus.$emit('itemsGroup', currentTemplate);
           // }
           // else{
              //  alert("first");
            templatesService.loadTemplatesData(templateId, $cookies.get('userId'))
                .then(response => {
                    this.$Progress.finish();
                    //localStorage.setItem('template' + templateId, JSON.stringify(response.data));
                    serverBus.$emit('itemsGroup', response.data);
                })
                .catch(e => {
                     this.$Progress.fail();
                    this.errors.push(e)
                })
            //}
        },
        collapseAlElements: function () {
                    serverBus.$emit('collapseAlElements');              
        },
        showAllElements: function () {
                    serverBus.$emit('showAllElements');              
        },
        changePreselection: function () {
            alert("emit");
                    serverBus.$emit('changePreselection');              
        },
        hideBackCalcs: function () {
                    serverBus.$emit('hideBackCalcs'); 
                    if(this.hideBackCalcsText === 'Hide BackCalcs'){
                        this.hideBackCalcsText = 'Show BackCalcs';
                    }
                    else {
                        this.hideBackCalcsText = 'Hide BackCalcs';    
                    }
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
                this.errors.push(e)
            })
    }
}
</script>
