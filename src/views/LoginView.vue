<template>
<div class="container py-5">
    
    <div class="row">
        <div class="col-md-12">
            <h2 class="text-center text-white mb-4" style="color: #4a76a8 !important">Fireplatform</h2>
            <div class="row">
                <div class="col-md-6 mx-auto">
                    <div class="card rounded-0">
                        <div class="card-header">
                            <h3 class="mb-0" style="color: #4a76a8">Login</h3>
                        </div>
                        <div class="card-body">
                            <form class="form" autocomplete="on" id="formLogin" novalidate="">
                                <div class="form-group">
                                    <label style="color: #4a76a8">Username</label>
                                    <input type="text" class="form-control form-control-lg rounded-0" v-model='login'>
                                    <div v-if="missedLogin">
                                    <div class="alert alert-warning loginFailedMessage" role="alert">This field can't be empty!</div>
                                    </div>
                                </div>
                                <div class="form-group" style="color: #4a76a8">
                                    <label>Password</label>
                                    <input type="password" class="form-control form-control-lg rounded-0" 
                                    id="pwd1" required="" autocomplete="new-password" v-model='password'>
                                    <div v-if="missedPassword">
                                    <div class="alert alert-warning loginFailedMessage" role="alert">This field can't be empty!</div>
                                    </div>
                                    <div v-if="wrongloginData">
                                    <div class="alert alert-danger loginFailedMessage" role="alert">Login failed! Please try again...</div>
                                    </div>
                                </div>

                                <div class="form-group" style="color: #4a76a8">
                                 <div class="row" style="margin: 0px; align-items: center;">
                                <div class="col-sm-4" style="padding: 2px !important;">
                                    Language
                                    </div>
                                  <div class="col-sm-8" style="margin-bottom: 3px !important; padding: 5px !important">
                             <form v-on:submit.prevent="send">                                                                                             
                <b-form-select v-model="languageValue" class="mb-3" >
  <option v-for="option in languageOptions" v-bind:key="option.value" v-bind:value="option.value">
    {{ option.text }}
  </option>
<span>Selected: {{ selected }}</span>
                </b-form-select>
            </form>
         </div>
  </div>
   </div>
                              
                            </form>
                       <button class="btn btn-success float-right" v-on:click="tryLogin('/items')" style="backgroundColor: #4a76a8" id="btnLogin">Login</button>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
</div>
</template>

<script>
import axios from 'axios'
import templatesService from '@/api-services/templates.service';
import {
    serverBus
} from '../main.js';
import VueCookies from 'vue-cookies'

export default {
    
    name: 'LoginView',
    data: () => ({
        login: '',
        password: '',
        wrongloginData: false,
        missedLogin: false,
        missedPassword: false,
        languageValue: 'pol',
        languageOptions: [
            { text: 'Polski', value: 'pol' },
            { text: 'English', value: 'eng' }
        ],
    }),
    methods: {
       tryLogin(rootName) {
           this.missedLogin = false;
           this.missedPassword = false;
           this.wrongloginData = false;

           if(this.login === ''){
               this.missedLogin = true;
           }
           if(this.password === ''){
               this.missedPassword = true;
           }
           if(this.login !== '' && this.password !== ''){
                const env = 'http://shine15-001-site1.btempurl.com';
                //const env = 'https://localhost:44358';
                const auth = {
                        'Content-Type': 'application/json;',
                        'Access-Control-Allow-Origin': '*',
                        'Access-Control-Allow-Methods': 'GET, POST' 
                }
            axios.post(env + '/api/Account/Login', {
                    login: this.login,
                    password: this.password
                }, auth)
                .then(response => {
                    if(response.data !== ""){
                        VueCookies.set('userId', response.data.userId);
                        VueCookies.set('token', response.data.token);
                        VueCookies.set('lng', this.languageValue);
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

       }
    },
    created() {  
        
    }
}
</script>
