<template>
<div class="page hideScroll" style="height: 100vh; margin-top: 52px">
    <div v-if="loader">
     <div class="text-info d-flex align-items-center justify-content-center mb-3 modal">
    <b-spinner style="width: 5rem; height: 5rem;" label="Loading..."></b-spinner>
  </div>
    </div>
    <li style="list-style: none;">
                        <ul class="page hideScroll list-group" style="min-width: 100%; overflow-y: scroll; padding: 0px; list-style: none;" aria-labelledby="navbarDropdownMenuLink">
                            <li class="list-group-item" style="padding: 3px; margin-left: 2px; margin-right: 2px;" no-body v-for="(template, index) in templates" v-bind:value="template.shortName" :key="index">
                            <div>
                                <div class="row">
                                    <div class="col-sm-1">
                                    </div> 
                                    <div class="col-sm-10" style="align-items: center; display: flex; justify-content: left;">
                                            <a style="font-size: 14px; font-weight: 600; color: #4a76a8; " href="#" v-on:click="getTemplate(template, IdTemplate)">{{template.shortName}}</a>
                                    </div> 
                                 <!-- <div class="col-sm-4" style="padding: 2px !important;">
                                    <form v-on:submit.prevent="send">
                                        <b-form-select v-model="template.savedTemplates" @change="onChangeSavedTemplate(template.shortName)"  class="mb-3" style="margin-bottom: 3px !important; padding: 2px !important">
                                            <option value="null" selected >-- Select saved --</option>
                                            <option v-for="savedTemplate in template.savedTemplates" v-bind:key="savedTemplate.savedName"
                                                v-bind:value="savedTemplate.savedName">{{savedTemplate.savedName}} 
                                            </option>
                                        </b-form-select>
                                    </form>
                                </div>   -->
                                        <!-- <div class="col-sm-2" style="align-items: center; display: flex; justify-content: right;">
                                            <button style="height: 35px;" v-on:click="getTemplate(template, IdTemplate)" type="button" class="navbar-brand btn">
                                                <img  src="../assets/download.png">
                                            </button>  
                                        </div> -->

                                         <div class="col-sm-1">
                                    </div> 
                                    </div>
                                </div>     
                            </li>
                        </ul>

                    </li>
</div>
</template>

<script>
import axios from 'axios';
import templatesService from '@/api-services/templates.service';
import {
    serverBus
} from '../main.js';
import VueCookies from 'vue-cookies';


export default {   
    name: 'ItemsList',
    data: () => ({
       templates: [],
       IdTemplate: 0,
       loader: true
    }),
    methods: {
       getTemplate: function (template, templateID) {
            //this.forceRerender();
            this.loader = true;

                template.savedName = this.selectedSavedTemplateName;
                var responseData = null;
                
                templatesService.loadTemplatesData(template, templateID, $cookies.get('lng'))
                .then(response => {
                    this.loader = false;

                    responseData = response.data;
                    if(templateID === 2){
                        serverBus.$emit('itemsGroupRight', responseData);
                    }
                    if(this.templateID === 1){
                        serverBus.$emit('itemsGroupCenter', responseData);
                    }
                    if(templateID === 0){
                        serverBus.$emit('itemsGroupLeft', responseData);
                    }

                    var selectedTemplateNameData = {ID: templateID, Name: template.shortName};

                    serverBus.$emit('selectedTemplateNameData', selectedTemplateNameData);  
                    serverBus.$emit('switchItemListView', templateID);
                }
                )
                .catch(e => {      
                    this.loader = false;    
                                                      
                    if(e.response.status === 401){
                    this.logout();
                }
                })
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
    logout: function(){
            this.$router.push('/login');
        },
    },
    created()
    {
        this.IdTemplate = this.templateID;
        this.loadTemplates();
    },
     props: {
        templateID: Number
     }
}
</script>
