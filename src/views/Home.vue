<template>
  <StampList></StampList>
</template>

<script lang="ts">
import StampList from '@/components/StampList.vue'
import Vue from 'vue'
//import HelloWorld from '../components/HelloWorld.vue'

export default Vue.extend({
  name: 'Home',

  components: {
    //HelloWorld,
    StampList,
  },
})
</script>

<style scoped>

</style>
