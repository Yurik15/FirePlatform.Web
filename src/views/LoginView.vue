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
                                <div>
                                    <label class="custom-control custom-checkbox">
                                      <input type="checkbox">
                                      <span class="custom-control-indicator"></span>
                                      <span class="custom-control-description small text-dark" style="color: #4a76a8 !important">Remember me</span>
                                    </label>
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

export default {
    
    name: 'LoginView',
    data: () => ({
        login: '',
        password: '',
        wrongloginData: false,
        missedLogin: false,
        missedPassword: false
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
           //const env = 'https://river-lantern-244519.appspot.com';
            const env = 'https://localhost:44358';
            axios.post(env + '/api/Account/LoginTest', {
                    login: this.login,
                    password: this.password
                })
                .then(response => {
                    if(response.data){
                        this.$router.push(rootName);
                    }
                    else{
                        alert("login failed");
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
