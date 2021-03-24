<template>
<div>
<div class="hideForMobile" >
<splitpanes class="default-theme"  style="width: 100%;height: 100%; min-height: 50vh;">
  <pane size="27">
    <span>
    <TheNavbar :templateID=0></TheNavbar>
    </span>
  </pane>
    <pane size="46">
    <span>
      <TheNavbar :templateID=1></TheNavbar>
    </span>
  </pane>
  <pane size="27">
    <span>
      <TheNavbar :templateID=2></TheNavbar>
    </span>
  </pane>
</splitpanes>
</div>
<div class="showForMobile"> 
          <TheNavbar :templateID='2' :isMobile='true'></TheNavbar>
  </div>
</div>
</template>

<script>
import { Splitpanes, Pane } from 'splitpanes'
import 'splitpanes/dist/splitpanes.css'
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
        TheNavbar,
        Splitpanes,
        Pane
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
        token: $cookies.get('token')
    }),
    ready: function () {
  window.addEventListener('resize', this.handleResize)
},
beforeDestroy: function () {
  window.removeEventListener('resize', this.handleResize)
},
    methods: {
    }
}
</script>
<style>

.splitpanes__pane {

  position: relative;
}



</style>
