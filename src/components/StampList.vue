<template>
  <v-container width="100%" class="pa-2">
    <v-card v-if="authstore.user.isLogin" width="100%" class="ma-auto" flat>
      <v-card-title>お気に入り</v-card-title>
      <v-container class="fill-height" fluid>
        <v-row justify="center" dense>
          <v-col class="shrink" v-for="card in favorite.cards" :key="card">
            <div style="position:relative">
              <div style="position:absolute; right:0px;" v-if="authstore.user.isLogin">
                <v-btn icon @click="clickHeart(card)" :color="isFavorite(card) ? 'pink' : 'gray'">
                  <v-icon>mdi-heart</v-icon>
                </v-btn>
              </div>
              <img class="stamps" :src="card"/>
            </div>
          </v-col>
        </v-row>
      </v-container>
    </v-card>
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
            <div style="position:relative">
              <div style="position:absolute; right:0px;" v-if="authstore.user.isLogin">
                <v-btn icon @click="clickHeart(card)" :color="isFavorite(card) ? 'pink' : 'gray'">
                  <v-icon>mdi-heart</v-icon>
                </v-btn>
              </div>
              <img class="stamps" :src="card"/>
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
import {AuthStore} from "@/stores/auth";

export default {
  data: () => ({
    search: "",
    cards: Stamps,
    authstore: AuthStore.getInstance(),
    favorite: AuthStore.getInstance().favorite,
  }),
  methods:{
    clickHeart(card){
      const index = this.favorite.cards.indexOf(card)
      if (index != -1){
        this.authstore.removeFavorite(index)
      }else{
        this.authstore.setFavorite(card);
        console.log("favCards",this.favCards)
      }
    },
    isFavorite(card){
      return this.favorite.cards.includes(card)
    }
  },
  components: {
    //Stamp
  },
};
</script>
<style scoped>
.stamps {
  /*width: 100px;*/
  height: 120px;
}

</style>