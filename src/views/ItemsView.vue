<template>
<splitpanes class="default-theme" @resize="paneSize = $event[0].size" style="height: 100%; min-height: 100vh;">
  <pane :size="paneSize">
    <span>
          <TheNavbar :isRightTemplate='false'></TheNavbar>
          <TheItems :isRightTemplate='false'></TheItems>
    </span>
  </pane>
  <pane :size="100 - paneSize">
    <span>
        <TheNavbar :isRightTemplate='true'></TheNavbar>
          <TheItems :isRightTemplate='true'></TheItems>
    </span>
  </pane>
</splitpanes>

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
        token: $cookies.get('token'),
        leftDivWidthPercent: 49,
        rightDivWidthPercent: 49,
    }),
    methods: {
    }
}
</script>
