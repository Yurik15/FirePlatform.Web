<template>
 <div >
    <nav class="navbar fixed-top navbar-expand-lg navbar-dark bg-dark" style="position: relative; height: 50px; " >
      <div class="row" style="width: 120%">
      <div class="col-sm-3" style="align-items: center; display: flex; justify-content: flex-start;">
                 <button v-on:click="logout()" type="button" class="navbar-brand btn">
                  </button>
      </div>
            <div class="col-sm-6" style="align-items: center; display: flex; justify-content: center; color: white;">
                       <div>
              <h4>Admin Panel</h4>
      </div>
      </div>
            <div class="col-sm-3" style="align-items: center; display: flex; justify-content: flex-end;">
             <div >
              <a style="color: white;" v-on:click="logout()" href="#">Logout</a>
        </div>
      </div>
      </div>

        <vue-progress-bar></vue-progress-bar>
          <div v-if="loader">
     <div class="text-info d-flex align-items-center justify-content-center mb-3 modal">
    <b-spinner style="width: 5rem; height: 5rem;" label="Loading..."></b-spinner>
  </div>
    </div>
 
    </nav>
        <div style="text-align:center;">
        <h5>Users</h5>
      </div>
 <div style="place-content: center; display: flex">
   <form>
      <div class="form-group">
 <table id="customers"  >
   <tr class="usersRow">
    <th class="usersColumn">Id</th>
    <th class="usersColumn">Login</th>
    <th class="usersColumn"></th>
    <th class="usersColumn"></th>
  </tr>
  <tr v-for="(user, index) in this.users" v-bind:value="user.id" :key="index" class="usersRow">
    <th class="usersColumnId">{{user.id}}</th>
    <th class="usersColumnString"><input v-model="user.login" placeholder="enter new login"/></th>
       <th class="usersColumnString"><input v-model="user.newPassword" placeholder="enter new password" /></th>
    <th class="usersColumnRemove"><button v-on:click="remove(user.id)" type="button" class="btn btn-danger">Remove</button></th>
  </tr>
</table>
  </div>
  <div style="margin-top: 10px; margin-bottom: 30px;">
    <button v-on:click="updateAll()" class="userButtons btn btn-primary">Save changes</button>
    <button v-on:click="cancel()" class="userButtons btn btn-primary">Cancel</button>
    <button v-on:click="addNew()" class="userButtons btn btn-primary">Add new</button>
  </div>
</form>
 </div>

 </div>

</template>

<script>

import axios from 'axios'
import {
    serverBus
} from '../main.js';
import VueCookies from 'vue-cookies'
import ModifyObjectRecursively from 'modify-object-recursively';
import userService from '@/api-services/user.service';

export default {
    name: 'AdminView',
    components: {
    },
    data: () => ({
        loader: false,
         users: []
       }),
    methods: {
      getUsers()
      {
        this.loader = true;

           userService.getAll().then(response => {
                    this.loader = false;
                    this.users = response.data.dataCollection;
           });
      },
      updateAll()
      {
          this.loader = true;

           userService.updateAll(this.users).then(function () {
           location.reload();

           this.loader = false;
      })
      
      },
      addNew()
      {
        let newuser = {id: null, login: '', password: ''};
        this.users.push(newuser);
      },
      remove(id)
      {
        var index = this.users.map(x => {
          return x.id;
        }).indexOf(id);

        this.users.splice(index, 1);
      },
      cancel()
      {
        this.getUsers();
      },
      logout()
      {
        this.$router.push('/login');  
      }
    },
    created()
    {
      this.getUsers();
    }
    }

    </script>