<template>
<div class="page">
      <div class="row">
    <div class="col">
          <TheNavbar :isRightTemplate='false'></TheNavbar>
          <TheItems :isRightTemplate='false'></TheItems>
    </div>
    <div style="background-color: #4a76a8; height: 1000px" >
   <hr width="2"  >
   </div>
    <div class="col">
          <TheNavbar :isRightTemplate='true'></TheNavbar>
          <TheItems :isRightTemplate='true'></TheItems>
    </div>
  </div>
</div>
</template>

<script>
import axios from 'axios'
import TheItems from '@/components/TheItems.vue'
import TheNavbar from '@/components/TheNavbar.vue'
import {
    serverBus
} from '../main.js';
import VueCookies from 'vue-cookies'

export default {
    name: 'ItemsView',
    components: {
        TheItems,
        TheNavbar
    },
    data: () => ({
        SEPARATOR: 'sepComboItem',
        mainCollection: [],
        loading: false,
        backCalcsHidden: true,
        navbarVisible: true,
        navbarVisibleText: 'show',
        showAllTextCollection: [],
        userId: $cookies.get('userId'),
        token: $cookies.get('token'),
    }),
    methods: {
    
    }
}
</script>
