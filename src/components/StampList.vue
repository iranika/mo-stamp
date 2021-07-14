<template>
  <v-container
    width="100%"
    class="pa-5"
  >
    <v-card width="95%" class="ma-auto">
      <v-card-title>スタンプ一覧</v-card-title>
      <v-container
        class="fill-height"
        fluid
      >
        <v-row
          justify="center"
          dense
        >
          <v-col class="shrink"
            v-for="card in cards"
            :key="card"
          >
            <img :src="card"/>  


          </v-col>
        </v-row>
      </v-container>
    </v-card>
  </v-container>
</template>

<script>
//import Stamp from "@/components/Stamp.vue";
export default {
  data: () => ({
    cards: ["stamps/yoshi.jpg","stamps/yoshi2.jpg"]
  }),
  components:{
    //Stamp
  }
}
</script>

<style>