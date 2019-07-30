<template>
<div class="container py-5">
    
    <div class="row">
        <div class="col-md-12">
            <h2 class="text-center text-white mb-4" style="color: #4a76a8 !important">Fireplatform</h2>
            <div class="row">
                <div class="col-md-6 mx-auto">

                    <!-- form card login -->
                    <div class="card rounded-0">
                        <div class="card-header">
                            <h3 class="mb-0" style="color: #4a76a8">Login</h3>
                        </div>
                        <div class="card-body">
                            <form class="form" autocomplete="on" id="formLogin" novalidate="">
                                <div class="form-group">
                                    <label style="color: #4a76a8">Username</label>
                                    <input type="text" class="form-control form-control-lg rounded-0">
                                    <div class="invalid-feedback">Oops, you missed this one.</div>
                                </div>
                                <div class="form-group" style="color: #4a76a8">
                                    <label>Password</label>
                                    <input type="password" class="form-control form-control-lg rounded-0" id="pwd1" required="" autocomplete="new-password">
                                    <div class="invalid-feedback">Enter your password too!</div>
                                </div>
                                <div>
                                    <label class="custom-control custom-checkbox">
                                      <input type="checkbox" class="custom-control-input">
                                      <span class="custom-control-indicator"></span>
                                      <span class="custom-control-description small text-dark" style="color: #4a76a8 !important">Remember me</span>
                                    </label>
                                </div>
                            </form>
                       <button class="btn btn-success float-right" v-on:click="redirectTo('/items')" style="backgroundColor: #4a76a8" id="btnLogin">Login</button>
                        </div>
                        <!--/card-block-->
                    </div>
                    <!-- /form card login -->

                </div>


            </div>
            <!--/row-->

        </div>
        <!--/col-->
    </div>
    <!--/row-->
</div>
<!--/container-->
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
    }),
    methods: {
       redirectTo(rootName) {
           this.$router.push(rootName)
       }
    },
    created() {  
    }
}
</script>
