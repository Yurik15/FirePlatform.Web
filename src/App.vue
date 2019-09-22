
<template>
  <div id="app">
    <nav>
        <!--<router-link to='/login'>Login</router-link>-->
    </nav>
    <router-view />
  </div>
</template>

<script>
export default {
  name: 'app',
  created() {
       this.$router.push('/login');
    },
  mounted(){
    
  }
}

</script>