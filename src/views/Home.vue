<template>
  <div>
    <StampList></StampList>
    <Footer></Footer>
  </div>
</template>

<script lang="ts">
import StampList from '@/components/StampList.vue'
import Vue from 'vue'
import Footer from '@/components/Footer.vue';
//import HelloWorld from '../components/HelloWorld.vue'

export default Vue.extend({
  name: 'Home',

  components: {
    //HelloWorld,
    StampList,
    Footer,
  },
})
</script>

<style scoped>

</style>
