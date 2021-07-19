<template>
  <v-container width="100%" class="pa-2">
    <v-card width="100%" class="ma-auto" flat>
      <v-card-title>
        スタンプ一覧
        <v-spacer></v-spacer>
        <!--
        <v-text-field
          v-model="search"
          append-icon="mdi-magnify"
          label="検索ワード"
          multi-line
          hide-details
        ></v-text-field>
        -->
      </v-card-title>
      <v-card-subtitle>
        ※Twitter for web等はクリップボードからの画像貼り付けに対応しています。<br />
        ※右クリック（ロングタップ）して画像をクリップボードにコピーしてください。<br />
      </v-card-subtitle>
      <v-container class="fill-height" fluid>
        <v-row justify="center" dense>
          <v-col class="shrink" v-for="card in cards" :key="card">
            <div >
              <img :src="'/stamps/' + card" height="100px"/>
            </div>
          </v-col>
        </v-row>
      </v-container>
    </v-card>
  </v-container>
</template>

<script>
//import Stamp from "@/components/Stamp.vue";
import Stamps from "@/stamps.json";

export default {
  data: () => ({
    search: "",
    cards: Stamps,
  }),
  components: {
    //Stamp
  },
};
</script>
<style scoped>
.stamps {
  width: 100px;
  height: 100px;
}

</style>